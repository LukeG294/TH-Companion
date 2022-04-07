export function confirm_answer(answerToConfirm){
    var data = JSON.stringify({
        "operationName": "AcceptModerationReportContent",
        "variables": {
        "input": {
            "contentType": "Answer",
            "contentId": answerToConfirm
        }
        },
        "query": "mutation AcceptModerationReportContent($input: AcceptModerationReportContentInput!) {\n  acceptModerationReportContent(input: $input) {\n    validationErrors {\n      error\n      __typename\n    }\n    __typename\n  }\n}\n"
    });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        
    }
    });

    function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    }
    xhr.open("POST", "https://brainly.com/graphql/us");
    xhr.setRequestHeader("authority", "brainly.com");
    xhr.setRequestHeader("x-b-token-long", getCookie("Zadanepl_cookie[Token][Long]"));
    xhr.setRequestHeader("accept", "*/*");
    xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
    xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36");
    xhr.setRequestHeader("sec-ch-ua", "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"");
    xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("origin", "https://brainly.com");
    xhr.setRequestHeader("sec-fetch-site", "same-origin");
    xhr.setRequestHeader("sec-fetch-mode", "cors");
    xhr.setRequestHeader("sec-fetch-dest", "empty");
    xhr.setRequestHeader("referer", "https://brainly.com/tools/moderation?pageSize=60");

    xhr.send(data);
}
