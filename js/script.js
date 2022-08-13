
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
design.addEventListener('change', (e) => {
  const design = e.target.value
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

// The "Total: $" element updates to reflect the sum of the cost of the user’s selected activities.
const activitiesField = document.getElementById('activities')
const mainConference = document.querySelector('input[name=all]')
const jsLibraries = document.querySelector('input[name=js-libs]')
const nodeJS = document.querySelector('input[name=node]')
const jsFrameworks = document.querySelector('input[name=js-frameworks]')
const buildTools = document.querySelector('input[name=build-tools]')
const npm = document.querySelector('input[name=npm]')
const express = document.querySelector('input[name=express]')
const total = document.getElementById('activities-cost')

let cost = 0
let selected = 0

// Function to grab the courses value and add to the total
function totalCost (course) {
  const price = parseInt(course.dataset.cost)
  course.addEventListener('change', (e) => {
    if (e.target.checked) {
      total.textContent = `Total: $${cost += price}`
    } else {
      cost -= price
      total.textContent = `Total: $${cost}`
    }
  })
}
function totalSelected (course) {
  course.addEventListener('change', () => {
    if (course.checked) {
      selected += 1
    } else {
      selected -= 1
    }
    console.log(selected)
  })
}
totalSelected(mainConference)
totalSelected(jsLibraries)
totalSelected(nodeJS)
totalSelected(jsFrameworks)
totalSelected(buildTools)
totalSelected(npm)
totalSelected(express)

// calling functions
totalCost(mainConference)
totalCost(jsLibraries)
totalCost(nodeJS)
totalCost(jsFrameworks)
totalCost(buildTools)
totalCost(npm)
totalCost(express)

// payment

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
const email = document.getElementById('email')
const form = document.querySelector('form')

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
  const activitiesSectionIsValid = selected > 0
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
