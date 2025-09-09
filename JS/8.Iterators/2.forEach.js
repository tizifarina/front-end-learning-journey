// 1: Utilizzare .forEach() con una funzione anonima

const tasks = ['Wash Dishes', 'Buy groceries', 'Pay bills'];
tasks.forEach(function(singleTask){
    console.log(' - ', singleTask);
});

//2: Usare una funzione esterna con .forEach()

function logTask(task){
    console.log('- ', task);
}

const todayTasks = ['Read book', 'Clean room', 'Exercise'];
todayTasks.forEach(logTask);