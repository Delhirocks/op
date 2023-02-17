var firebaseConfig = {
    apiKey: "AIzaSyAaugbIey0ZnrD_uvqYSG4w0TFK7YZGTQ8",
    authDomain: "kwitter-83b22.firebaseapp.com",
    projectId: "kwitter-83b22",
    storageBucket: "kwitter-83b22.appspot.com",
    messagingSenderId: "686973626503",
    appId: "1:686973626503:web:7ad2cd1ba4933083b43022",
};
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getAnimationsElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}

function getData(){ firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML})
 Group_name = childkey;
}
getData()
//ADD YOUR FIREBASE LINKS