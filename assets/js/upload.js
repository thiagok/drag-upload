/* drop, dragover and dragend events */

var SoftUpload = {

  // accepted_types: [
  //   'image/png': true,
  //   'image/jpeg': true,
  //   'image/gif': true,
  //   'application/pdf': true
  // ],

  initialize: function() {

    //TODO: checando se browser possui suporte ao drag

    SoftUpload.bindEvents();

  },

  bindEvents: function(){

    var upload = document.getElementById("upload");
    upload.ondragover = function () { this.className = 'hover'; return false; };
    upload.ondragend  = function () { this.className = ''; return false; };
    upload.ondrop     = function (e) {
      this.className = '';
      e.preventDefault();
      //readfiles(e.dataTransfer.files);
    }

  }

}

//
// function previewfile(file) {
//   if (tests.filereader === true && acceptedTypes[file.type] === true) {
//     var reader = new FileReader();
//     reader.onload = function (event) {
//       var image = new Image();
//       image.src = event.target.result;
//       image.width = 250; // a fake resize
//       holder.appendChild(image);
//     };
//
//     reader.readAsDataURL(file);
//   }  else {
//     holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
//     console.log(file);
//   }
// }
//
// function readfiles(files) {
//     debugger;
//     var formData = tests.formdata ? new FormData() : null;
//     for (var i = 0; i < files.length; i++) {
//       if (tests.formdata) formData.append('file', files[i]);
//       previewfile(files[i]);
//     }
//
//     // now post a new XHR request
//     if (tests.formdata) {
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', '/devnull.php');
//       xhr.onload = function() {
//         progress.value = progress.innerHTML = 100;
//       };
//
//       if (tests.progress) {
//         xhr.upload.onprogress = function (event) {
//           if (event.lengthComputable) {
//             var complete = (event.loaded / event.total * 100 | 0);
//             progress.value = progress.innerHTML = complete;
//           }
//         }
//       }
//
//       xhr.send(formData);
//     }
// }
//
// if (tests.dnd) {
//   holder.ondragover = function () { this.className = 'hover'; return false; };
//   holder.ondragend = function () { this.className = ''; return false; };
//   holder.ondrop = function (e) {
//     this.className = '';
//     e.preventDefault();
//     readfiles(e.dataTransfer.files);
//   }
// } else {
//   fileupload.className = 'hidden';
//   fileupload.querySelector('input').onchange = function () {
//     readfiles(this.files);
//   };
// }
