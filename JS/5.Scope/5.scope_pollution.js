// 𝟭: 𝗘𝘃𝗶𝘁𝗮𝗿𝗲 𝗹'𝗶𝗻𝗾𝘂𝗶𝗻𝗮𝗺𝗲𝗻𝘁𝗼 𝗱𝗲𝗹𝗹𝗼 𝘀𝗰𝗼𝗽𝗲 𝗱𝗶𝗰𝗵𝗶𝗮𝗿𝗮𝗻𝗱𝗼 𝘃𝗮𝗿𝗶𝗮𝗯𝗶𝗹𝗶 𝗹𝗼𝗰𝗮𝗹𝗺𝗲𝗻𝘁𝗲

const userName = 'Alice';
function displayUserName(){
    let userName = 'Bob';
    console.log(userName);
}

displayUserName();
console.log(userName);

//𝟮: 𝗥𝗶𝗰𝗼𝗻𝗼𝘀𝗰𝗲𝗿𝗲 𝗹’𝗶𝗻𝗾𝘂𝗶𝗻𝗮𝗺𝗲𝗻𝘁𝗼 𝗱𝗲𝗹𝗹𝗼 𝘀𝗰𝗼𝗽𝗲 𝗰𝗮𝘂𝘀𝗮𝘁𝗼 𝗱𝗮 𝘂𝗻𝗮 𝗺𝗮𝗻𝗰𝗮𝘁𝗮 𝗱𝗶𝗰𝗵𝗶𝗮𝗿𝗮𝘇𝗶𝗼𝗻𝗲
let count = 10;
function incrementCount(){
    //count = 20;
    //console.log(count);
    let count = 30;
    console.log(count + 'interno alla funzione');
}

incrementCount();
console.log(count + 'esterno alla funzione');