// Filter Products By Filters

interface Product {
    price: number;
    [key: string]: any;
}

interface PriceFilter {
    min: number;
    max: number;
}

interface Filters {
    price?: PriceFilter;
    [key: string]: any;
}

export default (productList: Product[], filters: Filters): Product[] => {
    let filteredList = [...productList];

    for (const key in filters) {
        if (key !== "price") {
            if (
                filters[key] === "featured" ||
                filters[key] === "trending" ||
                filters[key] === "lowToHigh" ||
                filters[key] === "highToLow"
            ) {
                if (filters[key] === "lowToHigh") {
                    filteredList = [
                        ...filteredList.sort((a, b) => {
                            if (a.price < b.price) return -1;
                            if (a.price > b.price) return 1;
                            return 0;
                        }),
                    ];
                } else {
                    if (filters[key] === "highToLow") {
                        console.log("hi");
                        filteredList = [
                            ...filteredList.sort((a, b) => {
                                if (b.price < a.price) return -1;
                                if (b.price > a.price) return 1;
                                return 0;
                            }),
                        ];
                    } else {
                        console.log("hi1");
                        filteredList = filteredList.filter(
                            (item) => item[filters[key]]
                        );
                    }
                }
            } else {
                filteredList = filterByKey(filteredList, filters[key], key);
            }
        } else {
            filteredList = filterByPrice(filteredList, filters[key], key);
        }
    }
    return filteredList;
};

// Filter Product By Price

function filterByPrice(filteredList: Product[], price: PriceFilter, key: string): Product[] {
    let list: Product[] = [];

    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];
        const productPrice = product[key];

        if (productPrice >= price.min && productPrice <= price.max) {
            list.push(product);
        }
    }

    return (filteredList = list);
}

// Filter Product by key size/category/brand etc

function filterByKey(filteredList: Product[], size: any, key: string): Product[] {
    let list: Product[] = [];
    if (!size || size.length === 0) return filteredList;
    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];

        if (size.indexOf != undefined) {
            const isOk = size && size.indexOf(product[key]);
            if (isOk !== -1) {
                list.push(product);
            }
        }
    }

    return (filteredList = list);
}

