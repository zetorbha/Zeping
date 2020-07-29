import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    
        apiKey: "AIzaSyCBl_vAimuQ0s80BxmQssdFsztHbuAkNa8",
        authDomain: "zepings-9e257.firebaseapp.com",
        databaseURL: "https://zepings-9e257.firebaseio.com",
        projectId: "zepings-9e257",
        storageBucket: "zepings-9e257.appspot.com",
        messagingSenderId: "134866146344",
        appId: "1:134866146344:web:36de02d39b6a7b702d911d"
      
});
const db = firebaseApp.firestore();

export default db;