import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCf2xma6Sy2ckXK3ZzVL6nbKYqv6m-KsS8",
    authDomain: "telemedicine-fb5dc.firebaseapp.com",
    databaseURL: "https://telemedicine-fb5dc.firebaseio.com",
    projectId: "telemedicine-fb5dc",
    storageBucket: "",
    messagingSenderId: "867662671575"
});

export const db = app.database();
export const briefsRef = db.ref('briefs');

