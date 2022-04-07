function encodeUser(username:string, password:string){    
    let userString = `${username}:${password}`
    var encodedStringBtoA = btoa(userString);
    console.log(encodedStringBtoA);
    return(encodedStringBtoA);
}
