/* Show orders from FireStore*/

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
  const db = getFirestore();

  const dbRef = collection(db, 'Orders');
  let list_orders = document.querySelector('.list_orders');
  let show_orders = document.getElementById('show_orders');
  show_orders.addEventListener('click', showAllOrders);

  function showAllOrders(){
  onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
      console.log(doc.data().caption);
      console.log(doc.data().price);
      let new_order = document.createElement('div');
      new_order.classList.add('new_order')

      let new_order_caption = document.createElement('div');
      new_order_caption.classList.add('new_order_caption')
      new_order_caption.innerHTML = doc.data().caption;

      let new_order_price = document.createElement('div');
      new_order_price.classList.add('new_order_price')
      new_order_price.innerHTML = doc.data().price
      
      new_order.appendChild(new_order_caption);
      new_order.appendChild(new_order_price);


      list_orders.appendChild(new_order);

      setTimeout(()=>{
        location.reload()
      },10000)
    })

  })
 
  }