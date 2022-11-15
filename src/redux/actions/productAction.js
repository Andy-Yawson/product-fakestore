import {ActionTypes} from "../constants/action-types";
import {serverRequest} from "../../util/server_request";


export const removeProduct = () => {
    return { type: ActionTypes.REMOVE_SELECTED_PRODUCT }
}

export const fetchProducts = () => async (dispatch) => {
    serverRequest('GET','products').then(result => {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: result })
    })
}

export const fetchSingleProduct = (id) => async (dispatch) => {
    serverRequest('GET',`products/${id}`).then(result => {
        dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: result })
    })
}
