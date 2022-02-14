(function(){
        
    function buildqz(){
            const output=[];
            
            myquest.forEach( (currentques,questionNumber)=> {
                const answers=[];
                for(letter in currentques.answers){
                    answers.push(
                    `<label><input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}:${currentques.answers[letter]}</label><br>`
                    );  
                }
                output.push(
                    `<div class="slides">
                    <div class=question>${currentques.question}</div>
                    <div class="answers">${answers.join('')}</div><br>
                    </div>`
                );
            });
            quizcontainer.innerHTML=output.join('');
            
    }
        

    function showresult(){
        const answercontainers=quizcontainer.querySelectorAll('.answers');
        let correct=0;
        myquest.forEach((currentques,questionNumber)=>{
            const answercontainer=answercontainers[questionNumber];
            const selector=`input[name=question${questionNumber}]:checked`;
            const useranswer=(answercontainer.querySelector(selector)||{}).value;
            if(useranswer == currentques.correctAnswer){
                correct++;
                answercontainers[questionNumber].style.color="green";

            }
            else{
                answercontainers[questionNumber].style.color="red";
            }

        });
        resultcontainer.innerHTML=`${correct} out of ${myquest.length}`;
        

    }


        function showslide(n) {
            slides[currentslide].classList.remove('active-slide');
            slides[n].classList.add('active-slide');
            currentslide = n;
            if(currentslide === 0){
                previousbtn.style.display = 'none';
            }
            else{
                previousbtn.style.display = 'inline-block';
            }
            if(currentslide === slides.length-1){
                nextbtn.style.display = 'none';
                submitbtn.style.display = 'inline-block';
            }
            else{
                nextbtn.style.display = 'inline-block';
                submitbtn.style.display = 'none';
            }
        }

        

        function showNextSlide() {
            showslide(currentslide + 1);
        }

        function showPreviousSlide() {
            showslide(currentslide - 1);
        }

        var quizcontainer=document.getElementById('quiz');
        var resultcontainer=document.getElementById('result');
        var submitbtn=document.getElementById('bt1');

    const myquest =[
            {
                question:"India's largest city by population",
                answers:{a:"delhi",b:"mumbai",c:"chennai"},
                correctAnswer:"a"
            },
            {   
                question: "Which one of these is a JavaScript package manager?",
                answers: {a: "Node.js",b:"TypeScript",c: "npm"},
                correctAnswer: "c"
            },
            { 
                question: "Which tool can you use to ensure code quality?",
                answers: {a: "Angular",b: "jQuery",c: "ESLint"},
                correctAnswer: "c"
            }
        ];

        buildqz();

        const previousbtn=document.getElementById('previous');
        const nextbtn=document.getElementById('next');
        const slides=document.querySelectorAll('.slides');
        let currentslide=0;

        showslide(currentslide);

        submitbtn.addEventListener("click",showresult);
        previousbtn.addEventListener("click",showPreviousSlide);
        nextbtn.addEventListener("click",showNextSlide);

    })();