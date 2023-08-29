
    var timer = 30;
    var hitNum = 0;
    var score = 0;
    
    function makeBubble() {
        var clutter = "";
        for (var i = 0; i < 160; i++) {
            var ran = Math.floor(Math.random() * 10)
            clutter += `<div class="bubble">${ran}</div>`
            
        }
        document.querySelector("#screen").innerHTML = clutter;
    }
    function increaseScore() {
        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }
    function getNewHit() {
        hitNum = Math.floor(Math.random() * 10);
        document.querySelector('#hitval').textContent = hitNum;
    }
    function runTimer() {
        var timerint = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerval").textContent = timer;
            }
            else {
                clearInterval(timerint)
                document.querySelector("#screen").innerHTML = `<h1 style="color:#000">Game Over</h1>,<button id="restart" onclick="restart()">Restart</button>`;
            }
        }, 1000);
    }


    document.querySelector("#screen")
        .addEventListener("click", (dets) => {
            var clickedNum = Number(dets.target.textContent);
            if (clickedNum === hitNum) {
                increaseScore();
                makeBubble();
                getNewHit();
            }
        });

    getNewHit();
    runTimer();
    makeBubble();
    
    
    function restart(){
        document.location.reload();
    }
    
    


