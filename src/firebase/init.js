import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import config from './config.json';
import 'firebase/storage'


firebase.initializeApp(config);
// firebase.auth().languageCode = 'iw';
const db = firebase.firestore();

export default {
    firebase,
    db
}