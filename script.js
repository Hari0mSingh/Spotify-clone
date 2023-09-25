console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let song = [
    {songname: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songname: "Salam-e-Ishq", filePath: "2.mp3", coverPath: "2.jpg"},
    {songname: "Salam-e-Ishq", filePath: "3.mp3", coverPath: "3.jpg"},
    {songname: "Salam-e-Ishq", filePath: "4.mp3", coverPath: "4.jpg"},
    {songname: "Salam-e-Ishq", filePath: "5.mp3", coverPath: "5.jpg"},
    {songname: "Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg"},
    {songname: "Salam-e-Ishq", filePath: "7.mp3", coverPath: "7.jpg"}
];

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})