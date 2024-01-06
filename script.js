function getrand(){
    let rand = 3000 + 7000*Math.random();
    return rand;
} 

function vis(x){
    return document.querySelector(x).style.color = "white"
}


const task1 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vis(".span1"))
        }, getrand());
    })
}
const task2 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vis(".span2"))
        }, getrand());
    })
}
const task3 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vis(".span3"))
        }, getrand());
    })
}
const task4 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vis(".span4"))
        }, getrand());
    })
}
const task5 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vis(".span5"))
        }, getrand());
    })
}


const CallAllTask = async()=> {
    const t1 =await task1();
    const t2 =await task2();
    const t3 =await task3();
    const t4 =await task4();
    const t5 =await task5();
}

CallAllTask();