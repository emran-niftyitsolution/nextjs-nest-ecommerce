// Delete Product from List By Id
export const deleteProduct = <T extends { id: number | string }>(list: T[], id: number | string): T[] => {
    const filter = list.filter((item) => item.id !== id);
    return filter;
};

// Find Product Index From List
export const findProductIndex = <T extends { slug: string }>(list: T[], slug: string): number => {
    const index = list.findIndex((item) => item.slug === slug);
    return index;
};

export const findProductIndexById = <T extends { id: number | string }>(list: T[], id: number | string): number => {
    const index = list.findIndex((item) => item.id === id);
    return index;
};

