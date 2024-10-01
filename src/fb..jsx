import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZE9c3ggpsN5a_ZJDC2HlvCoql_Gk8CV4",
  authDomain: "hubo-2d717.firebaseapp.com",
  projectId: "hubo-2d717",
  storageBucket: "hubo-2d717.appspot.com",
  messagingSenderId: "706375920373",
  appId: "1:706375920373:web:d3939016831a0e2a6cb3bc",
  measurementId: "G-8F7TVTFH3G",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
