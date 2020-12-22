function overlayy (){
    let btn = document.querySelector('.btn_menu'),
        ovr = document.querySelector(".overlay"),
        cls = document.querySelector('.overlay__close'),
        soc = document.querySelector(".overlay__social"),
        menu = document.querySelector(".overlay__menu");
    btn.addEventListener('click', ()=>{
        ovr.classList.add("overlay__show");
        menu.classList.add("overlay__menu_show");
        soc.classList.add("overlay__social_show");
        document.body.style.overflow = 'hidden';
    });  
    cls.addEventListener('click', ()=>{
        ovr.classList.remove("overlay__show");
        menu.classList.remove("overlay__menu_show");
        soc.classList.remove("overlay__social_show");
        document.body.style.overflow = '';
    });   

}
module.exports = overlayy;