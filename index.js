// Add your code here
function submitData(name, email){
    const user = {name:name, email: email}

    return fetch ("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Accept : "application/json",
        },
        body: JSON.stringify (user)
    })
    .then (response => response.json())
    .then (result =>{
        document.body.innerHTML = result["id"]
    })
    .catch(errmsg =>{
        document.body.innerHTML = errmsg.message
        alert("name or email is incorect");
    })
}