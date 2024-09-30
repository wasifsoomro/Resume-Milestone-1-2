var toggelSkills = document.getElementById('toggle-button');
var skillsButton = document.getElementById('skills');
toggelSkills.addEventListener('click', function () {
    if (skillsButton.style.display === 'none') {
        skillsButton.style.display = 'block';
    }
    else {
        skillsButton.style.display = 'none';
    }
});
