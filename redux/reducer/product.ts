import { deleteProduct, findProductIndexById } from "../../util/util";
import * as Types from "../constants/actionTypes";

interface Product {
    id: number | string;
    [key: string]: any;
}

interface ProductState {
    items: Product[];
}

interface ProductAction {
    type: string;
    payload?: any;
}

const initialState: ProductState = {
    items: []
};

const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case Types.FETCHED_PRODUCT:
            return {
                ...state,
                items: [...action.payload.products],
            };

        case Types.FETCHED_MORE_PRODUCT:
            const mergeAllProducts = [
                ...state.items,
                ...action.payload.products,
            ];

            const limit =
                action.payload.total &&
                mergeAllProducts.length > action.payload.total
                    ? mergeAllProducts.splice(0, action.payload.total)
                    : mergeAllProducts;

            return {
                ...state,
                items: [...limit],
            };

        case Types.ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: deleteProduct(state.items, action.payload.id)
            };

        case Types.UPDATE_PRODUCT:
            const index = findProductIndexById(state.items, action.payload.product.id);
            const newItems = [...state.items];
            if (index !== -1) {
                newItems[index] = action.payload.product;
            }

            return {
                ...state,
                items: newItems
            };

        default:
            return state;
    }
};

export default productReducer;

