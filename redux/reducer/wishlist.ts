import * as Types from '../constants/actionTypes';
import { deleteProduct, findProductIndexById } from '../../util/util';
import storage from '../../util/localStorage';

interface Product {
    id: number | string;
    [key: string]: any;
}

interface WishlistState {
    modal: boolean;
    items: Product[];
}

interface WishlistAction {
    type: string;
    payload?: any;
}

const initialState: WishlistState = {
    modal: false,
    items: []
};

const wishlistReducer = (state = initialState, action: WishlistAction): WishlistState => {
    let index: number | null = null;

    switch (action.type) {
        case Types.OPEN_WISHLIST:
            return {
                ...state,
                modal: true
            };

        case Types.CLOSE_WISHLIST:
            return {
                ...state,
                modal: false
            };

        case Types.INIT_LOCALSTORAGE:
            return {
                ...state,
                items: [...action.payload.wishlist]
            };

        case Types.ADD_TO_WISHLIST:
            index = findProductIndexById(state.items, action.payload.product.id);
            if (index !== -1) return state;

            const items = [...state.items, action.payload.product];
            storage.set("dokani_wishlist", items);

            return {
                ...state,
                items
            };

        case Types.DELETE_FROM_WISHLIST:
            const list = deleteProduct(state.items, action.payload.productId);
            storage.set("dokani_wishlist", list);

            return {
                ...state,
                items: [...list]
            };

        case Types.CLEAR_WISHLIST:
            storage.set("dokani_wishlist", []);

            return {
                ...state,
                items: []
            };

        default:
            return state;
    }
};

export default wishlistReducer;

