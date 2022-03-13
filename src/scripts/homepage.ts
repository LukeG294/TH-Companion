import React from "react";

function appendModerationButtons() {
    const questions = document.querySelectorAll(".brn-feed-items > div[data-testid = 'feed-item'] .brn-feed-item__points .brn-feed-item__grid-gap-bottom");
    for (let questionBox of questions[Symbol.iterator]()) {
      if (questionBox.querySelector(".mod-button")) return;
      questionBox.insertAdjacentHTML("beforeend", `<button class="mod-button"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></button>`);
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