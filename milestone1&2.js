var toggelSkills = document.getElementById('skills-button');
var skillsButton = document.getElementById('skills');
toggelSkills.addEventListener('click', function () {
    if (skillsButton.style.display === 'none') {
        skillsButton.style.display = 'block';
        toggelSkills.textContent = "Hide Skills";
    }
    else {
        skillsButton.style.display = 'none';
        toggelSkills.textContent = "Show Skills";
    }
});
var toggelExperience = document.getElementById('experience-button');
var experienceButton = document.getElementById('work-experience');
toggelExperience.addEventListener('click', function () {
    if (experienceButton.style.display === 'none') {
        experienceButton.style.display = 'block';
        toggelExperience.textContent = "Hide Experience";
    }
    else {
        experienceButton.style.display = 'none';
        toggelExperience.textContent = "Show Experience";
    }
});
var toggelEducation = document.getElementById('education-button');
var educationButton = document.getElementById('education');
toggelEducation.addEventListener('click', function () {
    if (educationButton.style.display === 'none') {
        educationButton.style.display = 'block';
        toggelEducation.textContent = "Hide Education";
    }
    else {
        educationButton.style.display = 'none';
        toggelEducation.textContent = "Show Education";
    }
});
