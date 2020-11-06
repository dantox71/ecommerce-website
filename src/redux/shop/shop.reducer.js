import ShopActionsTypes from './shop.types';


const { UPDATE_COLLECTIONS } = ShopActionsTypes;

const INITIAL_STATE = {
    collections: null
}



const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {


        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload
            }




        default:
            return state;
    }
}


export default shopReducer;