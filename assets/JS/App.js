// Swiper Js (testimonial section)
const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const menubtn = document.getElementById("menu-btn");
const closebtn = document.getElementById("close-btn");

const menu = document.querySelector("nav .container ul");

// Show Menu

menubtn.addEventListener("click", () => {
  menu.style.display = "block";
  menubtn.style.display = "none";
  closebtn.style.display = "inline-block";
});

// Hide menu

closebtn.addEventListener("click", () => {
  menu.style.display = "none";
  menubtn.style.display = "inline-block";
  closebtn.style.display = "none";
});

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active')
    })
}


navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active')
    })
})

// READ MORE ABOUT

const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content')
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = 'Show less'
    }else{
        readMoreBtn.textContent = 'Show more 📖'
    }
})


// ADD BOX SHADOW ON SCROLL 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})