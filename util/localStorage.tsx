class storage {
    static set(key: string, cartItems: any): void {
        localStorage.setItem(key, JSON.stringify(cartItems));
    }

    static get(key: string): any {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
}

export default storage;

