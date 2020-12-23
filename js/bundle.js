/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
        menu = document.querySelector(".overlay__menu");
    btn.addEventListener('click', ()=>{
        ovr.classList.add("overlay__show");
        ovr.addEventListener("transitionend", ()=>{
            menu.classList.add("overlay__menu_show");
            soc.classList.add("overlay__social_show");
            document.body.style.overflow = 'hidden';
        });
    });  
    
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
    up = __webpack_require__(/*! ./parts/up */ "./src/js/parts/up.js");
overlay();
up();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map