// JavaScript Document
(() => {
console.log("linked up");

String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }

//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = document.querySelector('.close-lightbox'),
vidPlayer = document.querySelector('video'),
vidControls = document.querySelector('.controls'),
imageBanner = document.querySelector('#houseImages'),
pBut = document.querySelector('#pausePlay'),
play = document.querySelector('#play'),
pause = document.querySelector('#pause'),
skipB = document.querySelector('#skipB'),
skipF = document.querySelector('#skipF'),
seekSlider = document.querySelector('#seekSlider'),
curTimeText = document.querySelector('#curTimeText'),
durTimeText = document.querySelector('#durTimeText');


//functions in the middle
function showHouseVideo(){
  let houseName = this.className.split(' ')[1].capIt();
  // split apart the class name on the element, grab the house from the result
  document.querySelector('h1').textContent = `House ${houseName}`;

  //change the description for each house
  if (houseName == "Stark"){
    document.querySelector('.house-info').textContent = "House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.";
  }
  if (houseName == "Baratheon"){
    document.querySelector('.house-info').textContent = "House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.";
  }
  if (houseName == "Lannister"){
    document.querySelector('.house-info').textContent = "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.";
  }
  if (houseName == "Greyjoy"){
    document.querySelector('.house-info').textContent = 'House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoys sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.';
  }
  if (houseName == "Tully"){
    document.querySelector('.house-info').textContent = 'House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."';
  }
  if (houseName == "Arryn"){
    document.querySelector('.house-info').textContent = "House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.";
  }
  if (houseName == "Targaryen"){
    document.querySelector('.house-info').textContent = "House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.";
  }
  if (houseName == "Tyrell"){
    document.querySelector('.house-info').textContent = "House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.";
  }
  if (houseName == "Frey"){
    document.querySelector('.house-info').textContent = "House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.";
  }




  lightbox.classList.add('show-lightbox');
  //make the video play
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  vidPlayer.play();

  //update the pause button if it still displays play
  play.classList.add('hidden');
  pause.classList.remove('hidden');

  //make the banners the proper house
  scrollBanners(this.dataset.offset);
}


function scrollBanners(offset){
  // move the banner images to the left
  let moveIt = offset * 600 + "px";

  imageBanner.style.right = moveIt;
}

function closeLightBox(){
  lightbox.classList.remove('show-lightbox')
  //stop video and rewind it to 0

  vidPlayer.pause();
  vidPlayer.currentTime = 0;
  seekSlider.value = 0;

}

function pausePlay(){

  if (vidPlayer.paused == true)
  {
  vidPlayer.play();
  play.classList.add('hidden');
  pause.classList.remove('hidden');
  }
  else
  {
  vidPlayer.pause();
  pause.classList.add('hidden');
  play.classList.remove('hidden');
  }
}

function skipForward(){
  vidPlayer.currentTime += 10;
}

function skipBackward(){
  vidPlayer.currentTime -= 10;
}

function vidSeek() {
  seekTo = vidPlayer.duration * (seekSlider.value / 100);
  vidPlayer.currentTime = seekTo;
}

function seekUpdate() {
  //slider update
  upTime = vidPlayer.currentTime * (100 / vidPlayer.duration);
  seekSlider.value = upTime;

  //timer update
  curMins = Math.floor(vidPlayer.currentTime / 60);
  curSecs = Math.floor(vidPlayer.currentTime - curMins * 60);
  durMins = Math.floor(vidPlayer.duration / 60);
  durSecs = Math.floor(vidPlayer.duration - durMins * 60);

  //add zeroes if needed
  if (curSecs < 10) {
    curSecs = "0" + curSecs;
  }
  if (durSecs < 10) {
    durSecs = "0" + durSecs;
  }

  //display time
  curTimeText.innerHTML = curMins+ ":" +curSecs;
  durTimeText.innerHTML = durMins+ ":" +durSecs;
}



// event handelling at the bottomNav
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
  vidPlayer.addEventListener('ended', closeLightBox);
  pBut.addEventListener('click', pausePlay);
  skipF.addEventListener('click', skipForward);
  skipB.addEventListener('click', skipBackward);
  seekSlider.addEventListener('change', vidSeek);
  vidPlayer.addEventListener('timeupdate', seekUpdate);

})();
