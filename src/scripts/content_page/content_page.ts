import {academicIntegrityReasons, approve_selected, confirm_selected, copy_links, delete_selected, deletion_menu, improperQuestionReasons, miscellaneousReasons, select_all, toggle_selected, unclearReasons, unverify_selected} from "../common/content_page_buttons"
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
    buttonArea.insertAdjacentHTML('afterend',deletion_menu())
    if (url.includes("tasks") === true){
        buttonArea.insertAdjacentHTML('afterend',confirm_selected())
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
    } else if (url.includes("responses") === true){
        buttonArea.insertAdjacentHTML('afterend',approve_selected())
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
        buttonArea.insertAdjacentHTML('afterend',unverify_selected())
    } else if (url.includes("comments_tr") === true){
        buttonArea.insertAdjacentHTML('afterend',delete_selected())
    } else {
        window.location.href += "/tasks"
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
    async function getReasonText(){
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
    getReasonText()
    
        
   
     
    document.getElementById("confirmDeletion").addEventListener("click",function(){
        let checkBoxes = document.getElementsByClassName("contentCheckboxes")
        let ids = []
        for (let i = 0; i < checkBoxes.length; i++) {
            
                //@ts-ignore
                if (String(checkBoxes[i].checked) === "true"){
                  console.log(checkBoxes[i])
                  let link = checkBoxes[i].closest("tr").getElementsByTagName('a')[0].href
                  let id = link.split("/")[4]
                  ids.push(id)
                } 
        } 
        let i = 0;
        for (i < ids.length; i++;) {
            let type = getPageType()
            let model_type_id = 1;
            //@ts-ignore
            let reason = document.querySelector(".deletion-reason").value
            //@ts-ignore
            let warn = document.getElementById("warnUser").checked
            //@ts-ignore
            let take_point = document.getElementById("takePoints").checked
            if(type === "task") {model_type_id = 1;}
            if(type === "response") {model_type_id = 2;}
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
                  "model_id":ids[i],
                })
              })
            }
            f()
          }
               
          let x = document.createElement("div")
                document.getElementById("flash-msg").appendChild(x)
                                x.outerHTML = `<div aria-live="assertive" class="sg-flash" role="alert">
                                                <div class="sg-flash__message sg-flash__message--error">
                                                <div class="sg-text sg-text--small sg-text--bold sg-text--to-center">Deleted ${i} questions.</div>
                                                </div>
                                            </div>`
     
        
    })

})

