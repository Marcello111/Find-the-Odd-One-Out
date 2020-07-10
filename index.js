((d) => { 

    let fiveSeconds = 5,        
    display = document.querySelector('#time');

    window.onload = function() {
    
        startTimer(fiveSeconds, display);
        
    }; 
    
    function startTimer(duration, display) {
    
        let timer = duration;
    
        myVar = setInterval(function () {
            let seconds = parseInt(timer % 5.1, 10);        
    
            display.textContent = seconds;
            
            if (--timer < 0) {
                timer = duration;
                location.replace("fail.html");
            } 
        }, 1000);

    }

    function myStopFunction() {
        clearInterval(myVar);
    }

    let questionNumber = d.getElementById("question-number");
    let birdCircle = d.getElementById("hidden-birdDiv");
    let showBtn = d.getElementById("show");
    let sheepCircle = d .getElementById("hidden-sheep");
    let hiddenBtn = d.getElementById("hidden");
    let birdImage = d.getElementById("bird-image");
    let duckImage = d.getElementById("duck-image");
    let sheepImage = d.getElementById("sheep-image");
    

    showBtn.addEventListener("click", function () { 

        if (birdCircle.style.borderColor == "red") {

        birdCircle.style.borderColor = "";

        } else {

            birdCircle.style.borderColor = "red";
        }

        if (hiddenBtn.style.borderColor == "red") {

			hiddenBtn.style.borderColor = "";

		} else {

			hiddenBtn.style.borderColor = "red";
        };

        if (sheepCircle.style.borderColor == "red") {

			sheepCircle.style.borderColor = "";

		} else {

			sheepCircle.style.borderColor = "red";
        }

    }) 
    
	birdCircle.addEventListener("click", function() {
		birdImage.style.display ="none";
		duckImage.style.display="block";
		hiddenBtn.style.borderColor = "";
		questionNumber.textContent= "2/3";
		myStopFunction();
		startTimer(fiveSeconds, display);	
    })
    
	hiddenBtn.addEventListener("click", function() {
		duckImage.style.display ="none";
		sheepImage.style.display="block";
		hiddenBtn.style.borderColor = "";
		questionNumber.textContent= "3/3";
		myStopFunction();
		startTimer(fiveSeconds, display);	
    })

	sheepCircle.addEventListener("click", function() {
        	location.replace("success.html");
        	
    })

})(document);
