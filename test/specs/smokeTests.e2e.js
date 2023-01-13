import LoginModal from '../pageobjects/loginModal.page.js'
import Product from '../pageobjects/product.page.js'
import Cart from '../pageobjects/cart.page.js'
import PlaceOrderModal from '../pageobjects/placeOrderModal.page.js'
import { browser, $, expect } from '@wdio/globals'
import { alertIsPresent } from 'wdio-wait-for'

//Data
const placeOrder = {
    name: "John",
    country: "Itally",
    city: "Rome",
    creditCard: "36874684868748",
    month: "july",
    year: "2000"
}

//Timeouts
const implicitWaitTimeout = 2000
const alertWaitTimeout = 2000
const alertWaitTimeoutFailed = 'Failed, after waiting for the alert to be present'
//Browser
const resolution = {
    width: 1920,
    height: 1080
}

before(`Browser set up`, () => {
    browser.setWindowSize(resolution.width, resolution.height)
    browser.setTimeout({ 'implicit': implicitWaitTimeout })
})

describe('Smoke tests for smartfone purchase order', () => {
    it('Purchase order of one smartphone', async () => {
        await LoginModal.open()
        await LoginModal.clickSignIn()
        await LoginModal.loginBaseUser()
        await LoginModal.clickSamsung()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarCart()
        await Cart.clickBtnPlaceOrder()
        await PlaceOrderModal.setPlaceOrder(placeOrder.name, placeOrder.country, placeOrder.city, placeOrder.creditCard, placeOrder.month, placeOrder.year)
        await PlaceOrderModal.clickBtnPurchase()
        await expect($(`h2=Thank you for your purchase!`)).toBeExisting()
        const summary = await Cart.purchaseSummary.getText()
        console.log(summary)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        expect(summary).toContain(`Card Number: ${placeOrder.creditCard}`)
        //expect(summary).toContain(`Date: 13/${placeOrder.month}/${placeOrder.year}`)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        await Cart.clickBtnOk()
    })

    it('Order without product in cart is disabled', async () => {
        await LoginModal.open()
        await LoginModal.clickSignIn()
        await LoginModal.loginBaseUser()
        await LoginModal.clickSamsung()
        await LoginModal.clickNavbarCart()
        //await expect(Cart.btnPlaceOrder).toBeDisabled()
    })

    it('Delete smartphone from cart', async () => {
        await LoginModal.open()
        await LoginModal.clickSignIn()
        await LoginModal.loginBaseUser()
        await LoginModal.clickSamsung()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarCart()
        await Cart.clickDeleteFirstProduct()
        await expect($(`#tbodyid > tr`)).not.toBeExisting()
    })

    it('Purchase order of one smartphone but multiple times', async () => {
        await LoginModal.open()
        await LoginModal.clickSignIn()
        await LoginModal.loginBaseUser()
        await LoginModal.clickPhones()
        await LoginModal.clickSamsung()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarCart()
        await expect($(`//tbody/tr[3]`)).toBeExisting()
        await expect($(`//tbody/tr[4]`)).not.toBeExisting()
        await Cart.clickBtnPlaceOrder()
        await PlaceOrderModal.setPlaceOrder(placeOrder.name, placeOrder.country, placeOrder.city, placeOrder.creditCard, placeOrder.month, placeOrder.year)
        await PlaceOrderModal.clickBtnPurchase()
        await expect($(`h2=Thank you for your purchase!`)).toBeExisting()
        const summary = await Cart.purchaseSummary.getText()
        console.log(summary)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        expect(summary).toContain(`Card Number: ${placeOrder.creditCard}`)
        //expect(summary).toContain(`Date: 13/${placeOrder.month}/${placeOrder.year}`)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        await Cart.clickBtnOk()
    })

    it('Purchase order with multiple smartphones', async () => {
        await LoginModal.open()
        await LoginModal.clickSignIn()
        await LoginModal.loginBaseUser()
        await LoginModal.clickPhones()
        await LoginModal.clickSamsung()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarHome()
        await LoginModal.clickPhones()
        await LoginModal.clickLinkIphone()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarHome()
        await LoginModal.clickPhones()
        await LoginModal.clickLinkNexus()
        await Product.clickBtnAddToCart()
        await browser.waitUntil(alertIsPresent(), { timeout: alertWaitTimeout, timeoutMsg: alertWaitTimeoutFailed })
        await browser.acceptAlert()
        await LoginModal.clickNavbarCart()
        await expect($(`//tbody/tr[3]`)).toBeExisting()
        await expect($(`//tbody/tr[4]`)).not.toBeExisting()
        await Cart.clickBtnPlaceOrder()
        await PlaceOrderModal.setPlaceOrder(placeOrder.name, placeOrder.country, placeOrder.city, placeOrder.creditCard, placeOrder.month, placeOrder.year)
        await PlaceOrderModal.clickBtnPurchase()
        await expect($(`h2=Thank you for your purchase!`)).toBeExisting()
        const summary = await Cart.purchaseSummary.getText()
        console.log(summary)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        expect(summary).toContain(`Card Number: ${placeOrder.creditCard}`)
        //expect(summary).toContain(`Date: 13/${placeOrder.month}/${placeOrder.year}`)
        expect(summary).toContain(`Name: ${placeOrder.name}`)
        await Cart.clickBtnOk()
    })
})

