noseX = 0;
noseY = 0;
function preload(){
    lipsWithLipstick = loadImage("https://i.postimg.cc/9fG5XmHK/Lips-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y + 15;
        console.log("lips x = " + noseX);
        console.log("lips y = " + noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(lipsWithLipstick, noseX, noseY, 40, 30);
}
function take_snapshot(){
    save('MyFilterImage');
}