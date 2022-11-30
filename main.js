noseX=0;
noseY=0;
function preload() {
  clown_nose = loadImage("https://i.postimg.cc/9Qp77jms/clown-nose-png.jpg");
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}
function gotPoses(result)
{
  if(results.lenght > 0)
  {
    console.log(results);
    noseX = results[0].pose.net.x;
    noseY = results[0].pose.net.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}