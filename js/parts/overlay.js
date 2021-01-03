function overlayy (){
    let btn = document.querySelector('.btn_menu'),
        ovr = document.querySelector(".overlay"),
        cls = document.querySelector('.overlay__close'),
        soc = document.querySelector(".overlay__social"),
        href = document.querySelectorAll('.promo__item'),
        menu = document.querySelector(".overlay__menu");
        
    btn.addEventListener('click', ()=>{
        ovr.classList.add("overlay__show");
        ovr.addEventListener("transitionend", ()=>{
            menu.classList.add("overlay__menu_show");
            soc.classList.add("overlay__social_show");
            document.body.style.overflow = 'hidden';
        });
    });  
    href.forEach((item)=> item.addEventListener('click', ()=>{
        menu.classList.remove("overlay__menu_show");
        soc.classList.remove("overlay__social_show");
        ovr.classList.remove("overlay__show");
        ovr.addEventListener("transitionend", ()=>{
        
        menu.classList.remove("overlay__menu_show");
        soc.classList.remove("overlay__social_show");

        document.body.style.overflow = '';
       }); 
        
    }) );
    cls.addEventListener('click', ()=>{
        menu.classList.remove("overlay__menu_show");
        soc.classList.remove("overlay__social_show");
        ovr.classList.remove("overlay__show");
        ovr.addEventListener("transitionend", ()=>{
        
        menu.classList.remove("overlay__menu_show");
        soc.classList.remove("overlay__social_show");

        document.body.style.overflow = '';
       }); 
        
    });   

}
module.exports = overlayy;