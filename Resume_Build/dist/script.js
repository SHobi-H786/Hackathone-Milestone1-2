var toggle = document.getElementById('toggle');
var skills = document.getElementById('skills');
toggle.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// function toggleSkillsSection() {
//     const skillsSection = document.getElementById('skills');
//     if (skillsSection) {
//         skillsSection.style.display = (skillsSection.style.display === 'none' || skillsSection.style.display === 'block') ? 'block' : 'none';
//     }
// }
// Event listener for the button
// const button = document.getElementById('toggle-skills');
// if (button) {
//     button.addEventListener('click', toggleSkillsSection);
// }
