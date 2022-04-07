async function appendModerationButtons() {
    const answers = document.querySelectorAll("div[data-testid = 'moderation_box_answer']");
    
    for (let modBox of Array.from(answers)) {
      let appendSection = modBox.querySelector("div[class = 'sg-flex sg-flex--justify-content-space-between']")
      
    
      
      
      appendSection.insertAdjacentHTML("afterend", `<button class="mod-button sg-button--outline"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button>`);
      appendSection.querySelector("a").innerHTML = '<div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-plus"></use></svg></div>'
      
  
     
    }
  }

const observer = new MutationObserver(appendModerationButtons);
const addObserverIfFeedAvailable = () => {
  let target = document.querySelector("div[data-testid = 'moderation_box_answer']");
  if(!target) return setTimeout(addObserverIfFeedAvailable, 500);
  
  observer.observe(target, { attributes: true, childList: true, characterData: true, subtree: true });
  appendModerationButtons();
};

addObserverIfFeedAvailable();
