const menu=document.querySelector(".menu");
const xmark=document.querySelector("#xmark");
const like=document.querySelector(".like");
const send=document.querySelector(".send");
const inputname=document.querySelector(".input-name");
const navigationbar=document.querySelector(".navigation-bar");
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

let count=0;
like.addEventListener("click",function(){
if(count==0){
  like.style.background=" #f10b6b";
  console.log(count);
count=1
console.log(count);
}
else{
like.style.background="var(--color)";
like.style.transform="none";

count=0;
}
})
send.addEventListener("click",function(e){
  e.preventDefault();

  console.log(inputname.value);
  if(inputname.value=="" &&count==0){
    alert("invalid operation");
  }
  else{
    if(count==1){
      alert("thanku for your Like&response");
      like.style.background="var(--color)";
    }
    if(count==0){
      alert("thanku for your response");
    }
    inputname.value="";
  }

})
