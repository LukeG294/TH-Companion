import {academicIntegrityReasons, approve_selected, confirm_selected, copy_links, delete_selected, question_deletion_menu, improperQuestionReasons, miscellaneousReasons, select_all, toggle_selected, unclearReasons, unverify_selected, answer_deletion_menu, improperAnswerReasons, incompleteAnswerReasons, miscellaneousAnswerReasons, plagiarismAnswerReasons} from "../common/content_page_buttons"
import {find, runtime} from "webextension-polyfill";

window.addEventListener("load", function(){
    function getPageType(){
        let type = String(window.location.href.split("/")[6])
        if (type === "tasks"){
            return "task"
        } else if (type === "responses"){
            return "response"
        } else if (type === "comments_tr"){
            return "comment"
        } else {
            return "task"
        }
    }
    let content = document.querySelectorAll("#content-old > div:nth-child(2) > div:nth-child(25) > table > tbody > tr")
    
    for (let i = 0; i < content.length; i++) {
     content[i].insertAdjacentHTML('beforeend',`<div class="sg-space-x-m"><label class="sg-checkbox" for="mmm41eh8ef8"><input type="checkbox" class="sg-checkbox__element contentCheckboxes" id="${i}">
     <div class="sg-checkbox__ghost" aria-hidden="true">
       <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg" role="img" aria-labelledby="title-check-255xyo" focusable="false"><text id="title-check-255xyo" hidden="">check</text>
           <use xlink:href="#icon-check" aria-hidden="true"></use>
         </svg></div>
     </div>
   </label></div>`)
    } 
  
    let buttonArea = document.querySelector("#content-old > div:nth-child(3) > p")
    //if you want to add permissions for each button later, do it here (below)
    let url = String(window.location.href)
    
    if (url.includes("tasks") === true){
        buttonArea.insertAdjacentHTML('afterend',question_deletion_menu())
        buttonArea.insertAdjacentHTML('afterend',confirm_selected())
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
        
    } else if (url.includes("responses") === true){
        buttonArea.insertAdjacentHTML('afterend',answer_deletion_menu())
        buttonArea.insertAdjacentHTML('afterend',approve_selected())
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
        buttonArea.insertAdjacentHTML('afterend',unverify_selected())
        
    } else if (url.includes("comments_tr") === true){
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
    } else {
        buttonArea.insertAdjacentHTML('afterend',question_deletion_menu())
        buttonArea.insertAdjacentHTML('afterend',confirm_selected())
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
    }
    
    
    
    
    buttonArea.insertAdjacentHTML('afterend',copy_links())
    buttonArea.insertAdjacentHTML('afterend',toggle_selected())
    buttonArea.insertAdjacentHTML('afterend',select_all())
    document.getElementById("selectAll").addEventListener("click",function(){
        let checkBoxes = document.getElementsByClassName("sg-checkbox__element")
        for (let i = 0; i < checkBoxes.length; i++) {
            // @ts-ignore
            checkBoxes[i].checked = 'true'
        } 
    })
    document.getElementById("toggleSelected").addEventListener("click",function(){
        let checkBoxes = document.getElementsByClassName("sg-checkbox__element")
        for (let i = 0; i < checkBoxes.length; i++) {
            
                //@ts-ignore
                if (String(checkBoxes[i].checked) === "true"){
                    //@ts-ignore
                    checkBoxes[i].checked = false
                } else {
                    //@ts-ignore
                    checkBoxes[i].checked = true
                }
                
            
        } 
    })
    document.getElementById("copyLinks").addEventListener("click",function(){
        let checkBoxes = document.getElementsByClassName("sg-checkbox__element")
        let links = []
        for (let i = 0; i < checkBoxes.length; i++) {
            
                //@ts-ignore
                if (String(checkBoxes[i].checked) === "true"){
                  links.push(checkBoxes[i].closest("tr").getElementsByTagName('a')[0].href)
                } 
                
            
           
                
            
        } 
        let joinLinks = links.join("\n")
        navigator.clipboard.writeText(joinLinks)
        .then(() => {
          // Success!
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
        links = []
    })
    document.getElementById("deleteSelected").addEventListener("click",function(){
        let deletionMenu = document.getElementsByClassName("delmenu")[0]
        if (String(deletionMenu.getAttribute("style")).includes("block") === true){
            deletionMenu.setAttribute("style", `display:none;`);
        } else {
            deletionMenu.setAttribute("style", `display:block;`);
        }
        
    })
    async function getQReasonText(){
        //@ts-ignore
        let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${document.querySelector("#content-old > div:nth-child(2) > div:nth-child(25) > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").href.split('/')[4]},"schema":"moderation.content.get"}`)}).then(data => data.json())
        
        function getSubreasons(num){
            let subReasons = res.data.delete_reasons[getPageType()][num]["subcategories"]
            
            for (let i = 0; i < subReasons.length; i++) {
             
             let idToFind = document.getElementById("secondary-reason"+String(subReasons[i]["id"]))
             
             idToFind.addEventListener("click",function(){
                 //@ts-ignore
                 document.querySelector(".deletion-reason").innerText = subReasons[i]["text"]
             })
         }
        }
        document.querySelector("#improperQuestionRsn").addEventListener("click", function(){
            document.querySelector(".secondary-items").innerHTML = improperQuestionReasons()
            getSubreasons(0)
           
         });
         document.querySelector("#miscellaneousRsn").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = miscellaneousReasons()
             getSubreasons(1)
          });
         document.querySelector("#unclearRsn").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = unclearReasons()
             getSubreasons(2)
         });
         document.querySelector("#academicIntegrityRsn").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = academicIntegrityReasons()
             getSubreasons(3)
             
         });
    }
    getQReasonText()

    async function getAReasonText(){
        //@ts-ignore
        let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${document.querySelector("#content-old > div:nth-child(2) > div:nth-child(25) > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").href.split('/')[4]},"schema":"moderation.content.get"}`)}).then(data => data.json())
        
        function getSubreasons(num){
            let subReasons = res.data.delete_reasons[getPageType()][num]["subcategories"]
            
            for (let i = 0; i < subReasons.length; i++) {
             
             let idToFind = document.getElementById("secondary-reason"+String(subReasons[i]["id"]))
             
             idToFind.addEventListener("click",function(){
                 //@ts-ignore
                 document.querySelector(".deletion-reason").innerText = subReasons[i]["text"]
             })
         }
        }
        document.querySelector("#miscellaneousAnswer").addEventListener("click", function(){
            document.querySelector(".secondary-items").innerHTML = miscellaneousAnswerReasons()
            getSubreasons(0)
           
         });
         document.querySelector("#improperAnswer").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = improperAnswerReasons()
             getSubreasons(1)
          });
         document.querySelector("#incompleteAnswer").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = incompleteAnswerReasons()
             getSubreasons(2)
         });
         document.querySelector("#plagiarismAnswer").addEventListener("click", function(){
             document.querySelector(".secondary-items").innerHTML = plagiarismAnswerReasons()
             getSubreasons(3)
             
         });
    }
    getAReasonText()


    
        
   
     
    document.getElementById("confirmDeletion").addEventListener("click",function(){
        let checkBoxes = document.getElementsByClassName("contentCheckboxes")
        let ids = []
        for (let i = 0; i < checkBoxes.length; i++) {
            
                //@ts-ignore
                if (String(checkBoxes[i].checked) === "true"){
                 
                  let link = checkBoxes[i].closest("tr").getElementsByTagName('a')[0].href
                  let id = link.split("/")[4]
                  ids.push(id)
                } 
        } 
        
        
        let countDeletions = 0
        
        for (let i = 0; i < ids.length; i++) {
           
            let type = getPageType()
            let model_type_id = 1;
            //@ts-ignore
            let reason = document.querySelector(".deletion-reason").value
            //@ts-ignore
            let warn = document.getElementById("warnUser").checked
            //@ts-ignore
            let take_point = document.getElementById("takePoints").checked
            let modelid = ids[i]
            //@ts-ignore
            if (document.getElementById("selectQuestion").checked === true){
                type = "task"
                //@ts-ignore
            } else if (document.getElementById("selectAnswer").checked === true){
                type = "response"
            } else {
                alert("You need to choose between deleting the answer or question it belongs to.")
                type = "none"
            }
            
            if(type === "task") {model_type_id = 1; 
                async function f(){
                    await fetch(`https://brainly.com/api/28/moderation_new/delete_${type}_content`, {
                    method: "POST",
                    body:JSON.stringify({
                      "reason_id":2,
                      "reason":reason,
                      "give_warning":warn,
                      "take_points": take_point,
                      "schema":`moderation.${type}.delete`,
                      "model_type_id":model_type_id,
                      "model_id":modelid,
                    })
                  })
                  countDeletions+=1
                }
                f()}
            //get the answer id to delete it 
            if(type === "response") {
                model_type_id = 2; 
                
                
                var xhr = new XMLHttpRequest();

                xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    let firstAnswer = JSON.parse(this.responseText)["data"]["responses"][0];
                    let secondAnswer = JSON.parse(this.responseText)["data"]["responses"][1];
                    let currentUser = window.location.href.split("/")[5]
                    if (String(currentUser) === String(firstAnswer["user_id"])){
                        let answerID = firstAnswer["id"]
                        async function f(){
                            await fetch(`https://brainly.com/api/28/moderation_new/delete_${type}_content`, {
                                method: "POST",
                                body:JSON.stringify({
                                "reason_id":2,
                                "reason":reason,
                                "give_warning":warn,
                                "take_points": take_point,
                                "schema":`moderation.${type}.delete`,
                                "model_type_id":model_type_id,
                                "model_id":answerID,
                                })
                            })
                        }
                        f()
                    } else if (String(currentUser) === String(secondAnswer["user_id"])){
                        let answerID = secondAnswer["id"]
                        async function f(){
                            await fetch(`https://brainly.com/api/28/moderation_new/delete_${type}_content`, {
                                method: "POST",
                                body:JSON.stringify({
                                "reason_id":2,
                                "reason":reason,
                                "give_warning":warn,
                                "take_points": take_point,
                                "schema":`moderation.${type}.delete`,
                                "model_type_id":model_type_id,
                                "model_id":answerID,
                                })
                            })
                        }
                        f()
                    }
                }
                });

                xhr.open("POST", `https://brainly.com/api/28/api_tasks/main_view/${ids[i]}?accept=application/json`);

                xhr.send();

            }
            
           
            
           
          }
               
        
     
        
    })

})

