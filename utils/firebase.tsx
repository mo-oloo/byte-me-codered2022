import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQr3HgXFgZ_ti8lkBAj707bKz4yjNiz14",
    authDomain: "overlook-2feff.firebaseapp.com",
    databaseURL: "https://overlook-2feff-default-rtdb.firebaseio.com",
    projectId: "overlook-2feff",
    storageBucket: "overlook-2feff.appspot.com",
    messagingSenderId: "1036932109849",
    appId: "1:1036932109849:web:2d254ffebda0ebde7abc88",
    measurementId: "G-ZYSPPRSMRB"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default function firebase() {
  
  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  
}



// const data = collection(db, "UserInfo");
// getDocs(data).then((snapshot) => {console.log(snapshot.docs)})

export { db };