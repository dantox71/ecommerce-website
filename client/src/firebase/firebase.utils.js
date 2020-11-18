import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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


export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;



    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');


    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();






    //Create user profile document only if that user doesn't exist yet.
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

// Utility funtion that allows to add new collections and documents
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();


    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();

        batch.set(newDocRef, obj);
    });

    return await batch.commit();

}



// This method takes in snapshot of collections colleciton as an argument and return an array of documents inside of this collection
export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();


        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });



    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

};



export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}


export default firebase;