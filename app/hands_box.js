const videoElement = document.getElementById('input_video');
const canvasElement = document.getElementById('output_canvas');
const canvasCtx = canvasElement.getContext('2d');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');

const canvasElement2 = document.getElementById("output_canvas2");
const canvasCtx2 = canvasElement2.getContext('2d');

var age = 0;
var salary = 0;
var counter = 0;

var video = document.querySelector("#input_video");

function onResults(results) {
  
  var cx,cy;	
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
	  var myJSON = JSON.stringify(landmarks[8]);
	  var myJSON2 = JSON.parse(myJSON);
	  cx = parseInt(myJSON2.x*canvasElement.width);
	  cy = parseInt(myJSON2.y*canvasElement.height);	
	  
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
    }
  }
  canvasCtx.font = "20px Arial";
  canvasCtx.fillText("Enter Your Age :" + age, 10, 20);
  canvasCtx.fillText("Enter you salary : " + salary, 10, 150);
  
  
  canvasCtx.fillText("1. 0-2000" , 50, 200);
  canvasCtx.fillText("2. 2001-4000" , 175, 200);
  canvasCtx.fillText("3. 4001-6000" , 320, 200);
  canvasCtx.fillText("4. 6001-8000" , 50, 270);
  canvasCtx.fillText("5. 8001 above" , 200, 270);


  canvasCtx.fillText("Press the button:", 10, 360);
  canvasCtx.fillText("Submit ", 200, 400);
  canvasCtx.font = "40px Arial";
  canvasCtx.fillText("+", 85, 85);
  canvasCtx.fillText("-", 250, 85);
  
  canvasCtx.restore();
  
  let src = cv.imread('output_canvas');
  if (cx > 50 && cx < 150 && cy > 50 && cy<100 && counter==1) 
  {
    age = age + 1;
    if (age>99){
      age = 99;
    }
	  cv.rectangle(src, new cv.Point(50, 50), new cv.Point(150, 100), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(50, 50), new cv.Point(150, 100), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  if (cx > 200 && cx < 300 && cy > 50 && cy<100 && counter==1)
  {
    age = age - 1;
    if (age<0){
      age = 0
    }
	  cv.rectangle(src, new cv.Point(200, 50), new cv.Point(300, 100), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(200, 50), new cv.Point(300, 100), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }




  if (cx > 35 && cx < 150 && cy > 170 && cy<220 && counter==1)
  {
    salary = 1;
	  cv.rectangle(src, new cv.Point(35, 170), new cv.Point(150, 220), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(35, 170), new cv.Point(150, 220), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  if (cx > 165 && cx < 300 && cy > 170 && cy<220 && counter==1)
  {
    salary = 2;
	  cv.rectangle(src, new cv.Point(165, 170), new cv.Point(300, 220), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(165, 170), new cv.Point(300, 220), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx >310 && cx < 445 && cy > 170 && cy<220 && counter==1)
  {
    salary = 3;
	  cv.rectangle(src, new cv.Point(310, 170), new cv.Point(445, 220), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(310, 170), new cv.Point(445, 220), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  if (cx >35 && cx < 180 && cy > 240 && cy<290 && counter==1)
  {
    salary = 4;
	  cv.rectangle(src, new cv.Point(35, 240), new cv.Point(180, 290), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(35, 240), new cv.Point(180, 290), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx >200 && cx < 335 && cy > 240 && cy<290 && counter==1)
  {
    salary = 5;
	  cv.rectangle(src, new cv.Point(190, 240), new cv.Point(335, 290), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(190, 240), new cv.Point(335, 290), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }





  if (cx > 180 && cx < 280 && cy > 350 && cy<450 && counter==1)
  {
    document.getElementById("myForm").submit();
	  cv.rectangle(src, new cv.Point(180, 350), new cv.Point(280, 450), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(180, 350), new cv.Point(280, 450), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  cv.imshow('output_canvas', src);
  src.delete();
  document.getElementById("age").value=age;
  document.getElementById("salary").value=salary;
  counter = counter + 1;
  if (counter == 10){
    counter = 0;
  }
}

function onResults2(results) {
  canvasCtx2.save();
  canvasCtx2.translate(canvasElement2.width, 0);
  canvasCtx2.scale(-1, 1);
  canvasCtx2.clearRect(0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.drawImage(
      results.image, 0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.8
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    //flip the video content and load into output_canvas2 before process to detect finger
    onResults2({image: videoElement});
    //use the flipped image in output_canvas2 to detect finger
    await hands.send({image: canvasElement2});
  },
  width: 480,
  height: 480
});
camera.start();

