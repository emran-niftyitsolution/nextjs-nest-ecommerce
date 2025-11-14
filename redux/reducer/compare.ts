import * as Types from "../constants/actionTypes";
import { deleteProduct, findProductIndexById } from "../../util/util";
import storage from "../../util/localStorage";

interface Product {
    id: number | string;
    [key: string]: any;
}

interface CompareState {
    modal: boolean;
    items: Product[];
}

interface CompareAction {
    type: string;
    payload?: any;
}

const initialState: CompareState = {
    modal: false,
    items: [],
};

const compareReducer = (state = initialState, action: CompareAction): CompareState => {
    let index: number | null = null;

    switch (action.type) {
        case Types.OPEN_COMPARE:
            return {
                ...state,
                modal: true,
            };

        case Types.CLOSE_COMPARE:
            return {
                ...state,
                modal: false,
            };

        case Types.INIT_LOCALSTORAGE:
            return {
                ...state,
                items: [...action.payload.compare],
            };

        case Types.ADD_TO_COMPARE:
            index = findProductIndexById(state.items, action.payload.product.id);
            if (index !== -1) return state;

            const items = [...state.items, action.payload.product];

            storage.set("dokani_compare", items);

            return {
                ...state,
                items,
            };

        case Types.DELETE_FROM_COMPARE:
            const list = deleteProduct(state.items, action.payload.productId);
            storage.set("dokani_compare", list);

            return {
                ...state,
                items: [...list],
            };

        case Types.CLEAR_COMPARE:
            storage.set("dokani_compare", []);

            return {
                ...state,
                items: [],
            };

        default:
            return state;
    }
};

export default compareReducer;

