// Delete Product from List By Id
export const deleteProduct = (list: any[], id: string): any[] => {
  const filter = list.filter((item) => item.id !== id);
  return filter;
};

// Find Product Index From List
export const findProductIndex = (list: any[], slug: string): number => {
  const index = list.findIndex((item) => item.slug === slug);
  return index;
};

export const findProductIndexById = (list: any[], id: string): number => {
  const index = list.findIndex((item) => item.id === id);
  return index;
};

