
export function rps(shot){
    let variables = ['rock', 'paper', 'scissors'];
    if (shot == undefined){
        // If no arg supplied, return a random result. Fn from w3resource.
        return {"player": variables[Math.floor(Math.random()*variables.length)]}
    }
    else {
        shot = shot.toLowerCase();
        // Error if arg supplied is not within our possible results
        if (! variables.includes(shot)){
            return 'out-of-range error';
        }
        else{
            // Create a simulated opponent who selects a random variable
            let bot = variables[Math.floor(Math.random()*variables.length)];
            // Set the result based on rps rules
            let result = 'tie';

            if (shot == 'rock'){
                if(bot == 'paper'){
                    result = 'lose';
                }
                else if(bot == 'scissors'){
                    result = 'win';
                }
            }
            else if (shot == 'paper'){
                if(bot == 'scissors'){
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    result = 'win';
                }
            }
            else if (shot == 'scissors'){
                if(bot == 'rock'){
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    result = 'win';
                }
            }
            return {"player": shot,  'opponent': bot, 'result': result};
        }
    }
}

// export function rpsls(){

// }