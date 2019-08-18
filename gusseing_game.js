const rawInput = require('readline-sync').question
    for (let i = 0; i < 5; i++) {
        const userInput = rawInput("guess user input")
        if (userInput == 7) {
            console.log("Your guess is right")
            break
        } else if(userInput>0 && userInput<=6){
            console.log("Inter more num ")
            
        }else if(userInput>=8 && userInput<=12){
            console.log("Inter less num ")
        }else {
            console.log("out of skor ")
            break
        }  
    }
    console.log("Your chance finish")