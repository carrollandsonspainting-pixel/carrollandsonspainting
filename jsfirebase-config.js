// Your Firebase configuration – REPLACE WITH YOUR OWN
const firebaseConfig = {
    apiKey: "AIzaSyDMsPxrpfMgW6p_gk4Dl40xC3JT-L8UIOg",
    authDomain: "carroll-and-sons-painting.firebaseapp.com",
    projectId: "carroll-and-sons-painting",
    storageBucket: "carroll-and-sons-painting.firebasestorage.app",
    messagingSenderId: "846048847940",
    appId: "1:846048847940:web:7fe3575798004419803411",
    measurementId: "G-7EP8VGF60N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();