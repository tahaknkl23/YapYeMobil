import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCX3f7fRKnnbjzni5_FroiYBnn-kKtvhQ8",
  authDomain: "yapye-e8042.firebaseapp.com",
  projectId: "yapye-e8042",
  storageBucket: "yapye-e8042.appspot.com",
  messagingSenderId: "789454532360",
  appId: "1:789454532360:web:d386f86976d703656e86bd"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Firestore'ı ekleyin

export { app, firestore };
