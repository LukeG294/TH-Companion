export function add_del_menu(){
    return /*html*/`
        <div class="modal_back">
            <div class="modal-accdel">
            <div class = "modal_close">
                <div class="sg-icon sg-icon--dark sg-icon--x32">
                    <svg class="sg-icon__svg"><use xlink:href="#icon-close"></use></svg>
                </div>
            </div>
            <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Delete User</h1>
            <div class="content">
                <textarea placeholder="Add Reason Here" class="sg-textarea sg-textarea--tall"></textarea>
                <button class="sg-button sg-button--m sg-button--solid-light"><span class="sg-button__text">Delete!</span></button>
            </div>
            </div>
        </div>
    `
}
function sendmsg(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    let postUrl = "https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1552493)/Chat.PostMessage()"
    let raw = `curl -X "POST" ${postUrl}
                -H 'Accept: application/json'
                -H 'Content-Type: application/json'
                -u 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
                -d $'{
                    "createSource": {
                        "avatar": "https://pbs.twimg.com/profile_images/825987046992814080/7VZkFQA9_400x400.jpg",
                        "displayName": "Brainly Companion"
                    },
                    "body": "This is an example chat message"
                }'`;

    fetch(postUrl, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
}