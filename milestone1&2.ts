let toggelSkills: any = document.getElementById('skills-button')

let skillsButton: any = document.getElementById('skills')

toggelSkills.addEventListener('click', () => {
  if(skillsButton.style.display === 'none'){
    skillsButton.style.display = 'block'
    toggelSkills.textContent = "Hide Skills"
  }
  else{
    skillsButton.style.display = 'none'
    toggelSkills.textContent = "Show Skills"
  }
})
let toggelExperience: any = document.getElementById('experience-button')

let experienceButton: any = document.getElementById('work-experience')

toggelExperience.addEventListener('click', () => {
  if(experienceButton.style.display === 'none'){
    experienceButton.style.display = 'block'
    toggelExperience.textContent = "Hide Experience"
  }
  else{
    experienceButton.style.display = 'none'
    toggelExperience.textContent = "Show Experience"
  }
})

let toggelEducation: any = document.getElementById('education-button')

let educationButton: any = document.getElementById('education')

toggelEducation.addEventListener('click', () => {
  if(educationButton.style.display === 'none'){
    educationButton.style.display = 'block'
    toggelEducation.textContent = "Hide Education"
  }
  else{
    educationButton.style.display = 'none'
    toggelEducation.textContent = "Show Education"
  }
})