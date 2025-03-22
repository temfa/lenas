import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4g-3SdpeCM8uPX5icN9HMeTZr27LExmA",
  authDomain: "lenas-39611.firebaseapp.com",
  projectId: "lenas-39611",
  storageBucket: "lenas-39611.firebasestorage.app",
  messagingSenderId: "1000433255029",
  appId: "1:1000433255029:web:157b9f63bb6eca84f1ee3c",
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

export default app;
