// $('.navTrigger').click(function () {
//     $(this).toggleClass('active');
//     console.log("Clicked menu");
//     $("#mainListDiv").toggleClass("show_list");
//     $("#mainListDiv").fadeIn();

// });



// const nav = document.getElementById('nav');
// const navHeight = nav.offsetHeight;
// let lastScrollTop = 0;

// window.addEventListener('scroll', function() {
//   let scrollTop = window.scrollY || window.pageYOffset;
  
  // Если скроллим вниз
//   if (scrollTop > lastScrollTop && scrollTop > navHeight) {
//     nav.classList.add('navHidden');
//   } else {
//     nav.classList.remove('navHidden');
//   }
  
//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для IOS и Safari
// });




// При скролле плавно появляется контент

// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.catalog');

// for (let elm of elements) {
//   observer.observe(elm);
// }



// document.querySelectorAll(".select").forEach((el)=> {
//   el.addEventListener("click", function (e){
//     if (e.target && e.target.matches(".option")) {
//       this.querySelector(".shown").innerHTML = e.target.innerHTML;
//     }
//     this.classList.toggle("collapsed");
//   });
// }); 




const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
      navBtnImg.src = "./image/NAVCLOSE.svg";
    } else {
        navBtnImg.src = "./image/NAV.svg";
    }
}

AOS.init();