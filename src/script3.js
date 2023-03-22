/* Add orders to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
  const db = getFirestore(app);

  let btn_sign_out =  document.getElementById('btn_sign_out');
  btn_sign_out.addEventListener('click', function(){
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Log out success')
      window.location.replace("index.html");
      }).catch((error) => {
      // An error happened.
      });
  })

  
let order_btns = document.querySelectorAll('.order_btn');
for(let i=0; i< order_btns.length; i++){
  order_btns[i].addEventListener('click',addOrder);
}

/* Add orders */
function addOrder(event){
  let order_btn=event.target;
  let order_btn_parent = order_btn.parentElement;
  let card_caption = order_btn_parent.children[1].innerHTML;
  let card_price = order_btn_parent.children[2].innerHTML;
  const dbRef = collection(db, 'Orders')
    const data = {
        caption: card_caption,
        price:card_price
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Order was added successfully')
    })
    .catch((error)=>{
      alert('Error')
    });

}

