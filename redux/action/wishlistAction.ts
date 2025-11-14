import { Dispatch } from 'redux';
import * as Types from '../constants/actionTypes';

interface Product {
    id: number | string;
    [key: string]: any;
}

export const openWishlistModal = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.OPEN_WISHLIST,
    });
};

export const closeWishlistModal = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLOSE_WISHLIST,
    });
};

export const addToWishlist = (product: Product) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.ADD_TO_WISHLIST,
        payload: { product }
    });
};

export const deleteFromWishlist = (productId: number | string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.DELETE_FROM_WISHLIST,
        payload: { productId }
    });
};

export const clearWishlist = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLEAR_WISHLIST,
    });
};

