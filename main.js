song=""
right_wrist_x=0
right_wrist_y=0
left_wrist_x=0
left_wrist_y=0
function preload(){
song = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.position(470,250)
    video= createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("model loaded")
}
function gotPoses(results){
        console.log(results)
        right_wrist_x = results[0].pose.rightWrist.x
        right_wrist_y = results[0].pose.rightWrist.y

        left_wrist_x = results[0].pose.leftWrist.x
        left_wrist_y = results[0].pose.leftWrist.y

        console.log(right_wrist_x,right_wrist_y)
        console.log(left_wrist_x,left_wrist_y)

}
function draw(){
    image(video,0,0,600,500)
    rect(right_wrist_x, right_wrist_y, 25,25);
    rect(left_wrist_x, left_wrist_y, 25,25);
}
function play(){
    song.play()
    document.getElementById("")
}
