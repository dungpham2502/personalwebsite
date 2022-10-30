const codingprojectHeight = document.getElementById('coding-section').offsetHeight
const btnCodingProject = document.getElementById('nav-link-coding');
btnCodingProject.addEventListener('click', () => {
    window.scrollTo({
        top: codingprojectHeight,
        left: 0,
        behavior: "smooth"
    });
});