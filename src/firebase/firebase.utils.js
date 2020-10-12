import firebase from 'firebase/app';
import 'firebase/firestore'; // database
import 'firebase/auth'; // authentication




const config = {
    apiKey: "AIzaSyAVZkvUmeNEF3jtWj3y8QVWXsKoUtH_LZ4",
    authDomain: "ecommerce-project-d1bb7.firebaseapp.com",
    databaseURL: "https://ecommerce-project-d1bb7.firebaseio.com",
    projectId: "ecommerce-project-d1bb7",
    storageBucket: "ecommerce-project-d1bb7.appspot.com",
    messagingSenderId: "1047619604923",
    appId: "1:1047619604923:web:d9c18ad2f7ab7ac641b49e"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;



    const userRef = firestore.doc(`users/${userAuth.uid}`);


    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })



        } catch (err) {
            console.log('error creating user', err.message);
        }
    }



    return userRef;
}



export default firebase;