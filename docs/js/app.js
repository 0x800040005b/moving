document.addEventListener('DOMContentLoaded', () => {


    let footerFormCustomCheckbox = document.querySelector('#footer-order__custom-checkbox'),
        footerFormCheckbox = document.querySelector('#footer-order__checkbox-confidential');



    //checkbox in footerFormOrder


    if (footerFormCustomCheckbox) {
        footerFormCustomCheckbox.addEventListener("click", function () {

            checkCheckbox();

        });
    }

    function checkCheckbox() {
        if (footerFormCheckbox) {
            if (footerFormCheckbox.checked) {
                footerFormCheckbox.checked = false;
            }
            else{
                footerFormCheckbox.checked = true;
            }


        }
    }

    const slider = new Swiper(".swiper",{
        loop: true,
        navigation: {
            nextEl: '.button-slider-next',
            prevEl: '.button-slider-prev',
        },
        slidesPerView: "auto",

    });

});