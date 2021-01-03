function adv (){
    let blc = document.querySelectorAll(".advantages__content");
    window.addEventListener('scroll', function(){
       
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