let url = String(window.location.href)
if (url.includes("tasks") || url.includes("responses") || url.includes("comments_tr")){
 //pass
} else {
    window.location.href += "/tasks"
}