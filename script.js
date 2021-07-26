let links = document.querySelectorAll('nav .links a'),
    sections = document.querySelectorAll('section'),
    buttons = document.querySelectorAll('.pricing .buttons button'),
    packages = document.querySelectorAll('.pricing .packages .package');

buttons.forEach((button, index) => button.onclick = () => {

buttons.forEach(button => {
    button.childNodes[1].classList.remove('fa-caret-down');
    button.childNodes[1].classList.add('fa-caret-right');
});

    button.childNodes[1].classList.remove('fa-caret-right');
    button.childNodes[1].classList.add('fa-caret-down');

    packages.forEach(package => package.classList.remove('active'));
    packages[index].classList.add('active');

})



links.forEach((link, index) => {
    link.onclick = () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add("active");
        sections.forEach(section => section.classList.remove('active'));
        sections[index].classList.add('active');
    }

});
