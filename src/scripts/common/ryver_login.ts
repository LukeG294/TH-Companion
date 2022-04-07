function encodeUser(username:string, password:string){    
    let userString = `${username}:${password}`
    var encodedStringBtoA = btoa(userString);
    console.log(encodedStringBtoA);
    return(encodedStringBtoA);
}
function log_deletion(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    let orgURL = "https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1000125)/Chat.PostMessage()"

    let raw = `curl -X "POST" ${orgURL}
    -H 'Accept: application/json'
    -H 'Content-Type: application/json'
    -u 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
    -d $'{
        "createSource": {
            "avatar": "https://pbs.twimg.com/profile_images/825987046992814080/7VZkFQA9_400x400.jpg",
            "displayName": "Brainly Companion"
        },
        "body": ""
    }'`;

    fetch(orgURL, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
function fetch_users(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    let orgURL = "https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1000125)/Chat.PostMessage()"

    let raw = `curl -X GET 
    'https://example.ryver.com/api/1/odata.svc/workrooms(10)/members?$select=role, member/id, member/username&$expand=member' \
    -H 'accept: application/json'
    -H 'authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ='`;

    fetch(orgURL, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}