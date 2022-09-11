// Add your code here
/*const dogObjectExample = {
    dogName: "Byron",
    dogBreed: "Poodle"
}


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dogObjectExample)
};

fetch("http://localhost:3000/dogs", configurationObject)
.then(r => r.json())
.then(data => console.log(data.id))
.catch(function (error) {
    alert("Bad things!");
    console.log(error.message);
})
*/
//const formData = 

/*const submitObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
} */

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
    })

    .then(r => r.json())
    .then(data => document.body.append(data["id"]))
    .catch((error) => document.body.append(error))    
}