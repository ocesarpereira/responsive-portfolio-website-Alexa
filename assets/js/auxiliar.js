const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.ClassName
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        console.log(itemClass);
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
}) // não ta funcionando o toggle  