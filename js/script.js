
// focus the input for name when first load the page
const name = document.getElementById('name')
name.focus()

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
const mainConference = document.querySelector('input[name=all]')
const jsLibraries = document.querySelector('input[name=js-libs]')
const nodeJS = document.querySelector('input[name=node]')
const jsFrameworks = document.querySelector('input[name=js-frameworks]')
const builTools = document.querySelector('input[name=build-tools]')
const npm = document.querySelector('input[name=npm]')
const express = document.querySelector('input[name=express]')
const total = document.getElementById('activities-cost')
let cost = 0

// Function to grab the courses value and add to the total
function totalCost (course) {
  const price = parseInt(course.dataset.cost)
  course.addEventListener('change', (e) => {
    if (e.target.checked) {
      total.textContent = `Total: $${cost += price}`
    } else {
      cost = cost - price
      total.textContent = `Total: $${cost}`
    }
  })
}
// calling functions
totalCost(mainConference)
totalCost(jsLibraries)
totalCost(nodeJS)
totalCost(jsFrameworks)
totalCost(builTools)
totalCost(npm)
totalCost(express)
