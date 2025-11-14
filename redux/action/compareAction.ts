import { Dispatch } from 'redux';
import * as Types from '../constants/actionTypes';

interface Product {
    id: number | string;
    [key: string]: any;
}

export const openCompareModal = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.OPEN_COMPARE,
    });
};

export const closeCompareModal = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLOSE_COMPARE,
    });
};

export const addToCompare = (product: Product) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.ADD_TO_COMPARE,
        payload: { product }
    });
};

export const deleteFromCompare = (productId: number | string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.DELETE_FROM_COMPARE,
        payload: { productId }
    });
};

export const clearCompare = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLEAR_COMPARE,
    });
};

