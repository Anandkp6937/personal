const menu=document.querySelector(".menu");
const msg=document.querySelector("#messages");
const body=document.querySelector("body");
const xmark=document.querySelector("#xmark");
const like=document.querySelector(".like");
const send=document.querySelector(".send");
const inputname=document.querySelector(".input-name");
const navigationbar=document.querySelector(".navigation-bar");
const ul=document.querySelector(".ul-list");
function autoclose(){
  setTimeout(()=>{
    navigationbar.style.display='none';

  },50000);
}

menu.addEventListener("click",function(){
  navigationbar.style.display='flex';

  autoclose()
})

xmark.addEventListener("click",function(){
  navigationbar.style.display='none';
})

// let count=0;
// like.addEventListener("click",function(){
// if(count==0){
//   like.style.background=" #f10b6b";
//   console.log(count);
// count=1
// console.log(count);
// }
// else{
// like.style.background="var(--color)";
// like.style.transform="none";
//
// count=0;
// }
// })

send.addEventListener("click",function(e){
body.classList.add("body");
  e.preventDefault();
  if(inputname.value==""){
    alert("invalid response found");
  }
  else{
    alert("thanku for your response");
    inputname.value="";
    msg.value="";
  }
})
