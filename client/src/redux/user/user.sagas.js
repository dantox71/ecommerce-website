import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser,

} from '../../firebase/firebase.utils';


import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';

const {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
} = UserActionTypes;


export function* getSnapshotFromAuth(userAuth, additionalData) {
    try {

        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));

    } catch (err) {

        yield put(signInFailure(err));
    }
}


export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (err) {
        yield put(signOutFailure(err));
    }
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;

        yield getSnapshotFromAuth(userAuth);
    } catch (err) {
        yield put(signInFailure(err));
    }

}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromAuth(user);
    } catch (err) {
        yield put(signInFailure(err));
    }

}


export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotFromAuth(user);

    } catch (err) {
        yield put(signInFailure(err));
    }


};


export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );


        // yield getSnapshotFromAuth(user, { displayName });
        yield put(signUpSuccess({ user, displayName }));
    } catch (err) {
        yield put(signUpFailure(err));

    }
}



export function* signInAfterSignUp({ payload: { displayName, user } }) {
    yield getSnapshotFromAuth(user, { displayName });


}
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp);
}



export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)

}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);

}