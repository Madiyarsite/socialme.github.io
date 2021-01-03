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
            

    }
    setClock('timer', deadline);

  

}
module.exports = deadline;