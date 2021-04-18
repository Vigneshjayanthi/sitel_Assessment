import firebase from 'firebase';



const firebaseApp= firebase.initializeApp(
    {
        apiKey: "AIzaSyCdAzCUQ_ggBaiGwguOeCcEq1DlqTNhk8o",
        authDomain: "sitel-assessment.firebaseapp.com",
        databaseURL: "https://sitel-assessment-default-rtdb.firebaseio.com",
        projectId: "sitel-assessment",
        storageBucket: "sitel-assessment.appspot.com",
        messagingSenderId: "855289475099",
        appId: "1:855289475099:web:1b24349b88aead654e88be",
        measurementId: "G-44GCR8T9ML"
    }
)

const db=firebaseApp.database();

export {db};