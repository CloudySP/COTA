var firebaseConfig = {
    apiKey: "AIzaSyCjDTTaWMgoIHdyKmzyythjQdN-w1PmW-8",
    authDomain: "kwitter-app-e8b1f.firebaseapp.com",
    databaseURL: "https://kwitter-app-e8b1f-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-e8b1f",
    storageBucket: "kwitter-app-e8b1f.appspot.com",
    messagingSenderId: "456767308187",
    appId: "1:456767308187:web:3133b99641ab004b9fa13e"
  };
  

firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME "  +  user_name+ "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update ({
        purpose : "voldemort"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names)
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}