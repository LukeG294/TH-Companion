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

    questionBox.querySelector(" .mod-button").addEventListener("click", function(){
      document.body.insertAdjacentHTML("beforeend", `
      <div class = "modal_back"><div class = "modal">
      <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Question Content</h1>
        <div class = "modal_close"><div class="sg-toplayer__close" role="button" tabindex="0"><div class="sg-icon sg-icon--icon-gray-50 sg-icon--x24"><svg class="sg-icon__svg" role="img" aria-labelledby="title-close-zvtc08" focusable="false"><title id="title-close-zvtc08">close</title><use xlink:href="#icon-close" aria-hidden="true"></use></svg></div></div></div>
        
        <div class = "preview-content">
        
          <div class="sg-spinner-container">
            <div class="sg-spinner-container__overlay">
              <div class="sg-spinner sg-spinner--gray-900 sg-spinner--small"></div>
            </div>
          </div>

          <div class = "content-item question">
          </div>
        
          <div class = "answers">

            <div class = "content-item answer1">

            </div>
            <div class = "content-item answer2">

            </div>
          </div>
        </div>
      `
      )
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