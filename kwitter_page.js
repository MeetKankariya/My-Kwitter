//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
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
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
          message:msg,  
          like:0
      })
      document.getElementById("msg").value="" 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
t1='<h4>'+name+ '<img src="tick.png" class="user_tick"></h4>'
t2='<h4 class="message_h4">'+message+'</h4>'
t3="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
t4="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
bs=t1+t2+t3+t4
document.getElementById("output").innerHTML+=bs
//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id=message_id
      gl=document.getElementById(button_id).value
      nl=Number(gl)+1
      firebase.database().ref(room_name).child(message_id).update({
          like:nl  
      })
}

function logout(){
      window.location="index.html"
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
}
