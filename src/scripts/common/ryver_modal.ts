import {runtime} from "webextension-polyfill"
function modal_str(){
    return(/*html*/`
        <div class="modal_back">
            <div class="modal-ryv">
                <div class = "modal_close">
                    <div class="sg-icon sg-icon--dark sg-icon--x32">
                        <svg class="sg-icon__svg"><use xlink:href="#icon-close"></use></svg>
                    </div>
                </div>
                <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Login with Ryver</h1>
            </div>
        </div>
    `)
}
export function ryver_notification(){
    return(/*html*/`
    <div class="ryv-notif">
        <div class = "notif_close">
            <div class="sg-icon sg-icon--dark sg-icon--x32">
                <svg class="sg-icon__svg"><use xlink:href="#icon-close"></use></svg>
            </div>
        </div>
        <img src="${runtime.getURL("resources/Compositions/Learners_group.svg")}" alt="">
        <h1 class="sg-text-bit sg-text-bit--mint-primary">login with ryver</h1>
    </div>
    `)
}