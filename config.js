import firebase from "firebase"

 var firebaseConfig = {
   apiKey: "AIzaSyDCf-TMcU9zTYqWVIVV7Y3ydLdo5yoPCEw",
  authDomain: "project-60-27ae8.firebaseapp.com",
  databaseURL: "https://project-60-27ae8-default-rtdb.firebaseio.com",
  projectId: "project-60-27ae8",
  storageBucket: "project-60-27ae8.appspot.com",
  messagingSenderId: "384150735149",
  appId: "1:384150735149:web:2e9aff916393c9e855aba4"
 }

 firebase.initializeApp(firebaseConfig)


export default firebase.database()