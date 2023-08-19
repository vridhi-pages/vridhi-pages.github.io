<script type="module">
  // Import the functions you need from the SDKs you need
 // import { initializeApp } from 

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6saE1sgNNYA4DSlMu_JoFfltzYhPMZtc",
    authDomain: "vridhipages-auth.firebaseapp.com",
    databaseURL: "https://vridhipages-auth-default-rtdb.firebaseio.com",
    projectId: "vridhipages-auth",
    storageBucket: "vridhipages-auth.appspot.com",
    messagingSenderId: "376345254551",
    appId: "1:376345254551:web:fdc413c334956764fae7d2"
  };

  const app = initializeApp(firebaseConfig);
  const databse = getDatabase(app); 
  const auth = getAuth();

const signUpButton = document.getElementById("signUp");

signUp.addEventListener('click',(e) => {
var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
set(ref(database,'users/'+ user.uid),{
username:username,email:email})
    alert('You are succesfully registered')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage);
    // ..
  });
});
          </script>
