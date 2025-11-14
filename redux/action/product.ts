import { Dispatch } from 'redux';
import filterProductList from '../../util/filterProduct';
import searchItemsByText from '../../util/searchItemsByText';
import * as Types from '../constants/actionTypes';

interface Product {
    id: number | string;
    [key: string]: any;
}

interface Filters {
    [key: string]: any;
}

// Fetch Product
export const fetchProduct = (searchTerm: string, url: string, filters: Filters) => async (dispatch: Dispatch) => {
    try {
        const sendRequest = await fetch(url);
        const data: Product[] = await sendRequest.json();

        (window as any).products = data;

        const searchedItems = searchItemsByText(searchTerm, data);
        const filteredList = filterProductList(searchedItems, filters);

        dispatch({
            type: Types.FETCHED_PRODUCT,
            payload: { products: filteredList }
        });
    } catch (error) {
        console.log(error);
    }
};

// Fetch More Product
export const fetchMoreProduct = (url: string, total?: number) => async (dispatch: Dispatch) => {
    try {
        const sendRequest = await fetch(url);
        const data: Product[] = await sendRequest.json();

        dispatch({
            type: Types.FETCHED_MORE_PRODUCT,
            payload: { products: data, total }
        });
    } catch (error) {
        console.log(error);
    }
};

// Fetch Product By Category
export const fetchByCatagory = async (url: string, filters: Filters): Promise<Product[] | undefined> => {
    try {
        const sendRequest = await fetch(url);
        const data: Product[] = await sendRequest.json();
        const filteredList = filterProductList(data, filters);

        return filteredList;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

