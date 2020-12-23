function up (){
    let up = document.querySelector('.up');
    window.addEventListener('scroll', function(event){
        let top = window.scrollY;
        if(top > 1000){
            up.classList.add('fadeIn');
            up.classList.remove('fadeOut');
            
        }else if(top < 1000){
            
            up.classList.add('fadeOut'); 
            up.addEventListener('transitionend', ()=>{
                up.classList.remove('fadeIn');
               
                 
            });
            
        }
        
    });
}
module.exports = up;