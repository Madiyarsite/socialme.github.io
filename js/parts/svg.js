function svg(){
    let svg = document.querySelectorAll(".svg"),
    crl = document.querySelector(".crl"),
    crly = document.querySelector(".crly"),
    crly2 = document.querySelector(".crly2");





function ani(){
let cur = crl.getBoundingClientRect().left,
        cury = crly.offsetTop,
        cury2 = crly2.offsetTop;
svg.forEach((item)=>{
    item.innerHTML = `<path d="   M 0 10   L 0 10, 0 80, 0 80, 550 80, 550 ${cury2} C 550 ${cury2}, ${cur} 90, 0 ${cury}" stroke="transparent" fill="#e7e7e7"/>`;
    
});
}
setInterval(ani, 10);
}
module.exports = svg;
