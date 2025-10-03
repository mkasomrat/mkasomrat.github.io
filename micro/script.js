/*

I spent a lot time on this, so I hope you like it! Comment your best lap times!😄

3D track made in Creo Parametric.

Future plans:
- Better hit boxes
- Add acceleration
- Add sound
- Add more stages
- Make game time-dependent and not fps-dependent

If you are using Android, open sololearn in Chrome browser with WebGL enabled.
*/

window.addEventListener('load', function(){

    console.log=function(){};
    const SCALE = 27;
    const PI = Math.PI;
    var myTouchPad = document.getElementById( "touchPad");
    var myPadDot = document.getElementById( "padDot");
    var roundTime = document.getElementById( "scoreText");
    var lapOne = document.getElementById( "lap1");
    var lapTwo = document.getElementById( "lap2");
    var lapThree = document.getElementById( "lap3");
    var myRestartButton = document.getElementById( "restartButton");
    var lapArray = [lapOne,lapTwo,lapThree];
    var lapCounter = 0;
    var topConstant = window.innerHeight/3.5;
    var widthConstant = window.innerWidth/4;
    var xCenter = window.innerWidth/2 + widthConstant;
    var yCenter = (window.innerHeight/2) + topConstant;
    var currentX;
    var currentY;
    var x2;
    var y2;
    var currentPos=0;
    var radiusLimit;
    var alpha;
    var count1 = document.getElementById( "cd1");
    var count2= document.getElementById( "cd2");
    var count3 = document.getElementById( "cd3");
    var startTime = new Date();
    var runTime;
    var lapTimer = 0;
    var timeDiff;
    count3.style.display = "inline";
    var start = 0;
    var halfWay1 = 0;
    var halfWay2 = 0;
    
    //Camera values
    const FOV = 45;
    const ASPECT = window.innerWidth/window.innerHeight;
    const NEAR = 0.1;
    const FAR = 2000;
    
    //Making rendering time dependent
        var clock = new     THREE.Clock();
        var delta=0;
        clock.start(); //makes rendering timedependent
    
    // ********** Creating the scene: **********
    var renderer = new THREE.WebGLRenderer({ antialias: true }); //Creates a WebGL renderer using threejs library
    renderer.setPixelRatio( window.devicePixelRatio ); //Prevents blurry output
    renderer.setSize( window.innerWidth,window.innerHeight ); //Sets renderer size to the size of the window
    renderer.setClearColor(0xA9F5F2, 1); //Makes the background color of the scene blue
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    document.body.appendChild( renderer.domElement ); //Attaches renderer to DOM (initializes renderer)

    var scene = new THREE.Scene(); //Creates an empty scene where we are going to add our objects

    var camera = new THREE.PerspectiveCamera( FOV,ASPECT,NEAR,FAR ); //Creates a camera
    camera.position.set( 57/SCALE , -200/SCALE, 100/SCALE ); //Positions the camera
    camera.up.set( 0,0,1 ); //Sets the camera the correct direction
    camera.rotation.x=-PI/2;
    scene.add( camera ); //Adds the camera to the scene

    var controls = new THREE.OrbitControls( camera, renderer.domElement ); //OrbitControls allows camera to be controlled and orbit around a target
    controls.minDistance = 950/SCALE; //Sets the minimum distance one can pan into the scene
    controls.update();
    controls.enabled = false; 
    
    // ********** Adding light and Shadow**********
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight); //Adding ambient light
    var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
    light.position.set(0, 0, 1);
    light.castShadow = true;

    var d = 8;
    light.shadowCameraLeft = -d;
    light.shadowCameraRight = d;
    light.shadowCameraTop = d;
    light.shadowCameraBottom = -d;
    scene.add(light);
    
    function spawnObject(mtlFile,objFile){
        var myObject = new THREE.Object3D(); //Creates a new threejs 3D-object
        var mtlLoader = new THREE.MTLLoader(); //Creates an mtlLoader (to apply texture to 3d objects)
        mtlLoader.setCrossOrigin(true);
        mtlLoader.load( mtlFile, function( materials ) //Prepare to set color
        {
          materials.preload();
          var objLoader = new THREE.OBJLoader(); //Creates an object loader (to load 3d objects)
          objLoader.setMaterials( materials );
          objLoader.load( objFile, function ( object )
          {
            myObject.add( object );
          });
        });
        scene.add( myObject );
        return myObject;
    }
    
    function spawnCarTrack(){
    carTrack = spawnObject('https://dl.dropbox.com/s/0hwrodiid1ten55/cartrack_v2.mtl?dl=0','https://dl.dropbox.com/s/vo53hheei8fmcs5/cartrack_v2.obj?dl=0');
        carTrack.position.z=3;
        carTrack.position.x=2;
        carTrack.position.y=-71/10;
        carTrack.rotation.x=PI/2;
        carTrack.rotation.y=PI/2+0.4;
        carTrack.scale.x = 0.03;
        carTrack.scale.y = 0.03;
        carTrack.scale.z = 0.03;
    }
    
    function spawnCar(){
        car = spawnObject('https://dl.dropbox.com/s/gv5gne294ewyxfj/Car.mtl','https://dl.dropbox.com/s/4shab2h7zm3rk5r/Car.obj');
        car.position.z=3.3; //Positions car onto ground
        car.position.x=5;
        car.position.y=-12;
        car.rotation.x=PI/2;
        car.rotation.y=PI/2+0.9;
        car.scale.x = 0.6;
        car.scale.y = 0.6;
        car.scale.z = 0.6;
        return car;
    }

    spawnCarTrack();
    var myCar = spawnCar();
    
    myTouchPad.style.top=(myTouchPad.offsetTop + topConstant);
    myTouchPad.style.left=(myTouchPad.offsetLeft + widthConstant);
    
    myTouchPad.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0];
             myPadDot.style.left = touchobj.pageX;
             myPadDot.style.top = touchobj.pageY;
             myPadDot.style.display = "inline";
            radiusLimit=( (myTouchPad.offsetWidth/2)-(myPadDot.offsetWidth/2) );
    
        });

    myTouchPad.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0];
        myPadDot.style.display = "inline";
        currentX = parseInt(touchobj.pageX, 10) - xCenter;
        currentY = parseInt(touchobj.pageY, 10) - yCenter;
        x2 = Math.pow( currentX,2);
        y2 = Math.pow( currentY ,2);
        currentPos = Math.sqrt(x2 + y2);

        if (currentPos < radiusLimit){
            myPadDot.style.left = touchobj.pageX;
            myPadDot.style.top = touchobj.pageY;

         }
         else{
            alpha = Math.atan( currentY / currentX );
            
            if (currentX<0){
                alpha=alpha+Math.PI;
            }
            myPadDot.style.left = radiusLimit*Math.cos(alpha)+xCenter;
            myPadDot.style.top = radiusLimit*Math.sin(alpha)+ yCenter;
         }
         
    alpha = Math.atan( currentY / currentX );
            if (currentX<0){
                alpha=alpha+Math.PI;
            }

         return alpha;
    });
    
myTouchPad.addEventListener('touchend', function(e){
        myPadDot.style.display = "none";
    });
    
function moveCar(){
if(myPadDot.style.display == "inline"){
if (isNaN(alpha) == false){
        myCar.rotation.y = -alpha-PI/2+0.6;
myCar.position.y+=-(Math.sin(alpha)/20)*delta*58;
myCar.position.x+=(Math.cos(alpha)/20)*delta*58;
}
}
}

function outOfBound(){
        
    if( Math.sqrt(Math.pow(myCar.position.x-2,2) + Math.pow(myCar.position.y+7.1,2)) > 7.3){
    myPadDot.style.display="none";
    myCar.rotation.x-=0.05;
    myCar.position.z-=0.03;
    restartButton.style.display = "inline";
    start = 0;
}
else if(Math.sqrt(Math.pow(myCar.position.x-2,2) + Math.pow(myCar.position.y+7.1,2)) <  5.05){
    myPadDot.style.display="none";
    myCar.rotation.x-=0.05;
    myCar.position.z-=0.03;
    restartButton.style.display = "inline";
    start = 0;
}

}

function countDown(){
    runTime = new Date();
    timeDiff = runTime - startTime;
    
    if (count3.style.display == "inline"){
    count3.style.fontSize=timeDiff/10;
    }
    else if(count2.style.display == "inline"){
    count2.style.fontSize=timeDiff/10;
    }
    else if(count1.style.display == "inline"){
    count1.style.fontSize=timeDiff/10;
    }
    
    if (timeDiff>1500){
        if (count3.style.display=="inline"){
       count3.style.display="none";
       count2.style.display="inline"
       startTime = new Date();
       }
       else if (count2.style.display == "inline"){
        count2.style.display="none";
       count1.style.display="inline"
       startTime = new Date();
        }
        else if(count1.style.display== "inline"){
        count1.style.display = "none";
        
        startTime = new Date();
        start=1;
        }
    }
}

function countUp(){
    runTime = new Date();
    timeDiff = runTime - startTime;
    
    if (timeDiff/1000 < 10){
       roundTime.innerHTML = "Time: 0" + timeDiff/1000;
    }
    else{
    roundTime.innerHTML = "Time: " + timeDiff/1000;
}
}

function roundLap(){

    if (halfWay1 == 0){
        if (myCar.position.y <= 0.5  && myCar.position.y >= -6){
            if (myCar.position.x<1){
                halfWay1 = 1;
            }
        }
    }

    if (halfWay1 == 1){
        if (myCar.position.y <= 0.5  && myCar.position.y >= -6){
            if (myCar.position.x>=3){
                halfWay2 = 1;
            }
        }
    }
    
    if (halfWay2 == 1){
        if (myCar.position.y >= -14.6 && myCar.position.y <= -9.4){
            if(myCar.position.x<=4.9){
                if(lapCounter==0){
                    lap1Timer = timeDiff/1000;
                    lapTimer = lap1Timer
                }
                else if(lapCounter==1){
                    lapTimer = (timeDiff/1000) - lap1Timer
                    lap1Timer = lap1Timer + lapTimer;
                }
                else if(lapCounter==2){
                    lapTimer = (timeDiff/1000) - lap1Timer
                }
                
                lapTimer = lapTimer.toFixed(3);

                
                lapArray[lapCounter].style.display = "inline";
                var text1 = document.createTextNode(timeDiff/1000);
                var text2 = document.createTextNode(" (");
                var text3 = document.createTextNode(lapTimer); //Calculate seconds here
                var text4 = document.createTextNode(" sec)");
                lapArray[lapCounter].appendChild(text1);
                lapArray[lapCounter].appendChild(text2);
                lapArray[lapCounter].appendChild(text3);
                lapArray[lapCounter].appendChild(text4);
                lapCounter = lapCounter + 1;
                
                if (lapCounter == 3){
                    start = 0;
                    restartButton.style.display = "inline";
                }
                halfWay1 = 0;
                halfWay2 = 0;
            }
        }
    }
}

    myRestartButton.addEventListener('touchstart', function(){
        car.position.z=3.3; //Positions car onto ground
        car.position.x=5;
        car.position.y=-12;
        car.rotation.x=PI/2;
        car.rotation.y=PI/2+0.9;
        
        for (i = 0; i < 3; i++){
            lapArray[i].style.display = "none";
            lapArray[i].innerHTML = "Lap " + (i+1) + ": "; 
        }
        lapCounter = 0;
        
        count1.style.fontSize="16";
        count2.style.fontSize="16";
        count3.style.fontSize="16";
        count3.style.display = "inline";
        roundTime.innerHTML = "Time: 00.000";
        halfWay1=0;
        halfWay2=0;
        
        startTime = new Date();
        myRestartButton.style.display = "none";
        });
    
    //********** Render function **********
var render = function () 
    {
    
    delta = clock.getDelta();
    
    if (start == 1){
        moveCar();
        countUp();
        roundLap();
    }
    else{
        countDown();
    }
    outOfBound();
    
requestAnimationFrame(render); //render function is called every frame!
        renderer.render(scene, camera); //We need this in the loop to perform the rendering
    };
render();
});

//Made by Joakim Nyland