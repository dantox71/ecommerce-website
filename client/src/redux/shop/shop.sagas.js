import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';


import ShopActionTypes from './shop.types';



const { FETCH_COLLECTIONS_START } = ShopActionTypes;



export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }
};






export function* onFetchCollectionsStart() {
    yield takeLatest(
        FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}



export function* shopSagas() {
    yield(all([
        call(onFetchCollectionsStart)
    ]));
}