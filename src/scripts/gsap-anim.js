gsap.set(".truck",{x:-500});
        var anim = gsap.to(".truck", {x:700, duration:5, paused:true});
        var goBtn=document.querySelector("#go");
        var speedBtn=document.querySelector("#speed");
        var stopBtn=document.querySelector("#stop");
        var resetBtn=document.querySelector("#reset");

        goBtn.onclick = function(){ anim.play()};
        speedBtn.onclick = function(){ anim.timeScale(2) }; // want to infinitely scale upon each click? lol
        stopBtn.onclick = function(){ anim.pause() };
        resetBtn.onclick = function(){ anim.pause(); anim.progress(0); anim.clear() };