const btnRequest = document.getElementById('btnRequest')
const requestPopup = document.getElementById('request-popup')
const btnCloseRequestPopup = document.getElementById('request-popup__close')
const submitBtn = document.getElementById('submitBtn')
const userName = document.getElementById('name')
const phone = document.getElementById('phone')

const clearInputs = (...inputsArr) => {
   for (const input of inputsArr) {
      input.value = ''
   }
}

btnRequest.addEventListener('click', (e) => {
   e.preventDefault()
   requestPopup.classList.add('--opened')
})

btnCloseRequestPopup.addEventListener('click', (e) => {
   e.preventDefault()
   requestPopup.classList.remove('--opened')

   clearInputs(userName, phone)
})

submitBtn.addEventListener('click', (e) => {
   e.preventDefault()
   requestPopup.classList.remove('--opened')
   console.log(`Имя: ${userName.value}`)
   console.log(`Номер телефона: ${phone.value}`)

   clearInputs(userName, phone)
})