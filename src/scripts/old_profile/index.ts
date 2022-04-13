import {add_del_menu, deletion_listener} from "./del_menu_exp"

function insert_data(){
    document.querySelector(".personal_info").insertAdjacentHTML("beforeend", /*html*/`
        <button class="sg-button sg-button--m sg-button--outline sg-button--icon-only user-del-btn"><span class="sg-button__icon sg-button__icon--m">
            <div class="sg-icon sg-icon--dark sg-icon--x32">
                <svg class="sg-icon__svg"><use xlink:href="#icon-trash"></use></svg>
            </div>
        </button>
    `)
    document.querySelector(".user-del-btn").addEventListener("click", function(){
        document.querySelector("body").insertAdjacentHTML("afterbegin", <string>add_del_menu())
        deletion_listener()
        document.querySelector(".modal_close").addEventListener("click", function(){
            document.querySelector(".modal_back").remove()
        });
    });
}
if(localStorage.getItem("userAuth") && document.querySelector("span.pseudolink.show-form")){
    insert_data()
}
