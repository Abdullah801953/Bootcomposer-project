// nav items hover effects
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.classList.add('nav-hover');
    })
})

navItems.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        item.classList.remove('nav-hover');
    })
})
