import ShopActionsTypes from './shop.types';


const {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} = ShopActionsTypes;

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}



const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {

        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }


        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload
            }

        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }


        default:
            return state;
    }
}


export default shopReducer;