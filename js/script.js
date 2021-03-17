let clicked = false;
        document.querySelector('.menu-first').addEventListener("click",()=>{
        clicked= !clicked;
            console.log(clicked);
            if(clicked){
                document.querySelector('.menu-first .bars').style.cssText = "background-color: blue; height: 2rem;
                width: 2rem;
                position: absolute;"
            } 
            
            // else{
            //     document.querySelector('').style.cssText = ""
            // }