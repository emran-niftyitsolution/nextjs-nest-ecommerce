import { Dispatch } from 'redux';
import * as Types from '../constants/actionTypes';

interface Product {
    id: number | string;
    [key: string]: any;
}

export const openQuickView = (product: Product) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.OPEN_QUICK_VIEW,
        payload: { product }
    });
};

export const closeQuickView = () => (dispatch: Dispatch) => {
    dispatch({
        type: Types.CLOSE_QUICK_VIEW,
    });
};

