const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1, thunder2, thunder3, thunder4;
var engine, world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;


function preload() {

    walkingAnimated = loadAnimation(
        "Walking Frame/walking_1.png",
        "Walking Frame/walking_2.png",
        "Walking Frame/walking_3.png", 
        "Walking Frame/walking_4.png", 
        "Walking Frame/walking_5.png", 
        "Walking Frame/walking_6.png", 
        "Walking Frame/walking_7.png", 
        "Walking Frame/walking_8.png"
    );

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}


function setup() {
    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    walker = createSprite(200, 450);
    walker.addAnimation("walker", walkingAnimated);
    walker.scale = 0.4;

    umbrella = new Umbrella(200, 390);

    umbrella.x = walker.x;
    umbrella.y = walker.y;

    //Creating Drops (41-48)
    if(frameCount % 150 === 0) {

        for(var i = 0; i < maxDrops; i++){
            drops.push(new createDrop(random(0, 400), random(0, 400)));
        }

    }
    
}

function draw() {
    background(0); 

    Engine.update(engine);

    //Creating Thunder
    rand = Math.round(random(1, 4)); 

    if(frameCount % 80 === 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);

        switch(rand) {
            case 1: thunder.addImage(thunder1);
                    break;

            case 2: thunder.addImage(thunder2);
                    break; 

            case 3: thunder.addImage(thunder3);
                    break;

            case 4: thunder.addImage(thunder4);
                    break;

            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }


    //Spawning Rain Drops
    for(var i = 0; i < maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY() 
    }

    drawSprites();
}   


