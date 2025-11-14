import { Dispatch } from 'redux';
import * as Types from '../constants/actionTypes';

interface ProductFilters {
    [key: string]: any;
}

export const updateProductFilters = (productFilters: ProductFilters) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.UPDATE_PRODUCT_FILTERS,
        payload: { productFilters }
    });
};

export const updateProductCategory = (category: string) => (dispatch: Dispatch) => {
    dispatch({
        type: Types.UPDATE_PRODUCT_CATEGORY,
        payload: { category }
    });
};

export const updateProductRating = (filters: { rating: string }) => (dispatch: Dispatch) => {
    console.log(filters.rating);
    dispatch({
        type: Types.UPDATE_RATING,
        payload: filters
    });
};

