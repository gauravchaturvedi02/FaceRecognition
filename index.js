const remote= require('electron').remote
const main =remote.require('./main.js')

var button =document.createElement('button')
button.textContent='Register New Face'
button.addEventListener('click',() =>{
	main.openWindow()
})
document.body.appendChild(button)


//module for camera
// var enabled = false;
// // Use require to add webcamjs
// var WebCamera = require("webcamjs");

// document.getElementById("start").addEventListener('click',function(){
//    if(!enabled){ // Start the camera !
//      enabled = true;
//      WebCamera.attach('#camdemo');
//      console.log("The camera has been started");
//    }else{ // Disable the camera !
//      enabled = false;
//      WebCamera.reset();
//     console.log("The camera has been disabled");
//    }
// },false);



// //module for saving the file
// //var remote = require('remote'); // Load remote component that contains the dialog dependency
// var dialog = remote.require('dialog'); // Load the dialogs component of the OS
// var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

// // return an object with the processed base64image
// function processBase64Image(dataString) {
//       var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),response = {};

//       if (matches.length !== 3) {
//           return new Error('Invalid input string');
//       }

//       response.type = matches[1];
//       response.data = new Buffer(matches[2], 'base64');

//       return response;
// }

// document.getElementById("savefile").addEventListener('click',function(){
//      if(enabled){
//             WebCamera.snap(function(data_uri) {
//                 // Save the image in a variable
//                 var imageBuffer = processBase64Image(data_uri);
//                 // Start the save dialog to give a name to the file
//                 dialog.showSaveDialog({
//                     filters: [
//                         { name: 'Images', extensions: ['png'] },
//                     ]
//                 },function (fileName) {
//                        if (fileName === undefined){
//                             console.log("You didn't save the file because you exit or didn't give a name");
//                             return;
//                        }
//                        // If the user gave a name to the file, then save it
//                        // using filesystem writeFile function
//                        fs.writeFile(fileName, imageBuffer.data, function(err) {
//                            if(err){
//                                console.log("Cannot save the file :'( time to cry !");
//                            }else{
//                                alert("Image saved succesfully");
//                            }
//                        });
//                 });
//              });
//      }else{
//             console.log("Please enable the camera first to take the snapshot !");
//      }
// },false);