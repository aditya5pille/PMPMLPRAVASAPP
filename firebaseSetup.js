import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG1IXxsMrhmNxorRFQhmXp3ORvOdRlDEs",
  authDomain: "pravas-dev.firebaseapp.com",
  projectId: "pravas-dev",
  storageBucket: "pravas-dev.appspot.com",
  messagingSenderId: "433007844638",
  appId: "1:433007844638:web:ff6ad126f8542ffab0bd0f",
  databaseURL: "https://pravas-dev-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, auth, db, storage, database };
