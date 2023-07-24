const Country = document.getElementsByClassName('iti__selected-dial-code')[0].textContent
const Country2 = document.getElementsByClassName('iti__selected-flag')[0]
const TELEPHONE = document.getElementById('telephone')

TELEPHONE.value = Country

Country2.onfocus = function (){
    TELEPHONE.value = Country
}