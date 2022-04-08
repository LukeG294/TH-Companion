export function selectAll(){
    let checkBoxes = document.getElementsByClassName("contentCheckboxes")
    for (let i = 0; i < checkBoxes.length; i++) {
        // @ts-ignore
        checkBoxes[i].checked = 'true'
    }
}
export function copyLinks() {
    let checkBoxes = document.getElementsByClassName("sg-checkbox__element")
    let links = []
    for (let i = 0; i < checkBoxes.length; i++) {
        //@ts-ignore
        if (String(checkBoxes[i].checked) === "true") {
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
}
export function toggleSelection(){
    let checkBoxes = document.getElementsByClassName("contentCheckboxes")
    for (let i = 0; i < checkBoxes.length; i++) {
        //@ts-ignore
        if (String(checkBoxes[i].checked) === "true") {
            //@ts-ignore
            checkBoxes[i].checked = false
        } else {
            //@ts-ignore
            checkBoxes[i].checked = true
        }
    }
}
export async function showDelrsn(){
    if(document.querySelector(".delmenu").classList.contains("show")){
      document.querySelector(".delmenu").classList.remove("show");
      
    }else{
    //open ticket, get response, close it
    document.querySelector(".primary-items").innerHTML = '';
    let id = document.querySelector("tbody a").getAttribute("href").replace("/question/","");
    document.querySelector("#deleteSelectedQuestions .spinner-container").classList.add("show");
    let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${id},"schema":"moderation.content.get"}`)}).then(data => data.json());
    document.querySelector("#deleteSelectedQuestions .spinner-container").classList.remove("show");
    document.querySelector(".delmenu").classList.toggle("show");
    fetch(`https://brainly.com/api/28/moderate_tickets/expire`,{method: "POST", body:`{"model_id":${id},"model_type_id":1,"schema":"moderation.ticket.expire"}`})

    let del_reasons = res.data.delete_reasons.task;
    
    //inserting primary deletion reasons

    for(let i = 0; i < del_reasons.length; i++){
      document.querySelector(".primary-items").insertAdjacentHTML("beforeend",/*html*/`
        <label class="sg-radio sg-radio--xxs" for="r${del_reasons[i].id}">
          <input type="radio" class="sg-radio__element" name="group1" id="r${del_reasons[i].id}" index = "${i}">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">${del_reasons[i].text}</span>
        </label>`
      )
    }
    
    //detect selection of primary deletion reason
    document.querySelector(".primary-items").addEventListener("change", async function(){
      
      document.querySelector(".delmenu").classList.add("secondary");
      let selected_index = document.querySelector(".primary-items input:checked").getAttribute("index");
      let selected_subcats = del_reasons[selected_index].subcategories;
      console.log(selected_subcats);
      document.querySelector(".secondary-items").innerHTML = '';
      //inserting secondary deletion reasons
      for(let i = 0; i < selected_subcats.length; i++){
        document.querySelector(".secondary-items").insertAdjacentHTML("beforeend",/*html*/`
          <label class="sg-radio sg-radio--xxs" for="s${selected_subcats[i].id}">
            <input type="radio" class="sg-radio__element" name="group2" id="s${selected_subcats[i].id}" index = "${i}">
            <span class="sg-radio__ghost" aria-hidden="true"></span>
            <span class="sg-text sg-text--small sg-text--bold sg-radio__label">${selected_subcats[i].title}</span>
          </label>`
        )
      }
      //show deletion reason in textarea
      document.querySelector(".secondary-items").addEventListener("change", function(){
        let selected_reason = selected_subcats[document.querySelector(".secondary-items input:checked").getAttribute("index")]
        console.log(selected_reason);
        (<HTMLInputElement>document.querySelector("textarea.deletion-reason")).value = selected_reason.text;
      });
    });
  }
}

export async function confirmDeletionQuestions(){
  let checkBoxes = document.getElementsByClassName("contentCheckboxes")
  let idsToDelete = []
  for (let i = 0; i < checkBoxes.length; i++) {
      //@ts-ignore
      if (String(checkBoxes[i].checked) === "true") {
          //@ts-ignore
          let link = checkBoxes[i].closest("tr").getElementsByTagName('a')[0].href
          let id = link.split("/")[4]
          idsToDelete.push(id)
      } 
  }
  
  for (let i = 0; i < idsToDelete.length; i++) {
   
      let model_type_id = 1;
      let type = "task"
      //@ts-expect-error
      let reason = document.querySelectorAll(".deletion-reason")[0].value
      //@ts-expect-error
      let warn = document.querySelector("#warn").checked
      //@ts-expect-error
      let take_point = document.querySelector("#pts").checked
      await fetch(`https://brainly.com/api/28/moderation_new/delete_${type}_content`, {
          method: "POST",
          body:JSON.stringify({
            "reason_id":2,
            "reason":reason,
            "give_warning":warn,
            "take_points": take_point,
            "schema":`moderation.${type}.delete`,
            "model_type_id":model_type_id,
            "model_id":idsToDelete[i],
          })
        })
  
  }
}

export async function confirmDeletionAnswers(){
  let checkBoxes = document.getElementsByClassName("contentCheckboxes")
  let idsToDelete = []
  for (let i = 0; i < checkBoxes.length; i++) {
      //@ts-ignore
      if (String(checkBoxes[i].checked) === "true") {
          //@ts-ignore
          let link = checkBoxes[i].closest("tr").getElementsByTagName('a')[0].href
          let id = link.split("/")[4]
          idsToDelete.push(id)
      } 
  }
  
  let answerIDtoDelete = []
  for (let i = 0; i < idsToDelete.length; i++) {
    
    let questionID = idsToDelete[i]
    let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${questionID},"schema":"moderation.content.get"}`)}).then(data => data.json());
    await fetch(`https://brainly.com/api/28/moderate_tickets/expire`,{method: "POST", body:`{"model_id":${questionID},"model_type_id":1,"schema":"moderation.ticket.expire"}`})
    let answers = res.data.responses
    let times = 0
    
   
    if (answers.length === 1){
      times = 1
    } else {
      times = 2
    }
    for (let x = 0; x < times; x++) {
      
      let user = String(answers[x]["user_id"])
      if (user === String(window.location.href.split("/")[5])){
        answerIDtoDelete.push(answers[x]["id"])
      }
    }
    
  }

  let success = 0
  let fail = 0
  for (let i = 0; i < answerIDtoDelete.length; i++) {
   
      let model_type_id = 2;
      let type = "response"
      //@ts-expect-error
      let reason = document.querySelectorAll(".deletion-reason")[0].value
      //@ts-expect-error
      let warn = document.querySelector("#warn").checked
      //@ts-expect-error
      let take_point = document.querySelector("#pts").checked
      let response = await fetch(`https://brainly.com/api/28/moderation_new/delete_${type}_content`, {method: "POST",body:JSON.stringify({"reason_id":2,"reason":reason,"give_warning":warn,"take_points": take_point,"schema":`moderation.${type}.delete`,"model_type_id":model_type_id,"model_id":answerIDtoDelete[i]})}).then(data => data.json());;
      console.log(response)
      if (response["success"] === true){
        success+=1
      } else {
        fail +=1
      }
  }

  if (fail > 0){
    let banner = document.createElement('div')
    document.querySelector("#flash-msg").appendChild(banner)
    banner.outerHTML = `<div aria-live="assertive" class="sg-flash" role="alert">
                <div class="sg-flash__message sg-flash__message--error">
                <div class="sg-text sg-text--small sg-text--bold sg-text--to-center">${success} removed, ${fail} had an error. Make sure they weren't already deleted.</div>
                </div>
            </div>`
    document.querySelector(".sg-flash").addEventListener("click",function(){
      this.remove();
    })
  } else {
    let banner = document.createElement('div')
    document.querySelector("#flash-msg").appendChild(banner)
    banner.outerHTML = `<div aria-live="assertive" class="sg-flash" role="alert">
                <div class="sg-flash__message sg-flash__message--success">
                <div class="sg-text sg-text--small sg-text--bold sg-text--to-center">${success} removed successfully!</div>
                </div>
            </div>`
    document.querySelector(".sg-flash").addEventListener("click",function(){
      this.remove();
    })
  }
  
  
}
export async function showDelrsnAnswers(){
    //open ticket, get response, close it
    let id = document.querySelector("tbody a").getAttribute("href").replace("/question/","");
    let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${id},"schema":"moderation.content.get"}`)}).then(data => data.json());
    await fetch(`https://brainly.com/api/28/moderate_tickets/expire`,{method: "POST", body:`{"model_id":${id},"model_type_id":1,"schema":"moderation.ticket.expire"}`})

    let del_reasons = res.data.delete_reasons.response;
   
    //inserting primary deletion reasons

    for(let i = 0; i < del_reasons.length; i++){
      document.querySelector(".primary-items").insertAdjacentHTML("beforeend",/*html*/`
        <label class="sg-radio sg-radio--xxs" for="${del_reasons[i].id}">
          <input type="radio" class="sg-radio__element" name="group1" id="${del_reasons[i].id}$" index = "${i}">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">${del_reasons[i].text}</span>
        </label>`
      )
    }
    
      document.querySelector(".delmenu").classList.toggle("show");
    
    //detect selection of primary deletion reason
    document.querySelector(".primary-items").addEventListener("change", async function(){
      
      document.querySelector(".delmenu").classList.add("secondary");
      let selected_index = document.querySelector(".primary-items input:checked").getAttribute("index");
      let selected_subcats = del_reasons[selected_index].subcategories;
      console.log(selected_subcats);
      document.querySelector(".secondary-items").innerHTML = '';
      //inserting secondary deletion reasons
      for(let i = 0; i < selected_subcats.length; i++){
        document.querySelector(".secondary-items").insertAdjacentHTML("beforeend",/*html*/`
          <label class="sg-radio sg-radio--xxs" for="${selected_subcats[i].id}">
            <input type="radio" class="sg-radio__element" name="group2" id="${selected_subcats[i].id}}" index = "${i}">
            <span class="sg-radio__ghost" aria-hidden="true"></span>
            <span class="sg-text sg-text--small sg-text--bold sg-radio__label">${selected_subcats[i].title}</span>
          </label>`
        )
      }
      //show deletion reason in textarea
      document.querySelector(".secondary-items").addEventListener("change", function(){
        let selected_reason = selected_subcats[document.querySelector(".secondary-items input:checked").getAttribute("index")]
        console.log(selected_reason);
        (<HTMLInputElement>document.querySelector("textarea.deletion-reason")).value = selected_reason.text;
      });
    });
  }
