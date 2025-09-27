let btn=document.querySelectorAll("#container");
let player='A';
btn.forEach(element => {
    element.addEventListener("click",(e)=>{
    
    
    if(player==='A'){
        e.target.style.backgroundColor="red";
        player='B '
    }else{
        player='A';
        e.target.style.backgroundColor="blue";
   
    }
    e.target.disabled=true;
})
});





