import Page from './page.js';

class PlaceOrderModal extends Page {
    get inputName () {
        return $('#name');
    }

    get inputCountry () {
        return $('#country');
    }

    get inputCity () {
        return $('#city');
    }

    get inputCreditCard () {
        return $('#card');
    }

    get inputMonth () {
        return $('#month');
    }

    get inputYear () {
        return $('#year');
    }

    get btnPurchase () {
        return $('button=Purchase');
    }

    async setName (name) {
        await this.inputName.setValue(name);
    }

    async setCountry (country) {
        await this.inputCountry.setValue(country);
    }

    async setCity (city) {
        await this.inputCity.setValue(city);
    }

    async setCreditCard (creditCard) {
        await this.inputCreditCard.setValue(creditCard);
    }

    async setMonth (month) {
        await this.inputMonth.setValue(month);
    }

    async setYear (year) {
        await this.inputYear.setValue(year);
    }

    async clickBtnPurchase (year) {
        await this.btnPurchase.click();
    }

    async setPlaceOrder(name, country, city, creditCard, month, year){
        await this.setName(name)
        await this.setCountry(country)
        await this.setCity(city)
        await this.setCreditCard(creditCard)
        await this.setMonth(month)
        await this.setYear(year)
    }
}

export default new PlaceOrderModal();
