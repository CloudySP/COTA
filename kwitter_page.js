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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function s() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      console.log(firebase_message_id);
                      console.log(message_data);
                      name = message_data['name'];
                      message = message_data['message'];
                      like = message_data['like'];
                      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                      row = name_with_tag + message_with_tag + like_button + span_with_tag;
                      document.getElementById("output").innerHTML += row;
                }
          });
    });
}
getData();



function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html";

}

function updatLike(message_data) {
    console.log("liked thing-" + message_id);
    message_id = button_id;
    likes = document.getElementById(button_id).value;
    upadate_likes = Number(likes) + 1;
    console.log(upadated_liked)

    function getData() {
          firebase.database().ref(room_name).child(message_id).upadate({
                like: upadated_likes
          });
    }
}