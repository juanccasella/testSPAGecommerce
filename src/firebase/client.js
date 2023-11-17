import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyC95HfFp8hGi5rpUNzwmMl0eHfMy6oCCts",
    authDomain: "spag-tienda-ecomerce.firebaseapp.com",
    projectId: "spag-tienda-ecomerce",
    storageBucket: "spag-tienda-ecomerce.appspot.com",
    messagingSenderId: "96160328997",
    appId: "1:96160328997:web:f886cc226e8264dc253ecc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);