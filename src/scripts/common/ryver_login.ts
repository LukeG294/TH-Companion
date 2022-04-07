function encodeUser(username:string, password:string){    
    let userString = `${username}:${password}`
    var encodedStringBtoA = btoa(userString);
    console.log(encodedStringBtoA);
    return(encodedStringBtoA);
}
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
function test_user(username:string, password:string){
    let token = encodeUser(username, password)
    let response = fetch("https://brainlyus.ryver.com/api/1/odata.svc/workrooms(1197750)/members?$select=role, member/id, member/username&$expand=member", {
        headers: {
        Accept: "application/json",
        Authorization: `Basic ${token}`
        }
    });
    console.log(response)
}