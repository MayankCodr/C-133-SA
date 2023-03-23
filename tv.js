img = "";
status = "";
objects = [];
function preload(){
    img = loadImage("tv.jpg");

}
function setup(){
    canvas = createCanvas(640, 400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status :- Detecting Object";


}
function modelLoaded(){
    console.log("Model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);

}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}


function draw(){
    image(img, 0, 0, 640, 400);
    if (status != "") {
        for ( i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status :  Object Detected";
           fill("red");
           percent = floor(objects[i].confidence*100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y +15);
           noFill();
           stroke("red");
           rect(objects[i].x, objects[i].y , objects[i].width, objects[i].height);

        }
   }


}