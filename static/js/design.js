const menu=document.querySelector(".mobile-view");
const navlinks=document.querySelector(".nav-links");
const first=menu.firstElementChild;
const second=first.nextElementSibling;
const third = menu.lastElementChild;
console.log(first);
console.log(second);
console.log(third)
let open=true;
menu.addEventListener('click',()=>{
    if(open){
    first.style.transform="translateY(16px)";
    second.style.transform="scale(0)";
    third.style.transform="translateY(-16px)";

    setTimeout(()=>{
        first.style.transform="translateY(16px) rotate(-60deg)"
        third.style.transform="translateY(-14px) rotate(60deg)";
        navlinks.style.left="0";
        open=false;
    },1000)
    
    }

    else{
        first.style.transform="translateY(16px) rotate(0deg)"
        third.style.transform="translateY(-16px) rotate(0deg)";
        
        setTimeout(()=>{
            second.style.transform="scale(1)";
            

            first.style.transform="translateY(0px) ";
            third.style.transform="translateY(0px) ";
            navlinks.style.left="-200px";
            open=true;
        },800);
    

    }
    
    
});