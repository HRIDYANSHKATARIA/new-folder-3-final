noseX = 0;
    noseY = 0;
    difference = 0;
    leftwristX = 0;
    rightwristX = 0;

function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(700,100);

   poseNet = ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotposes);
}

function draw()
{
   background('#ffff66');
   document.getElementById("square_side").innerHTML = "Width and Height of the Square is"+difference+"px";
   textSize(difference)
   fill("Black")
   text('PETER',noseX,noseY);
  

}

function modelloaded()
{
console.log('MODEL LOADED');
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log('Nose X ='+ noseX );
        console.log('Nose Y ='+ noseY );
    
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.y;

        console.log('Left Wrist = '+ leftwristX );
        console.log('Right Wrist = '+ rightwristX );

        difference = floor( leftwristX - rightwristX );
        
        console.log('difference = '+ difference);

        
    }
}
