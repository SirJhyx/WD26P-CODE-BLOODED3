console.log("Connected");

let addTask = document.querySelector("#addTask");

let todoWrapper = document.querySelector(".todo-wrapper");

addTask.addEventListener("click", ()=>{
let userInput = document.querySelector("#userInput").value;

    if(userInput.length > 5){
        let li = document.createElement("li");
        let text = document.getElementById("userInput");
        li.className="gawain";

        //sa part na to maggagawa na nang checkbox

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.id = "listahan";

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(text.value));

        todoWrapper.appendChild(li);

        document.querySelector("userInput").value="";
    }
    else{
        alert("you need to input greater than 5 characters");
    }
});

//burahan nang listahan

function deleteTask(){
    let x;
    let ul = document.getElementById("listahan");
    let items = ul.getElementsByTagName("li");

    for (x=0; x<items.length; x++){
        if(items[x].firstChild.checked){
            ul.removeChild(items[x]);
            x = x - 1;
        }
    }
}