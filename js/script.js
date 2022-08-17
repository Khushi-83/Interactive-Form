
// focus the input for name when first load the page
const userName = document.getElementById('name')
userName.focus()

// other job role field visible only when other job role is selected
const otherJob = document.getElementById('other-job-role')
const jobTitle = document.getElementById('title')
jobTitle.addEventListener('change', (e) => {
  const job = e.target.value
  if (job === 'other') {
    otherJob.style.visibility = 'visible'
  } else {
    otherJob.style.visibility = 'hidden'
  }
})

// t-shirt color option need to match the design the user has chosen
const design = document.getElementById('design')
const color = document.getElementById('color')
color.disabled = true
design.addEventListener('change', (e) => {
  const design = e.target.value
  color.disabled = false
  if (design === 'js puns') {
    color.option = 'Select a design theme above'
    color[1].disabled = false
    color[2].disabled = false
    color[3].disabled = false
    color[4].disabled = true
    color[5].disabled = true
    color[6].disabled = true
  } else {
    color.value = 'Select a design theme above'
    color[1].disabled = true
    color[2].disabled = true
    color[3].disabled = true
    color[4].disabled = false
    color[5].disabled = false
    color[6].disabled = false
  }
})

// The loop checks for scheduling conflicts, the final condition makes the "Total: $" element updates to reflect the sum of the cost of the user’s selected activities.
const activitiesField = document.getElementById('activities')
let totalCost = 0
let totalSelected = 0

activitiesField.addEventListener('change', e => {
  const selected = e.target
  const selectedTime = e.target.getAttribute('data-day-and-time')
  const selectedCost = parseInt(selected.getAttribute('data-cost'))
  const totalDisplay = document.getElementById('activities-cost')

  for (let i = 0; i < checkboxes.length; i++) {
    const otherActivity = checkboxes[i]
    const otherActivityField = otherActivity.parentElement.classList
    const otherActivityTime = otherActivity.getAttribute('data-day-and-time')

    if (selected.checked === true &&
            selected !== otherActivity &&
            selectedTime === otherActivityTime) {
      otherActivity.disabled = true
      otherActivityField.add('disabled')
    } else if (selected.checked === false &&
            selected !== otherActivity &&
            selectedTime === otherActivityTime) {
      otherActivity.disabled = false
      otherActivityField.remove('disabled')
    }
  }

  if (selected.checked) {
    totalCost += selectedCost
    totalSelected += 1
  } else {
    totalCost -= selectedCost
    totalSelected -= 1
  }

  totalDisplay.textContent = `Total: $${totalCost}`
})

// Making the focus states of the activities more obvious to all users
const email = document.getElementById('email')
const form = document.querySelector('form')
const checkboxes = form.querySelectorAll('input[type="checkbox"]')

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('focus', e => {
    e.target.parentElement.classList.add('focus')
  })

  checkboxes[i].addEventListener('blur', e => {
    e.target.parentElement.classList.remove('focus')
  })
}
// Show only the payment method selected

const paymentMethod = document.getElementById('payment')
const creditCard = document.querySelector('[value=credit-card]')
const paypalBox = document.getElementById('paypal')
const bitcoinBox = document.getElementById('bitcoin')
const creditCardBox = document.getElementById('credit-card')
creditCard.selected = true
paypalBox.style.display = 'none'
bitcoinBox.style.display = 'none'

paymentMethod.addEventListener('change', (e) => {
  const payment = e.target.value
  if (payment === 'bitcoin') {
    bitcoinBox.style.display = ''
    creditCardBox.style.display = 'none'
    paypalBox.style.display = 'none'
  } else if (payment === 'paypal') {
    bitcoinBox.style.display = 'none'
    creditCardBox.style.display = 'none'
    paypalBox.style.display = ''
  } else {
    creditCardBox.style.display = ''
  }
})

// Form validation
const nameValidator = () => {
  const nameValue = userName.value
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue)
  return nameIsValid
}

const emailValidator = () => {
  const emailValue = email.value
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue)
  return emailIsValid
}

const activitiesValidator = () => {
  const activitiesSectionIsValid = totalSelected > 0
  return activitiesSectionIsValid
}

const cardValidator = () => {
  const cardNumber = document.getElementById('cc-num').value
  const cardIsValid = /^\d{13,16}$/.test(cardNumber)
  return cardIsValid
}

const zipValidator = () => {
  const zip = document.getElementById('zip').value
  const zipIsValid = /^\d{5}$/.test(zip)
  return zipIsValid
}

const cvvValidator = () => {
  const cvv = document.getElementById('cvv').value
  const cvvIsValid = /^\d{3}$/.test(cvv)
  return cvvIsValid
}

const nameField = userName.parentElement
const emailField = email.parentElement
const cardField = document.getElementById('cc-num').parentElement
const zipField = document.getElementById('zip').parentElement
const cvvField = document.getElementById('cvv').parentElement

function notValid (field) {
  field.classList.add('not-valid')
  field.classList.remove('valid')
  field.lastElementChild.style.display = 'block'
}

function valid (field) {
  field.classList.add('valid')
  field.classList.remove('not-valid')
  field.lastElementChild.removeAttribute('style')
}

userName.addEventListener('keyup', e => {
  const nameHint = document.getElementById('name-hint')

  if (!nameValidator() && userName.value.length === 0) {
    nameHint.innerHTML = 'Name field cannot be blank'
    notValid(nameField)
  } else if (!nameValidator() && userName.value.length > 0) {
    nameHint.innerHTML = 'Name field can only include alphabetical characters'
    notValid(nameField)
  } else if (nameValidator()) {
    valid(nameField)
  }
})

form.addEventListener('submit', e => {
  if (!nameValidator()) {
    notValid(nameField)
    e.preventDefault()
  } else if (nameValidator()) {
    valid(nameField)
  }

  if (!emailValidator()) {
    notValid(emailField)
    e.preventDefault()
  } else if (emailValidator()) {
    valid(emailField)
  }

  if (!activitiesValidator()) {
    notValid(activitiesField)
    e.preventDefault()
  } else if (activitiesValidator()) {
    valid(activitiesField)
  }

  if (paymentMethod.selectedIndex === 1) {
    if (!cardValidator()) {
      notValid(cardField)
      e.preventDefault()
    } else if (cardValidator()) {
      valid(cardField)
    }

    if (!zipValidator()) {
      notValid(zipField)
      e.preventDefault()
    } else if (zipValidator()) {
      valid(zipField)
    }

    if (!cvvValidator()) {
      notValid(cvvField)

      e.preventDefault()
    } else if (cvvValidator()) {
      valid(cvvField)
    }
  }
})
