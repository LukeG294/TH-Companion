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

export function delete_selected(){
    return(/*html*/`
    <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="deleteSelected"><span class="sg-button__icon sg-button__icon--m">
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

export function question_deletion_menu(){
    return(/*html*/`<div class="delmenu">

    <div class="primary-items" style="margin-top:20px;">
      <label class="sg-radio sg-radio--xxs" for="127256776" id="improperQuestionRsn">
        <input type="radio" class="sg-radio__element" name="group1" id="127256776" index="0">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Improper Question</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="2227256776" id="miscellaneousRsn">
        <input type="radio" class="sg-radio__element" name="group1" id="2227256776" index="1">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Miscellaneous</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="3627256776" id="unclearRsn">
        <input type="radio" class="sg-radio__element" name="group1" id="3627256776" index="2">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Unclear Question</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="3727256776" id="academicIntegrityRsn">
        <input type="radio" class="sg-radio__element" name="group1" id="3727256776" index="3">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Academic Integrity</span>
      </label></div>
      <div class="secondary-items">
     </div>
    <textarea placeholder="Reason" class=" deletion-reason sg-textarea sg-textarea--tall"></textarea>
    
    <div class="sg-space-x-m del-options">
      <div class="warnpts">
        <label class="sg-checkbox" for="warn">
          <input type="checkbox" id="warnUser" class="sg-checkbox__element" id="warn">
          <div class="sg-checkbox__ghost" aria-hidden="true">
            <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div>
          </div>
          <span class="sg-text sg-text--small sg-text--bold sg-checkbox__label">warn user</span>
        </label>

        <label class="sg-checkbox takePts"  for="pts">
          <input type="checkbox" class="sg-checkbox__element" id="takePoints">
          <div class="sg-checkbox__ghost" aria-hidden="true">
            <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div>
          </div>
          <span class="sg-text sg-text--small sg-text--bold sg-checkbox__label">take points</span>
        </label>
      </div>
      <div class="confirmdel">
      <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="confirmDeletion"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">trash filled</text>
                                <use xlink:href="#icon-trash" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Delete</span></button>
      </div>
    </div>
  </div>
</div>
</div>
</div>`)
}

export function improperQuestionReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="1127257538" id="secondary-reason11">
    <input type="radio" class="sg-radio__element" name="group2" id="1127257538" index="0">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Too Many Questions </span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="1527257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason15" index="1">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Link in Question</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="1727257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason17" index="2">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Essay or Project</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="3027257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason30" index="3">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Too Trivial</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="6727257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason67" index="4">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Brainly-Related Question</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="7527257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason75" index="5">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Wrong Subject</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="7827257538">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason78" index="6">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Not a School Problem </span>
  </label>
                    
                     
    `)
}
export function unclearReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="1827257538">
    <input type="radio" class="sg-radio__element" name="group2"  id="secondary-reason18" index="0">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Unclear Question</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8027257538">
    <input type="radio" class="sg-radio__element" name="group2"  id="secondary-reason80" index="1">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Unclear Attachment</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8127257538">
    <input type="radio" class="sg-radio__element" name="group2"  id="secondary-reason81" index="2">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Too General </span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8227257538">
    <input type="radio" class="sg-radio__element" name="group2"  id="secondary-reason82" index="3">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Incomplete Question </span>
  </label>
                    
                     
    `)
}
export function miscellaneousReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="627257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason6"  index="0">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Default</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="927257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason9"  index="1">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Not English</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="2427257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason24"  index="2">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Multiple Posting</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="3827257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason38"  index="3">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Inappropriate Content</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="5627257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason56"  index="4">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Personal Information</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="7227257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason72"  index="5">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Self Harm</span>
        </label>
                    
                     
    `)
}
export function academicIntegrityReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="7727257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason77"  index="0">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Content from Another Source</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="7927257538">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason79"  index="1">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Content Prohibited</span>
        </label>
                    
                     
    `)
}

export function answer_deletion_menu(){
    return(/*html*/`<div class="delmenu">

    <div class="primary-items">
      <label class="sg-radio sg-radio--xxs" for="2323200155">
        <input type="radio" class="sg-radio__element" name="group1" id="miscellaneousAnswer" index="0">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Miscellaneous</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="3823200155">
        <input type="radio" class="sg-radio__element" name="group1" id="improperAnswer" index="1">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Improper Answer</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="3923200155">
        <input type="radio" class="sg-radio__element" name="group1" id="incompleteAnswer" index="2">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Incomplete Answer</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="4023200155">
        <input type="radio" class="sg-radio__element" name="group1" id="plagiarismAnswer" index="3">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Plagiarism</span>
      </label></div>
      <div class="secondary-items">
        </div>
        
    <div class="qa">
    <label class="sg-radio sg-radio--xxs" for="selectQuestion">
        <input type="radio" class="sg-radio__element" name="group3" id="selectQuestion" index="4">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Question</span>
      </label>
      <label class="sg-radio sg-radio--xxs" for="selectAnswer">
        <input type="radio" class="sg-radio__element" name="group3" id="selectAnswer" index="4">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Answer</span>
      </label>
    </div>
    <textarea placeholder="Reason" class=" deletion-reason sg-textarea sg-textarea--tall"></textarea>
    
    <div class="sg-space-x-m del-options">
      <div class="warnpts">
        <label class="sg-checkbox" for="warn">
          <input type="checkbox" id="warnUser" class="sg-checkbox__element" id="warn">
          <div class="sg-checkbox__ghost" aria-hidden="true">
            <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div>
          </div>
          <span class="sg-text sg-text--small sg-text--bold sg-checkbox__label">warn user</span>
        </label>

        <label class="sg-checkbox takePts"  for="pts">
          <input type="checkbox" class="sg-checkbox__element" id="takePoints">
          <div class="sg-checkbox__ghost" aria-hidden="true">
            <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div>
          </div>
          <span class="sg-text sg-text--small sg-text--bold sg-checkbox__label">take points</span>
        </label>

        
      </div>
      <div class="confirmdel">
      <button class="sg-button sg-button--m sg-button--solid-light sg-button--solid-light-toggle-peach modButtons" id="confirmDeletion"><span class="sg-button__icon sg-button__icon--m">
                            <div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg" role="img"  focusable="false"><text id="title-add_more-9qmrbd" hidden="">trash filled</text>
                                <use xlink:href="#icon-trash" aria-hidden="true"></use>
                              </svg></div>
                          </span><span class="sg-button__text">Delete</span></button>
      </div>
    </div>
  </div>
</div>
</div>
</div>`)
}

export function miscellaneousAnswerReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="2123200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason21" index="0">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Not English</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="2223200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason22" index="1">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Please Be Nice to Other Users</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="5723200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason57" index="2">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Default</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="7323200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason73" index="3">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Self Harm</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8423200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason84" index="4">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Inappropriate Content</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8523200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason85" index="5">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Personal Information</span>
  </label>
                    
                     
    `)
}

export function improperAnswerReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="3223200133">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason32" index="0">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Question about Question</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="3523200133">
          <input type="radio" class="sg-radio__element" name="group2"id="secondary-reason35" index="1">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">IDK Answer </span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="4823200133">
          <input type="radio" class="sg-radio__element" name="group2"id="secondary-reason48" index="2">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Mistakes in Answer</span>
        </label>
        <label class="sg-radio sg-radio--xxs" for="5523200133">
          <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason55" index="3">
          <span class="sg-radio__ghost" aria-hidden="true"></span>
          <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Spam Answer</span>
        </label>
                    
                     
    `)
}

export function incompleteAnswerReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="1323200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason13"index="0">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Not Clear</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="2023200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason20" index="1">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Incomplete Answer</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="3323200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason33" index="2">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">No Calculations (STEM Only)</span>
  </label>
                    
                     
    `)
}

export function plagiarismAnswerReasons(){
    return(/*html*/`
    <label class="sg-radio sg-radio--xxs" for="723200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason7" index="0">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Copied From Another Source</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="823200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason8" index="1">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Link in Answer</span>
  </label>
  <label class="sg-radio sg-radio--xxs" for="8323200133">
    <input type="radio" class="sg-radio__element" name="group2" id="secondary-reason83" index="2">
    <span class="sg-radio__ghost" aria-hidden="true"></span>
    <span class="sg-text sg-text--small sg-text--bold sg-radio__label">Copied from Another User </span>
  </label>      
                     
    `)
}
