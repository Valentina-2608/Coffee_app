/* Log Out Page */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"


 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDkc-W_w5oaH5PHmU5Ht7btbLtPjozLIs",
    authDomain: "coffee-app-e5543.firebaseapp.com",
    databaseURL: "https://coffee-app-e5543-default-rtdb.firebaseio.com",
    projectId: "coffee-app-e5543",
    storageBucket: "coffee-app-e5543.appspot.com",
    messagingSenderId: "286940080308",
    appId: "1:286940080308:web:575b4095c5932f5a570fe1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();



let btn_sing_out =  document.getElementById('btn_log_out');
btn_sing_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Log out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})