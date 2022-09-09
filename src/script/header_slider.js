
const slider = document.querySelector(".header-slider")
const header = document.querySelector('.header')
slider.addEventListener("click", (e) => {
    const current = e.target
    if (current.dataset.number) {
        const activeEl = document.querySelector('.active')
        if (current !== activeEl) {
            activeEl.classList.remove('active');
            current.classList.add('active');

            header.style.backgroundImage=`url(dist/img/banner${current.dataset.number}.png)`
        }


    }
})