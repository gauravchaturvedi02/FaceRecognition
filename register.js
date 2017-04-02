var enabled = false;
// Use require to add webcamjs
var WebCamera = require("webcamjs");
var remote= require('electron').remote
var dialog = remote.dialog;
 // Load the dialogs component of the OS
var fs = require('fs'); 
var r;
var name;
var des;
var cat;var firebaseRef;
var pathname='';

function registration(){
  r=Math.random();
  

 name =document.getElementById("name").value;
 console.log(name);
 pathname='C:\\wamp\\www\\hackathon\\';
 des =document.getElementById("des").value;
 cat= document.getElementById("category").value;
 firebaseRef = firebase.database().ref();


  if (cat=="security"){
    firebaseRef.child("Security").child(name).set('S_0'+r);
  pathname=pathname+"//Security//S_"+r;
  makedir(pathname);

  }
  //console.log(name.value);
  if (cat=="emp"){
  //firebaseRef.child("Employee").child(name.value).set(des.value);
  //firebaseRef.child("Employee").child(name).set('E_0'+r);
  firebaseRef.child("Employee").child(name).child("Id").set('E_0'+r);
  firebaseRef.child("Employee").child(name).child("Designation").set(des);
  pathname=pathname+"//Employee//E_"+r;
  makedir(pathname);
  
   }
   else if(cat=="visitor"){
    console.log(name);
  firebaseRef.child("Visitor").child(name).child("Id").set('E_0'+r);
  pathname=pathname+"//Visitor//V_"+r;
  makedir(pathname);
  
   }
  else if(cat=="criminal"){
  firebaseRef.child("Criminal").child(name).child("Id").set('E_0'+r);
  pathname=pathname+"//Criminal//C_"+r;
  makedir(pathname);
  
  }
 
  // pathname=pathname+"\\"+name;
  // makedir(pathname);
}
function changeDes(){
  cat= document.getElementById("category").value;
  if(cat=='emp')
  $("#des").css('display','');
else
    $("#des").css('display','none');

}
function makedir(path){
  fs.mkdir(path,(err)=>{
    if(err) throw err;
    console.log('succesfully made directory');
  });
}



function startcam(){
   if(!enabled){ // Start the camera !
     enabled = true;
     WebCamera.attach('#camdemo');
     console.log("The camera has been started");
   }else{ // Disable the camera !
     enabled = false;
     WebCamera.reset();
    console.log("The camera has been disabled");
   }

}


//module for saving the file
//var remote = require('remote'); // Load remote component that contains the dialog dependency
// Load the File System to execute our common tasks (CRUD)

// return an object with the processed base64image
function processBase64Image(dataString) {
      var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),response = {};

      if (matches.length !== 3) {
          return new Error('Invalid input string');
      }

      response.type = matches[1];
      response.data = new Buffer(matches[2], 'base64');

      return response;
}
var i=1;
function savepic(){
  
 while(i<20){
     if(enabled){
            WebCamera.snap(function(data_uri) {
                // Save the image in a variable
                var imageBuffer = processBase64Image(data_uri);
                //var filePath ="./";
                fs.writeFile(pathname+"\\image"+Math.random()+".jpg", imageBuffer.data, function(err) {
                           if(err){
                               console.log(err);
                           }else{
                               console.log("Image saved succesfully");
                           }
                       });
                if (i==10){
                  setTimeout(savepic,3000);
                }

                //Start the save dialog to give a name to the file
                // dialog.showSaveDialog({
                //     filters: [
                //         { name: 'Images', extensions: ['jpg'] },
                //     ]
                // },function (fileName) {
                //        if (fileName === undefined){
                //             //fileName= g_i;
                //             console.log("You didn't save the file because you exit or didn't give a name");
                //             return;
                //        }
                //        // If the user gave a name to the file, then save it
                //        // using filesystem writeFile function
                //        console.log(fileName);
                //        fs.writeFile(fileName, imageBuffer.data, function(err) {
                //            if(err){
                //                console.log("Cannot save the file :'( time to cry !");
                //            }else{
                //                alert("Image saved succesfully");
                //            }
                //        });
                // });
             })
            i++;
     }
   else{
            alert("Please enable the camera first to take the snapshot !");
            i++;
     }
   }

}


