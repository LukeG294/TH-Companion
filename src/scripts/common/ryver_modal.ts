import {runtime} from "webextension-polyfill"
export function login_form(){
    return(/*html*/`
        <div class="sg-flex">
        <h1 class="sg-text-bit sg-text-bit--mint-primary">ryver login</h1>
            <div class="sg-flex sg-flex--column sg-flex--margin-right-l">
                <input type="text" placeholder="username" class="sg-input">
                <br>
                <input type="text" placeholder="password" class="sg-input">
            </div>
            <button class="sg-button sg-button--m sg-button--outline"><span class="sg-button__text">login</span></button>
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