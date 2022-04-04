import {insertdata_ticket} from "./ticket_functions"
import {ticket} from "./ticket_exp"
import {subscribe} from "./livemod"
import chrome from "webextension-polyfill";

async function appendModerationButtons() {
  const questions = document.querySelectorAll(".brn-feed-items > div[data-testid = 'feed-item']");
  function saveUser(){
    let data = JSON.parse(document.querySelector("head meta[name='user_data']").getAttribute("content"));
    chrome.storage.local.set({
    "user":{
      "id": data.id,
      "nick": data.nick,
      "auth":{
        "hash": data.cometAuthHash,
        "avatar_url": data.avatar,
      },
      "gender": data.gender,
    }
  });
  }
  saveUser();
  for (let questionBox of Array.from(questions)) {
    let qid = questionBox.querySelector("a[data-test = 'feed-item-link']").getAttribute("href").replace("/question/","").split("?")[0];
    
    //check if the answer button is available
    try{
    let actionlist = questionBox.querySelector(".sg-actions-list__hole.sg-actions-list__hole--to-right");
    if (questionBox.querySelector(".mod-button")) continue;
    actionlist.insertAdjacentHTML("afterend", `<button class="mod-button sg-button--outline"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button>`);
    actionlist.querySelector("a").innerHTML = '<div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-plus"></use></svg></div>'
    }catch(err){
      if(questionBox.id !== "noanswer"){
      questionBox.id = 'noanswer'
      questionBox.querySelector(".brn-feed-item__footer .sg-actions-list").insertAdjacentHTML("afterend", `<div class = "sg-actions-list__hole sg-actions-list__hole--to-right"><button class="mod-button sg-button--outline"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button></div>`);
      }
    }

    //check if the question has been reported + add the report flag
    let bdata = await fetch("https://brainly.com/api/28/api_tasks/main_view/"+qid, {method: "GET"}).then(data => data.json());
    if(bdata.data.task.settings.is_marked_abuse === true){
      questionBox.querySelector(".brn-feed-item__points .brn-points-on-feed").insertAdjacentHTML("afterbegin",`<div class = "repflag"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-report_flag"></use></svg></div></div>`)
    }

    //mod ticket event listeners
    questionBox.querySelector(" .mod-button").addEventListener("click", async function(){
      document.body.insertAdjacentHTML("beforeend", <string>ticket())
      insertdata_ticket(qid)

      document.querySelector(".modal_close").addEventListener("click", async function(){
        document.querySelector(".modal_back").remove()
        await fetch(`https://brainly.com/api/28/moderate_tickets/expire`,{method: "POST", body:`{"model_id":${qid},"model_type_id":1,"schema":"moderation.ticket.expire"}`})
      });
    });
    //livemod call
    //questionBox.querySelector(".brn-feed-item").setAttribute("task-id", qid);
    //subscribe()
  }
}
  
const observer = new MutationObserver(appendModerationButtons);
const addObserverIfFeedAvailable = () => {
  let target = document.querySelector(".sg-layout__content");
  if(!target) return setTimeout(addObserverIfFeedAvailable, 500);
  
  observer.observe(target, { attributes: true, childList: true, characterData: true, subtree: true });
  appendModerationButtons();
};
addObserverIfFeedAvailable();