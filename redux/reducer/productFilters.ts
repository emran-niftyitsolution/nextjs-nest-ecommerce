import * as Types from "../constants/actionTypes";

interface ProductFiltersState {
    category?: string;
    rating?: number;
    [key: string]: any;
}

interface ProductFiltersAction {
    type: string;
    payload?: any;
}

const initialState: ProductFiltersState = {
    category: ""
};

const productFiltersReducer = (state = initialState, action: ProductFiltersAction): ProductFiltersState => {
    switch (action.type) {
        case Types.UPDATE_PRODUCT_FILTERS:
            return {
                ...state,
                ...action.payload.productFilters,
            };

        case Types.UPDATE_PRODUCT_CATEGORY:
            const { category } = action.payload;
            return {
                ...state,
                category,
            };

        case Types.UPDATE_RATING:
            const { rating } = action.payload;
            return {
                ...state,
                rating,
            };

        default:
            return state;
    }
};

export default productFiltersReducer;

