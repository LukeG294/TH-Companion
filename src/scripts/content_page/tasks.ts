import {
    add_icons,
    confirm_selected,
    copy_links,
    delete_selected_questions,
    deletion_menu,
    select_all,
    toggle_selected
} from "./content_page_buttons"
import {
    selectAll, 
    copyLinks,
    toggleSelection,
    showDelrsn,
    confirmDeletionQuestions
} from "./button_functions"


function addButtons(){
    let content = document.querySelectorAll("#content-old > div:nth-child(2) > div:nth-child(25) > table > tbody > tr")
    for (let i = 0; i < content.length; i++) {
        content[i].insertAdjacentHTML('beforeend', `
        <div class="sg-space-x-m"><label class="sg-checkbox" for="mmm41eh8ef8"><input type="checkbox" class="sg-checkbox__element contentCheckboxes" id="${i}">
            <div class="sg-checkbox__ghost" aria-hidden="true">
            <div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg" role="img" aria-labelledby="title-check-255xyo" focusable="false"><text id="title-check-255xyo" hidden="">check</text>
                <use xlink:href="#icon-check" aria-hidden="true"></use>
                </svg>
            </div>
        </div>
        </label></div>
    `)}
    add_icons()
    let buttonArea = document.querySelector("#content-old > div:nth-child(3) > p")
        //if you want to add permissions for each button later, do it here (below)
    let url = String(window.location.href)
    buttonArea.insertAdjacentHTML('afterend', deletion_menu())
    buttonArea.insertAdjacentHTML('afterend', confirm_selected())
    buttonArea.insertAdjacentHTML('afterend', delete_selected_questions())
    buttonArea.insertAdjacentHTML('afterend', copy_links())
    buttonArea.insertAdjacentHTML('afterend', toggle_selected())
    buttonArea.insertAdjacentHTML('afterend', select_all())

    document.getElementById("selectAll").addEventListener("click", function(){selectAll()})
    document.getElementById("toggleSelected").addEventListener("click", function(){toggleSelection()})
    document.getElementById("copyLinks").addEventListener("click", function(){copyLinks()})
    document.querySelector("#deleteSelectedQuestions").addEventListener("click", function(){showDelrsn()})
    document.querySelector("#delete").addEventListener("click",function(){confirmDeletionQuestions()})
}

addButtons()
