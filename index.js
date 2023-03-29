//Import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//Import our credentials from a secret file
import { credentials } from "./credentials.js";

//Connect to our Firebase project
initializeApp({
  credential: cert(credentials)
})

//Connect to Firestore database
const db = getFirestore();

//Add a product to our products collection
const candy2 = {
  name: "Twix",
  unitPrice: 2.99,
  size: "12oz",
  color: "gold",
  inventory: 288,
  productNumber: 2,

}

//How to add a document to firestore
//go in products collection and add candy
// db.collection('products').add(candy2) // While we are waiting for the promise..
//   .then(doc => {
//     console.log("added doc: " + doc.id) 
   
//   })
  
//   .catch(err => console.log(err))

//How to update a document in Firestore:
db.collection('products').doc('7egwmcKR7yzUGMWPJJxH').update({
  inventory: 555,
  customerFavorite: true,
  
}) 



//How to read a document from Firestore:

db.collection('products').doc('7egwmcKR7yzUGMWPJJxH').get() //doc.id, doc.data() -- stuff in doc
  .then(doc => {
    console.log(doc.data());
  })
  .catch(console.log()); //.catch(err => console.log(err))

// 
//How to get a whole collection:

db.collection('products').get()
  .then(collection => {
    const productList = collection.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.table(productList);
  })
  .catch(console.log);

  //Delete
  //db.collection('products').doc('7egwmcKR7yzUGMWPJJxH').get()
