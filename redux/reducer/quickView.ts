import * as Types from '../constants/actionTypes';

interface Product {
    id: number | string;
    [key: string]: any;
}

interface QuickViewAction {
    type: string;
    payload?: any;
}

type QuickViewState = Product | null;

const quickViewReducer = (state: QuickViewState = null, action: QuickViewAction): QuickViewState => {
    switch (action.type) {
        case Types.OPEN_QUICK_VIEW:
            console.log("quickview active");
            return {
                ...action.payload.product
            };

        case Types.CLOSE_QUICK_VIEW:
            console.log("quickview close");
            return null;

        default:
            return state;
    }
};

export default quickViewReducer;

