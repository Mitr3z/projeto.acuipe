/*objeto */
let googlePayClient;



/* principais operações */
function onGooglePayLoaded(){
    googlePayClient = new google.payments.api.PaymentsClient({})
}