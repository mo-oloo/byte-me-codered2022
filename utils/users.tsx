import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


//const info = collection(db, "UserInfo");

const getUsers = async () => {
    const snapshot = await getDocs(collection(db, "UserInfo"));
    snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getUsers };