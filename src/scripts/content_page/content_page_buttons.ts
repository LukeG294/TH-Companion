import {runtime} from "webextension-polyfill"

export function select_all(){
    return(/*html*/`
<button class="sg-button sg-button--m sg-button--solid-light modButtons selectAll" id="selectAll"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">plus outlined</text>
                                <use xlink:href="#icon-add_more" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Select All</span></button>
                    
                    
    `)
}

export function toggle_selected(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-light modButtons" id="toggleSelected"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">filter filled</text>
                                <use xlink:href="#icon-filters" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Toggle Selected</span></button>
                    
                     
    `)
}

export function copy_links(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-light modButtons" id="copyLinks"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">clibboard filled</text>
                                <use xlink:href="#icon-clipboard" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Copy Selected Links</span></button>
                    
                     
    `)
}

export function delete_selected_questions(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="deleteSelectedQuestions"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">trash filled</text>
                                <use xlink:href="#icon-trash" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Delete</span></button>
                    
                     
    `)
}
export function delete_selected_answers(){
  return(/*html*/`
  <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="deleteSelectedAnswers"><span class="sg-button__icon sg-button__icon--m">
                          <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">trash filled</text>
                              <use xlink:href="#icon-trash" aria-hidden="true"></use>
                            </svg></div>
                        </span><span class="sg-button__text">Delete</span></button>
                  
                   
  `)
}

export function delete_selected_comments(){
  return(/*html*/`
  <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="deleteSelectedComments"><span class="sg-button__icon sg-button__icon--m">
                          <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">trash filled</text>
                              <use xlink:href="#icon-trash" aria-hidden="true"></use>
                            </svg></div>
                        </span><span class="sg-button__text">Delete</span></button>
                  
                   
  `)
}

export function approve_selected(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-mint modButtons" id="approveSelected"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">check filled</text>
                                <use xlink:href="#icon-check" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Approve</span></button>
                    
                     
    `)
}

export function confirm_selected(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-blue modButtons" id="confirmSelected"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">star outlined</text>
                                <use xlink:href="#icon-star" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Confirm</span></button>
                    
                     
    `)
}

export function unverify_selected(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-black modButtons" id="unverify"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">star outlined</text>
                                <use xlink:href="#icon-less" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Unverify</span></button>
                    
                     
    `)
}

