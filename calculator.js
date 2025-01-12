let input= document.querySelector("input");
let button= document.querySelectorAll("button");
let calculate="";
let arr= Array.from(button);
arr.forEach((button) =>{
    button.addEventListener("click", (event)=>{
        if (event.target.innerHTML=="="){
            calculate= eval(calculate);
            input.value=calculate;
        }
        else if(event.target.innerHTML=="AC"){
            calculate="";
            input.value=calculate;
        }
        else if(event.target.innerHTML=="DEL"){
            calculate= calculate.toString().slice(0, -1);
            input.value=calculate;
        }
        else{
            calculate= calculate+event.target.innerHTML;
            input.value= calculate;
        }
        
    })
})