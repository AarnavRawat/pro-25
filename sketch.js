const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine;
var userWorld;
var ground;
var paper;
var bin;

function preload() {

}

function setup() {
	createCanvas(1800, 700);
	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 665, 1800, 10);
	paper = new Paper(100, 625, 35);
	bin = new Trash(800,650);
}


function draw() {
	background(0);
	Engine.update(userEngine);

	ground.display();
	paper.display();
	bin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 245, y: -245})

	}
}

