/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/advantages.js":
/*!************************************!*\
  !*** ./src/js/parts/advantages.js ***!
  \************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/parts/deadline.js":
/*!**********************************!*\
  !*** ./src/js/parts/deadline.js ***!
  \**********************************/
/***/ ((module) => {

function deadline (){
    let deadline = '2021-01-05';
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            secunds = Math.floor((t/1000)% 60),
            minutes = Math.floor((t/1000/60)% 60),
            hours = Math.floor(t/(1000*60*60));
        return{
            'total' : t,
            'secunds' : secunds,
            'minutes' : minutes,
            'hours'   : hours

        };
    }
    function setClock (id, endtime){
        let timer = document.getElementById(id),
            secunds = timer.querySelector(".secunds"),
            minutes = timer.querySelector(".minutes"),
            hours = timer.querySelector(".hours"),
            timing = setInterval(getTimeUpdate, 1000);

            function addZero(num){
                if(num < 10){
                    return '0' + num;
                }else{
                    return num;
                }
            }
            function getTimeUpdate(){
                let t = getTimeRemaining(endtime);
                secunds.textContent = addZero(t.secunds);
                minutes.textContent = addZero(t.minutes);
                hours.textContent = addZero(t.hours);
            }
            if(t.total <= 0){
                clearInterval(timing);
                secunds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
            }

    }
    setClock('timer', deadline);
}
module.exports = deadline;

/***/ }),

/***/ "./src/js/parts/overlay.js":
/*!*********************************!*\
  !*** ./src/js/parts/overlay.js ***!
  \*********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/parts/up.js":
/*!****************************!*\
  !*** ./src/js/parts/up.js ***!
  \****************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener('DOMContentLoaded', function(){
let overlay = __webpack_require__(/*! ./parts/overlay */ "./src/js/parts/overlay.js"),
    up = __webpack_require__(/*! ./parts/up */ "./src/js/parts/up.js"),
    adv = __webpack_require__(/*! ./parts/advantages */ "./src/js/parts/advantages.js"),
    deadline = __webpack_require__(/*! ./parts/deadline */ "./src/js/parts/deadline.js");
overlay();
up();
adv();
deadline();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map