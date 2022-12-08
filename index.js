/*============== dark mode ===================*/

const dayNight = document.querySelector(".mode");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

/*================= navbar toggle =====================*/

function clicked(){
    var x=document.getElementById("nav");
    var y = document.getElementById("toggle");
    if(x.style.width=='0px'){
        x.style.width ='15rem';
        y.style.position ='relative';
        y.style.left ='9rem';
        y.style.top ='1.2rem';
    }
    else {
        x.style.width='0px';
        y.style.position = 'relative';
        y.style.left = '2rem';
        y.style.top = '2rem';
    }
}


// function clicked(){
//     document.getElementsByClassName("")
// }


/*====================== music control =======================*/

/* --------------- declaration veriable ----------------------*/

let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let play_Button = document.getElementById('play_btn');
let currSongName = document.getElementsByClassName('currSongName');
let currArtistName = document.getElementsByClassName('currArtistName');
let myprogressbar = document.getElementById('mybar');
let rotation_img = document.getElementById('rotation');
let player_img = document.getElementById('player_rotate');
let songItems = Array.from(document.getElementsByClassName('rest'));
let display_img = document.getElementsByClassName("none");
let forwardArrow = document.getElementsByClassName("forward-arrow");
let backwardArrow = document.getElementsByClassName("backward-arrow");
let songsDisplay = document.getElementsByClassName("songItems")[0];
let currTime = document.getElementsByClassName('currtime');
let totalTime = document.getElementsByClassName('totaltime');
let vol= document.getElementById('vol');

/* ------------- all music array ---------------------*/
let songs = [
    { songname: "bandyea", artist: "by Arijit sing", path: "songs/1.mp3", coverimg: "Images/1.jpg" },
    { songname: "Hangover", artist: "by Salman khan & shreya ghoshal", path: "songs/2.mp3", coverimg: "Images/2.jpg" },
    { songname: "ButtaBomma ", artist: "by Armaan Malik", path: "songs/3.mp3", coverimg: "Images/3.jpg" },
    { songname: "Ramuloo Ramulaa", artist: "by Armaan Malik", path: "songs/4.mp3", coverimg: "Images/4.jpg" },
    { songname: "Barsaat Ki Dhun", artist: "by Jubin Nautial", path: "songs/5.mp3", coverimg: "Images/5.jpg" },
    { songname: "Paani Paani", artist: "by Badsha", path: "songs/6.mp3", coverimg: "Images/6.jpg" },
    { songname: "Bam Bholle", artist: "by unknown", path: "songs/7.mp3", coverimg: "Images/7.jpg" },
    { songname: "Dheere Dheere", artist: "by Honey sing", path: "songs/8.mp3", coverimg: "Images/8.jpg" },
    { songname: "Waareya", artist: "by Palak Muchaal", path: "songs/9.mp3", coverimg: "Images/9.jpg" },
    { songname: "Titli", artist: "by unknown", path: "songs/10.mp3", coverimg: "Images/10.jpg" },
    { songname: "Zindagi Bana Loon", artist: "by unknown", path: "songs/11.mp3", coverimg: "Images/11.jpg" },
    { songname: "Tera Rastaa Chhodoon Na", artist: "by unknown", path: "songs/12.mp3", coverimg: "Images/12.jpg" },
    { songname: "tera yaar hoon main", artist: "by unknown", path: "songs/13.mp3", coverimg: "Images/13.jpg" },
    { songname: "Thoda Thoda Pyaar", artist: "by unknown", path: "songs/14.mp3", coverimg: "Images/14.jpg" },
    { songname: "Meri Maa Ke Barabar", artist: "by Jubin Nautial", path: "songs/15.mp3", coverimg: "Images/15.jpg" },
]

/*------------- all songs image and name update -----------*/

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverimg;
    element.getElementsByClassName("musicName")[0].innerText = songs[i].songname;
    element.getElementsByClassName("artist")[0].innerText = songs[i].artist;
})


/*---------------- handel play/pause button --------------*/

play_Button.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0 ) {
        audioElement.play();
        play_Button.classList.remove('fa-circle-play');
        play_Button.classList.add('fa-circle-pause');
        rotation_img.classList.add('rotate');
        player_img.classList.add('rotate');
    }
    else if(audioElement.currentTime==audioElement.duration){
        audioElement.pause();
        play_Button.classList.remove('fa-circle-pause');
        play_Button.classList.add('fa-circle-play');
        rotation_img.classList.remove('rotate');
        player_img.classList.remove('rotate');
    }
    else {
        audioElement.pause();
        play_Button.classList.remove('fa-circle-pause');
        play_Button.classList.add('fa-circle-play');
        rotation_img.classList.remove('rotate');
        player_img.classList.remove('rotate');
    }
})

/*----------------- update progress bar ------------------*/

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
// audioElement.play();

/*-------------- update time ------------*/
audioElement.addEventListener('timeupdate',()=>{
    let music_curr_time=audioElement.currentTime;
    let music_total_time=audioElement.duration;
    let min1=Math.floor(music_total_time/60);
    let sec1=Math.floor(music_total_time%60);
    if (sec1<10) {
        sec1 = `0${sec1}`; 
    }
    totalTime[0].innerText = `${min1}:${sec1}`;

    let min2=Math.floor(music_curr_time/60);
    let sec2=Math.floor(music_curr_time%60);
    if (sec2<10) {
        sec2 = `0${sec2}`; 
    }
    currTime[0].innerText = `${min2}:${sec2}`;
    let seekbar=myprogressbar.value;
    document.getElementsByClassName('bar2')[0].style.width=`${seekbar}%`;
    document.getElementsByClassName('dot')[0].style.left=`${seekbar}%`;
    // console.log(totalTime);
})





/*------------ play rendome music --------------*/

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songindex = parseInt(e.target.id);
        //    makeAllPlays();
        audioElement.src = `songs/${songindex}.mp3`;
        display_img[0].src = `Images/${songindex}.jpg`;
        document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
        currSongName[0].innerText = songs[songindex-1].songname;
        currArtistName[0].innerText = songs[songindex-1].artist;
        rotation_img.classList.add('rotate');

        //    console.log(audioElement.src='songs/${index}.mp3');
        audioElement.currentTime = 0;
        audioElement.play();
        play_Button.classList.remove('fa-circle-play');
        play_Button.classList.add('fa-circle-pause');

    })
})

/*------------- previous & next button -----------------*/

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 15 || songindex == 0) {
        songindex = 1;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex-1].songname;
    currArtistName[0].innerText = songs[songindex-1].artist;
    rotation_img.classList.add('rotate');
    audioElement.currentTime = 0;
    audioElement.play();
    play_Button.classList.remove('fa-circle-play');
    play_Button.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = 15;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex-1].songname;
    currArtistName[0].innerText = songs[songindex-1].artist;
    rotation_img.classList.add('rotate');
    audioElement.currentTime = 0;
    audioElement.play();
    play_Button.classList.remove('fa-circle-play');
    play_Button.classList.add('fa-circle-pause');
})

/*----------- scroll music left or right ------------*/

// forwardArrow.addEventListener('click',()=>{
//     songsDisplay.scrollLeft+=100;
// })
// backwardArrow.addEventListener('click',()=>{
//     songsDisplay.scrollLeft-=1075;
// })

/*------------ sound update--------------*/
let vol_icon = document.getElementById('vol_icon');
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    else if(vol.value>0 && vol.value<=50){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-low');
    }
    else if(vol.value>50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-low');
    }
    document.getElementsByClassName('bar3')[0].style.width=`${vol.value}%`;
    document.getElementsByClassName('dot1')[0].style.left=`${vol.value}%`;
    audioElement.volume=vol.value/100;
})
