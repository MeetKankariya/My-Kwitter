
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAyHKRVyMlVhzU2AlKknzPPeaRkmD2mO0Q",
  authDomain: "new-kwitter-6ed69.firebaseapp.com",
  databaseURL: "https://new-kwitter-6ed69-default-rtdb.firebaseio.com",
  projectId: "new-kwitter-6ed69",
  storageBucket: "new-kwitter-6ed69.appspot.com",
  messagingSenderId: "285570496144",
  appId: "1:285570496144:web:11b3e4968f093931164a15"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
