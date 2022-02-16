let burger = document.querySelector(".header__burger"),
    navigation = document.querySelector(".header__navigation"),
    noScroll = document.querySelector("body")

burger.addEventListener("click", functionBurger);
function functionBurger (){
    burger.classList.toggle("active");
    navigation.classList.toggle("active");
    noScroll.classList.toggle("no-scroll");
}

let act = document.getElementsByClassName("js-active");
    for (var i=0; i < act.length; i++){
        let iteam = act[i];
        iteam.onclick = function(){
            iteam.classList.toggle('active');
        }
    }
//анімація при скролі----------------------------------------------------
const animItems = document.getElementsByClassName('js-animation');
if(animItems.length > 0){
    window.addEventListener('scroll', animationOnscroll);
    function animationOnscroll(){
        for(let i=0; i<animItems.length; i++){
            let animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOfsset = offset(animItem).top;
            const animSmart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animSmart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = animItemHeight - window.innerHeight / animSmart;
            }

            if((scrollY > animItemOfsset - animItemPoint) && scrollY < (animItemOfsset + animItemHeight)) {
                animItem.classList.add('act_scroll');
            }else {
                if (!animItem.classList.contains('js-act-hide')){
                    animItem.classList.remove('act_scroll');
                }
                
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() =>{
        animationOnscroll();
    }, 300);
}
//-----------------------------------------------------------------------------------------
    var swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          loop:true,
          slidesPerView: 1,
    });
