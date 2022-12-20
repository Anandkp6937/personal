const menu=document.querySelector(".menu");
const xmark=document.querySelector("#xmark");
const like=document.querySelector(".like");
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
  like.style.transform="scale(1.1)";
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
