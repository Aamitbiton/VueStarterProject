import firebaseInstance from './init'
import store from '../store'

async function set(data) {
    const userId = firebaseInstance.firebase.auth().currentUser.uid;
    firebaseInstance.db.collection("users").doc(userId)
        .set(data)
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export default {
    set
}