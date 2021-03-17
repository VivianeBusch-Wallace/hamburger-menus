let clicked = false;
        document.querySelector('.menu-first').addEventListener("click",()=>{
        clicked= !clicked;
            console.log(clicked);
            if(clicked){
                document.querySelector('.menu-first .bars').style.cssText = ""
            } else{
                document.querySelector('').style.cssText = ""
            }