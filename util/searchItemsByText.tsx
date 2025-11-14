interface Product {
    title: string;
    [key: string]: any;
}

export default (searchTerm: string, products: Product[]): Product[] => {
    if (!searchTerm) return products;

    let list: Product[] = [];
    const words = searchTerm.toLowerCase().split(" ");

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const isMatched = matchWordList(product.title, words);
        if (isMatched) list.push(product);
    }

    return list;
};

const matchWordList = (productTitle: string, words: string[]): boolean => {
    let matched = false;

    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        let isContainWord = productTitle.toLowerCase().indexOf(word) !== -1;
        isContainWord ? (matched = true) : (matched = false);
        if (!isContainWord) break;
    }
    return matched;
};

