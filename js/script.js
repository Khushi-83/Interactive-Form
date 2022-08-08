
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

// The "Total: $" element updated to reflect the sum of the cost of the user’s selected activities.
const activities = document.getElementById('activities')
for (let i = 0; i < activities.length; i++) {
  const element = activities[i]
  console.log(element)
}
