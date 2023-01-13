import Page from './page.js';

class Cart extends Page {
    get btnPlaceOrder() {
        return $('button=Place Order');
    }

    get btnOk() {
        return $('button=OK');
    }

    get purchaseSummary() {
        return $('//p[@class="lead text-muted "]');
    }

    get linkDeleteFirstProduct() {
        return $(`//tbody[@id="tbodyid"]/tr[1]/td[4]/a`)
    }

    async clickBtnPlaceOrder() {
        await this.btnPlaceOrder.click()
    }

    async clickBtnOk() {
        await this.btnOk.click()
    }

    async clickDeleteFirstProduct() {
        await this.linkDeleteFirstProduct.click()
    }
}

export default new Cart();
