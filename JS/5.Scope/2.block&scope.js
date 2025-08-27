// 1: Use an if statement block to create a local scope
let timeOfDay = 'evening';
if(timeOfDay == 'evening'){
    const skyColor = 'orange';
    console.log(skyColor);
}
//console.log(skyColor);

// 2: Use function blocks and conditional blocks with independent scopes
function weatherCheck(){
    let temperature = 18;
    if(temperature >= 15){
        let message = 'Warm weather';
        console.log(message);
    }
}
//console.log(message);

weatherCheck();