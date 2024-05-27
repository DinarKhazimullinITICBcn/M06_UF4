import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuracio del meu firebase
const firebaseConfig = {
  apiKey: "AIzaSyAD9rAc5W03-V6Lsqi6RNvqcBTScTiW_iA",
  authDomain: "fir-projectepelis.firebaseapp.com",
  projectId: "fir-projectepelis",
  storageBucket: "fir-projectepelis.appspot.com",
  messagingSenderId: "692778240944",
  appId: "1:692778240944:web:65fb1a5bfeb2e05aa36475",
  measurementId: "G-2B7P0CJCXY"
};

// Inicialitzacio de firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicialitzacio de la base de dades per guardar/veure dades
const db = getFirestore(app);

export { db };