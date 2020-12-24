function adv (){
    let blc = document.querySelectorAll(".advantages__content");
    window.addEventListener('scroll', function(){
            // let a = blc[0].getBoundingClientRect().top;
            // let b = blc[1].getBoundingClientRect().top;
            // let c = blc[2].getBoundingClientRect().top;
            // let d = blc[3].getBoundingClientRect().top;
            // if(blc < 0){
            //     blc.forEach((item)=> item.classList.add('easeIn'));
            // }
            let c = document.documentElement.clientHeight; 
            for(let i = 0; i < blc.length; i++){
               let b = blc[i].getBoundingClientRect().top - c;
                if(b < 0){
                    blc[i].classList.add('easeIn');
                    

                }
            }
    });
    
}
module.exports = adv;