// レストパラメーター
export const sumProductPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((prevTotal: number, productPrice: number) => {
        return prevTotal + productPrice;
    }, 0);
}