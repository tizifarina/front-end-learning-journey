let globalMessage = 'Hello from global';
function testScope(){
    let localMessage = 'Hello from local';
    if(true){
        let blockMessage = 'Hello from block';
        console.log(blockMessage);
    }

    console.log(localMessage);
}

console.log(globalMessage);
//console.log(localMessage);
testScope();

//2: Prevenire l'inquinamento dello scope usando nomi e ambiti unici
const status1 = 'active';
function statusCheck(){
    let statusMessage = 'Function status active';
    if(status1 == 'active'){
        let statusDetail = 'User is active';
        console.log(statusDetail);
    }
    console.log(statusMessage);
}
console.log(status1);
//console.log(statusMessage);
statusCheck();