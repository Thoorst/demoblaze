import Page from './page.js';

class Product extends Page {
    get btnAddToCart() {
        return $('a=Add to cart');
    }

    async clickBtnAddToCart () {
        await this.btnAddToCart.click()
    }

}

export default new Product();
