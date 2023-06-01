/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;

let anim1;

function preload(){
	anim1 = new Animator("./assets/anim 1/_CHIFFRE_.png", 21)
}

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		start: 1,
		stop : 21,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			anim1.update(event.amount);
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
	anim1.draw(480, 100, 400, 400); 
} 

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

