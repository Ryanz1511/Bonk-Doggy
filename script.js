const doggy = document.getElementById("doggysafe");
const btn = document.getElementById("btn");
const dog = '/img/doggysafe.png';
const bdog =`/img/doggybonk.png`
// tangkap sound 

const doggynobonk = new Audio("./sound/healt.mp3");
const doggybonk = new Audio("./sound/bonk.mp3");


// hitung count bonk 

let count = 0;
let hitung = document.getElementById("counter");

// function playSound dan ganti gambar 

function bonk(){
    doggybonk.pause();
    doggybonk.currentTime = 0;
    doggybonk.play();
    doggy.src = bdog;

    count++;
    hitung.innerHTML = count;
}

function heal(){
    doggynobonk.pause();
    doggynobonk.currentTime = 0;
    doggynobonk.play();
    doggy.src = dog;
}


// event di laptop dan pc
btn.addEventListener("mouseup", heal);

btn.addEventListener("mousedown", bonk);


//event di hp 

btn.addEventListener("touchstart", function(e){
    e.preventDefault();
    bonk();
});


btn.addEventListener("touchend", function(e){
    e.preventDefault();
    heal();
});


