import {insertdata_ticket} from "./ticket_functions"
import {ticket} from "./ticket_exp"
function appendModerationButtons() {
  const questions = document.querySelectorAll(".brn-feed-items > div[data-testid = 'feed-item']");
  for (let questionBox of Array.from(questions)) {
    let qid = questionBox.querySelector("a[data-test = 'feed-item-link']").getAttribute("href").replace("/question/","").split("?")[0];
    
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

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      if(JSON.parse(this.responseText).data.task.settings.is_marked_abuse === true){
        questionBox.querySelector(".brn-feed-item__points .brn-points-on-feed").insertAdjacentHTML("afterbegin",`<div class = "repflag"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-report_flag"></use></svg></div></div>`)
      }
    }
  });

  xhr.open("GET", "https://brainly.com/api/28/api_tasks/main_view/"+qid);

  xhr.send();

    questionBox.querySelector(" .mod-button").addEventListener("click", async function(){
      document.body.insertAdjacentHTML("beforeend", <string>ticket())
      insertdata_ticket(qid)

      document.querySelector(".modal_close").addEventListener("click", async function(){
        document.querySelector(".modal_back").remove()
        await fetch(`https://brainly.com/api/28/moderate_tickets/expire`,{method: "POST", body:`{"model_id":${qid},"model_type_id":1,"schema":"moderation.ticket.expire"}`})
    })
    })
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