import { delete_user } from "../common/mod_functions";
export function add_del_menu(){
    return /*html*/`
        <div class="modal_back">
            ${this.innerHTML = document.querySelector("#DelUserAddForm").outerHTML}
        </div>
    `
}
async function sendmsg(){
    let token = localStorage.getItem("userAuth");
    let del_reason = (<HTMLInputElement>document.querySelector(".modal-accdel .del-rsn")).value;
    if(del_reason === ''){del_reason = "Not Provided"};
    let mod_name = document.querySelector(".menu-element.profile.styled > a > span:nth-child(2)").innerHTML
    await fetch('https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1291498)/Chat.PostMessage()', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' +token
        },
        body: JSON.stringify({
      "createSource": {
        "avatar": "https://camo.githubusercontent.com/30eb9e12b3f4f08d458a18dd5357be53348530ad1be7ca65b422e07083445790/68747470733a2f2f636f6e746174746166696c65732e73332e75732d776573742d312e616d617a6f6e6177732e636f6d2f746e7432393834362f6e75476d4f73676856485539555a7a2f506173746564253230496d61676525334125323044656325323038253243253230323032312532302d2532303225334133392533413135616d",
        "displayName": "Brainly Companion"
      },
      "body":
        `---
**Deleted account**: ${window.location.href}
**Why**: ${del_reason}
###### **Moderator**: ${mod_name}`
                             
    })
    });
    location.reload()
}
function check_deletion(uid:string):any{
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", async function() {
          if(this.readyState === 4) {
              let response = this.responseText;
              var parser = new DOMParser();
              var htmldoc = parser.parseFromString(response, "text/xml");
              return (htmldoc.querySelector("title").innerHTML.split("-")[1] === " User's profile :deleted" ? true : false)
          }
        });
    xhr.open("GET","https://brainly.com/profile/user-"+uid);
    xhr.send()
}
export function deletion_listener(){
    document.querySelector(".modal-accdel .delete-acc").addEventListener("click", async function(){
        let uid = document.querySelector("#main-left > div.personal_info > div.header > div.info > div.info_top > span.ranking > h2 > a").getAttribute("href").split("-")[1]
        document.querySelector(".modal-accdel .spinner-container").classList.add("show");
        await delete_user(uid);
        if(check_deletion(uid)){
            await sendmsg();
        }
        else{
            console.log("user not deleted");
            document.querySelector(".modal-accdel .content").classList.add("errormsg");
            document.querySelector(".modal-accdel .content textarea").classList.add("sg-textarea--invalid");
        }
        document.querySelector(".modal-accdel .spinner-container").classList.remove("show");
    })
}
