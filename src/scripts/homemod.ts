function appendModerationButtons() {
  const questions = document.querySelectorAll(".brn-feed-items > div[data-testid = 'feed-item']");
  for (let questionBox of Array.from(questions)) {
    try{
    let actionlist = questionBox.querySelector(".sg-actions-list__hole.sg-actions-list__hole--to-right");
    if (questionBox.querySelector(".mod-button")) continue;
    actionlist.insertAdjacentHTML("afterend", `<button class="mod-button sg-button--outline"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button>`);
    actionlist.querySelector("a").innerHTML = '<div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-plus"></use></svg></div>'
    }catch(err){
      if(questionBox.id !== "noanswer"){
      questionBox.id = 'noanswer'
      questionBox.querySelector(".brn-feed-item__footer .sg-actions-list").insertAdjacentHTML("afterend", `<div class = "sg-actions-list__hole sg-actions-list__hole--to-right"<button class="mod-button sg-button--outline"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button></div>`);
      }
    }

    questionBox.querySelector(" .mod-button").addEventListener("click", function(){
      document.body.insertAdjacentHTML("beforeend", `
      <div class = "modal_back">
        <div class = "modal">
          <div class="modal_close" role="button" tabindex="0"><div class="sg-icon sg-icon--icon-gray-50 sg-icon--x24"><svg class="sg-icon__svg" role="img" aria-labelledby="title-close-r5g6x" focusable="false"><title id="title-close-r5g6x">close</title><use xlink:href="#icon-close" aria-hidden="true"></use></svg></div></div>
        </div>
      </div>
      `)
      document.querySelector(".modal_close").addEventListener("click", function(){
        document.querySelector(".modal_back").remove()
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