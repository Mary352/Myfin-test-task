const btnRequestList = document.querySelectorAll('.button')
const requestPopup = document.getElementById('request-popup')
const btnCloseRequestPopup = document.getElementById('request-popup__close')
const submitBtn = document.getElementById('submitBtn')
const userName = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')

const clearInputs = (...inputsArr) => {
   for (const input of inputsArr) {
      input.value = ''
   }
}

for (const btnRequest of btnRequestList) {
   btnRequest.addEventListener('click', (e) => {
      e.preventDefault()
      requestPopup.classList.add('--opened')
   })
}

btnCloseRequestPopup.addEventListener('click', (e) => {
   e.preventDefault()
   requestPopup.classList.remove('--opened')

   clearInputs(userName, phone, email)
})

submitBtn.addEventListener('click', (e) => {
   e.preventDefault()
   requestPopup.classList.remove('--opened')
   console.log(`Имя: ${userName.value}`)
   console.log(`Номер телефона: ${phone.value}`)
   console.log(`Email: ${email.value}`)

   clearInputs(userName, phone, email)
})