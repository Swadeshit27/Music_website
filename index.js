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

function clicked() {
    var x = document.getElementById("nav");
    var y = document.getElementById("toggle");
    if (x.style.left == '-20rem') {
        // x.style.position = 'absolute';
        x.style.left = '0';
        // x.style.height = '100%';
        x.style.transition = 'all .5s linear';
        y.style.position = 'relative';
        y.style.left = '11rem';
        y.style.top = '1rem';
        document.getElementsByClassName('toggle-btn')[0].classList.remove('navbar-toggle');
        document.getElementsByClassName('toggle-btn')[0].classList.add('fa-xmark');
        document.getElementsByClassName('toggle-btn')[0].style.fontSize = "2rem";
    }
    else {
        x.style.left = '-20rem';
        y.style.position = 'relative';
        x.style.transition = 'none';
        y.style.left = '20.5rem';
        y.style.top = '11px';
        document.getElementsByClassName('toggle-btn')[0].classList.add('navbar-toggle');
        document.getElementsByClassName('toggle-btn')[0].classList.remove('fa-xmark');
    }
}


// function clicked(){
//     document.getElementsByClassName("")
// }


/*====================== music control =======================*/

/* --------------- declaration veriable ----------------------*/
let audioElement = new Audio('songs/1.mp3');
let currSongName = document.getElementsByClassName('currSongName');
let currArtistName = document.getElementsByClassName('currArtistName');
let rotation_img = document.getElementById('rotation');
let player_img = document.getElementById('player_rotate');

let display_img = document.getElementsByClassName("none");
let songsDisplay = document.getElementsByClassName("songItems")[0];
let currTime = document.getElementsByClassName('currtime');
let totalTime = document.getElementsByClassName('totaltime');
let vol = document.getElementById('vol');

/* ------------- all music array ---------------------*/
let songs = [
    { id: "1", songname: "bandyea", artist: "by Arijit sing", path: "songs/1.mp3", coverimg: "Images/1.jpg" },
    { id: "2", songname: "Hangover", artist: "by Salman khan & shreya ghoshal", path: "songs/2.mp3", coverimg: "Images/2.jpg" },
    { id: "3", songname: "ButtaBomma ", artist: "by Armaan Malik", path: "songs/3.mp3", coverimg: "Images/3.jpg" },
    { id: "4", songname: "Ramuloo Ramulaa", artist: "by Armaan Malik", path: "songs/4.mp3", coverimg: "Images/4.jpg" },
    { id: "5", songname: "Barsaat Ki Dhun", artist: "by Jubin Nautial", path: "songs/5.mp3", coverimg: "Images/5.jpg" },
    { id: "6", songname: "Paani Paani", artist: "by Badsha", path: "songs/6.mp3", coverimg: "Images/6.jpg" },
    { id: "7", songname: "Bam Bholle", artist: "by unknown", path: "songs/7.mp3", coverimg: "Images/7.jpg" },
    { id: "8", songname: "Dheere Dheere", artist: "by Honey sing", path: "songs/8.mp3", coverimg: "Images/8.jpg" },
    { id: "9", songname: "Waareya", artist: "by Palak Muchaal", path: "songs/9.mp3", coverimg: "Images/9.jpg" },
    { id: "10", songname: "Titli", artist: "by unknown", path: "songs/10.mp3", coverimg: "Images/10.jpg" },
    { id: "11", songname: "Zindagi Bana Loon", artist: "by unknown", path: "songs/11.mp3", coverimg: "Images/11.jpg" },
    { id: "12", songname: "Tera Rastaa Chhodoon Na", artist: "by unknown", path: "songs/12.mp3", coverimg: "Images/12.jpg" },
    { id: "13", songname: "tera yaar hoon main", artist: "by unknown", path: "songs/13.mp3", coverimg: "Images/13.jpg" },
    { id: "14", songname: "Thoda Thoda Pyaar", artist: "by unknown", path: "songs/14.mp3", coverimg: "Images/14.jpg" },
    { id: "15", songname: "Meri Maa Ke Barabar", artist: "by Jubin Nautial", path: "songs/15.mp3", coverimg: "Images/15.jpg" },
]


/*-------------search button ---------------------*/

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songname, artist, coverimg } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${coverimg}" alt="">
                <div class="search-detail">
                  <h4 class="search_music_name">${songname}</h4>
                  <p>${artist}</p>
                </div>
    `
    search_result.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('search_music_name')[0];
        let text_value = as.innerHTML || as.innerText;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
            document.getElementsByClassName('card')[index].addEventListener('click', () => {
                document.getElementsByClassName('search_result')[0].style.display = "none";
                input.value = "";
            })
        } else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_result.style.display = "none"
        } else {
            search_result.style.display = ""
        }
    }
})

/*------------- all songs image and name update -----------*/
let songItems = Array.from(document.getElementsByClassName('rest'));
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverimg;
    element.getElementsByClassName("musicName")[0].innerText = songs[i].songname;
    element.getElementsByClassName("artist")[0].innerText = songs[i].artist;
})


/*---------------- handel play/pause button --------------*/
let play_Button = document.getElementById('play_btn');
play_Button.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play_Button.classList.remove('fa-circle-play');
        play_Button.classList.add('fa-circle-pause');
        rotation_img.classList.add('rotate');
        // player_img.classList.add('rotate');
    }
    else {
        audioElement.pause();
        play_Button.classList.remove('fa-circle-pause');
        play_Button.classList.add('fa-circle-play');
        rotation_img.classList.remove('rotate');
        // player_img.classList.remove('rotate');
    }
})

/*----------- Intialisation song Index ----------*/
let songindex = 1;

/* ---------------- upadate songs after ended --------------------*/
let choose_btn = document.getElementsByClassName("repeat");
audioElement.addEventListener('ended', () => {
    let choose_btn_new = choose_btn[1];
    if (document.body.clientWidth <= 750) {
        choose_btn_new = choose_btn[0];
    }
    switch (choose_btn_new.classList[2]) {
        case 'fa-music':
            next_music();
            break;
        case 'fa-repeat':
            repeat_music();
            break;
        case 'fa-shuffle':
            shuffle_music();
            break;
    }
})
/*------------ if music play serially --------------*/
const next_music = () => {
    if (songindex >= songs.length) {
        songindex = 0;
    }
    songindex++;
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex - 1].songname;
    currArtistName[0].innerText = songs[songindex - 1].artist;
    rotation_img.classList.add('rotate');
    audioElement.play();
}

/*------------ if Repeat btn click ---------------*/
const repeat_music = () => {
    songindex;
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex - 1].songname;
    currArtistName[0].innerText = songs[songindex - 1].artist;
    rotation_img.classList.add('rotate');
    audioElement.play();
}
/*----------- if shuffle btn click ---------------*/
const shuffle_music = () => {
    if (songindex >= songs.length) {
        songindex = 1;
    }
    songindex = Math.floor((Math.random() * songs.length) + 1);
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex - 1].songname;
    currArtistName[0].innerText = songs[songindex - 1].artist;
    currSongName[1].innerText = songs[songindex - 1].songname;
    currArtistName[1].innerText = songs[songindex - 1].artist;
    rotation_img.classList.add('rotate');
    audioElement.play();
}

/*--------- click event on repeat ,shuffle button-----------*/
let repeat = document.querySelectorAll('.repeat')[1];
if (document.body.clientWidth <= 750) {
    repeat = document.querySelectorAll('.repeat')[0];
}
let c = 0;
repeat.addEventListener('click', () => {
    c++;
    if (c >= 3) {
        c = 0;
        repeat.classList.add('fa-music');
        repeat.classList.remove('fa-shuffle');
    }
    else if (c == 1) {
        repeat.classList.add('fa-repeat');
        repeat.classList.remove('fa-music');
    }
    else {
        repeat.classList.add('fa-shuffle');
        repeat.classList.remove('fa-repeat');
    }
})
let repeat2 = document.querySelectorAll('.repeat')[0];
let cn = 0;
repeat2.addEventListener('click', () => {
    cn++;
    if (cn >= 3) {
        cn = 0;
        repeat2.classList.add('fa-music');
        repeat2.classList.remove('fa-shuffle');
    }
    else if (cn == 1) {
        repeat2.classList.add('fa-repeat');
        repeat2.classList.remove('fa-music');
    }
    else {
        repeat2.classList.add('fa-shuffle');
        repeat2.classList.remove('fa-repeat');
    }
})

/*----------------- update progress bar ------------------*/
let myprogressbar = document.getElementById('mybar');

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
// audioElement.play();

/*-------------- update time ------------*/
audioElement.addEventListener('timeupdate', () => {
    let music_curr_time = audioElement.currentTime;
    let music_total_time = audioElement.duration;
    let min1 = Math.floor(music_total_time / 60);
    let sec1 = Math.floor(music_total_time % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    totalTime[0].innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr_time / 60);
    let sec2 = Math.floor(music_curr_time % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currTime[0].innerText = `${min2}:${sec2}`;
    let seekbar = myprogressbar.value;
    document.getElementsByClassName('bar2')[0].style.width = `${seekbar}%`;
    document.getElementsByClassName('dot')[0].style.left = `${seekbar}%`;
    // console.log(totalTime);
})

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songindex = parseInt(e.target.id);
        //    makeAllPlays();
        audioElement.src = `songs/${songindex}.mp3`;
        display_img[0].src = `Images/${songindex}.jpg`;
        document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
        currSongName[0].innerText = songs[songindex - 1].songname;
        currSongName[1].innerText = songs[songindex - 1].songname;
        currArtistName[0].innerText = songs[songindex - 1].artist;
        currArtistName[1].innerText = songs[songindex - 1].artist;
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
    if (songindex == songs.length) {
        songindex = 1;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex - 1].songname;
    currArtistName[0].innerText = songs[songindex - 1].artist;
    currSongName[1].innerText = songs[songindex - 1].songname;
    currArtistName[1].innerText = songs[songindex - 1].artist;
    rotation_img.classList.add('rotate');
    audioElement.currentTime = 0;
    audioElement.play();
    play_Button.classList.remove('fa-circle-play');
    play_Button.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = songs.length;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    display_img[0].src = `Images/${songindex}.jpg`;
    document.getElementsByClassName('photo')[1].src = `Images/${songindex}.jpg`;
    currSongName[0].innerText = songs[songindex - 1].songname;
    currArtistName[0].innerText = songs[songindex - 1].artist;
    currSongName[1].innerText = songs[songindex - 1].songname;
    currArtistName[1].innerText = songs[songindex - 1].artist;
    rotation_img.classList.add('rotate');
    audioElement.currentTime = 0;
    audioElement.play();
    play_Button.classList.remove('fa-circle-play');
    play_Button.classList.add('fa-circle-pause');
})

/*----------- scroll music left or right ------------*/
let forwardArrow = document.getElementById("forward-arrow");
let backwardArrow = document.getElementById("backward-arrow");
forwardArrow.addEventListener('click', () => {
    document.getElementsByClassName('songItems')[0].scrollLeft += 300;
})
backwardArrow.addEventListener('click', () => {
    document.getElementsByClassName('songItems')[0].scrollLeft -= 300;
})

/*------------ sound update--------------*/
let vol_icon = document.getElementById('vol_icon');
vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-low');
    }
    else if (vol.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-low');
    }
    document.getElementsByClassName('bar3')[0].style.width = `${vol.value}%`;
    document.getElementsByClassName('dot1')[0].style.left = `${vol.value}%`;
    audioElement.volume = vol.value / 100;
})
