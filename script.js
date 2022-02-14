const input=document.querySelector("#input");
const btn=document.querySelector("#btn");
const result=document.getElementById("result");

btn.addEventListener("click",(e)=>{
e.preventDefault()
if(input.value==="") return
createDeleteElements(input.value)
input.value='';
})

 function createDeleteElements(value){

   const li=document.createElement("li")
   const button=document.createElement("button")
   li.className="li"
   li.textContent=value;
    result.appendChild(li);


li.addEventListener("click",(e)=>{
  e.preventDefault()
   result.removeChild(li)
})
 }
