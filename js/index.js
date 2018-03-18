let input = document.querySelector("#input");
let ul = document.querySelector("ul");
let btn = document.querySelector("#button");
let feedback = document.querySelector(".feedback");

function addItem(){
    let li = document.createElement("li");
    if(input.value && input.value != " ") {
        
        li.textContent = input.value;
        
        ul.appendChild(li);
        
        feedback.textContent = "Item added ";
        
        input.value  = " ";
       
        input.focus();
    }else{
        feedback.textContent = "No item was added!";
    }
}

btn.addEventListener("click",addItem);