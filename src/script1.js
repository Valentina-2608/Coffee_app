/* Registration page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
	
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

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
  const db = getDatabase();

  let form_sign_in = document.getElementById('form_sign');
  form_sign_in.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(db, 'users/' + user.uid), {
                email: email,
                password:password
          })
          .then(() => {
          // Data saved successfully!
        alert('User created successfully')
        window.location.replace("barista_orders.html");
        })
        .catch((error) => {
          // The write failed...
    alert('Error')
});
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
     alert(errorMessage);
});


});



let btn_clear = document.getElementById('btn_clear');
btn_clear.addEventListener('click', function(){
let email = document.getElementById('user_email');
var password =  document.getElementById('user_password');
email.value = '';
password.value = ''
});
