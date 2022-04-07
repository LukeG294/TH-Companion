import {login_form} from "../common/ryver_modal"
import chrome from "webextension-polyfill"
function log_deletion(authToken:string){
    fetch("https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1000125)/Chat.PostMessage()", {
        body: `
        {
            "createSource": {
            "avatar": "https://pbs.twimg.com/profile_images/825987046992814080/7VZkFQA9_400x400.jpg",
            "displayName": "Brainly Companion"
            },
            "body": " "
        }`,
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${authToken}`,
          "Content-Type": "application/json"
        },
        method: "POST"
    })
}
function encodeUser(username:string, password:string){    
    let userString = `${username}:${password}`
    var encodedStringBtoA = btoa(userString);
    console.log(encodedStringBtoA);
    return(encodedStringBtoA);
}
export function test_user(username:string, password:string){
    let token = encodeUser(username, password)
   
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        if (this.status === 200){
            alert("Found user")
            chrome.storage.local.set({userToken: token});
        } else {
            alert("False credentials")
        }
      }
    });
    
    xhr.open("GET", "https://brainlyus.ryver.com/api/1/odata.svc/users");
    xhr.setRequestHeader("Authorization", "Basic "+token);
    
    xhr.send();
}
export function login_run(){
    document.querySelector(".notif_close").addEventListener("click", async function(){
        document.querySelector(".ryv-notif").remove()
      });
      document.querySelector(".ryv-notif > h1").addEventListener("click", function(){
        document.querySelector(".ryv-notif > h1").remove();
        document.querySelector(".ryv-notif > img").remove();
        document.querySelector(".ryv-notif").insertAdjacentHTML("beforeend",<string>login_form())
        document.querySelector(".check-user").addEventListener("click", function(){
          let inputUser = (<HTMLInputElement>document.querySelector(".ryv-notif .username")).value;
          let inputPass = (<HTMLInputElement>document.querySelector(".ryv-notif .password")).value;
          test_user(inputUser, inputPass);
        });
      });

}