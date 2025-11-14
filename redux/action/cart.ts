import { Dispatch } from 'redux';
import * as Types from '../constants/actionTypes';

// Product type
interface Product {
    id: number | string;
    quantity?: number;
    [key: string]: any;
}

// Action types
interface AddToCartAction {
    type: typeof Types.ADD_TO_CART;
    payload: { product: Product };
}

interface DeleteFromCartAction {
    type: typeof Types.DELETE_FROM_CART;
    payload: { productId: number | string };
}

interface IncreaseQuantityAction {
    type: typeof Types.INCREASE_QUANTITY;
    payload: { productId: number | string };
}

interface DecreaseQuantityAction {
    type: typeof Types.DECREASE_QUANTITY;
    payload: { productId: number | string };
}

interface OpenCartAction {
    type: typeof Types.OPEN_CART;
}

interface CloseCartAction {
    type: typeof Types.CLOSE_CART;
}

interface ClearCartAction {
    type: typeof Types.CLEAR_CART;
}

export type CartActionTypes =
    | AddToCartAction
    | DeleteFromCartAction
    | IncreaseQuantityAction
    | DecreaseQuantityAction
    | OpenCartAction
    | CloseCartAction
    | ClearCartAction;

// Action creators
export const addToCart = (product: Product) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.ADD_TO_CART,
        payload: { product }
    });
};

export const deleteFromCart = (productId: number | string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.DELETE_FROM_CART,
        payload: { productId }
    });
};

export const increaseQuantity = (productId: number | string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.INCREASE_QUANTITY,
        payload: { productId }
    });
};

export const decreaseQuantity = (productId: number | string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.DECREASE_QUANTITY,
        payload: { productId }
    });
};

export const openCart = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.OPEN_CART,
    });
};

export const clearCart = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLEAR_CART,
    });
};

export const closeCart = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLOSE_CART,
    });
};

