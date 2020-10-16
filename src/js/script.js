const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close'),
      block = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

block.addEventListener('click', (e) => {
    if (e.target == block) {
        menu.classList.remove('active');
    } 
});


// orange lines
const counters = document.querySelectorAll('.interest__number'),
      lines = document.querySelectorAll('.interest__band-orange');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// form
const form = document.querySelector('form'),
      inputs = document.querySelectorAll('input'),
      textarea = document.querySelector('textarea'),
      modalStatus = document.querySelector('.modalStatus'),
      modalStatusText = document.querySelector('.modalStatus__text'),
      modalStatusClose = document.querySelector('.modalStatus__close');

const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро я с вами свяжусь.',
    failure: 'Что-то пошло не так...'
};

const postData = async (url, data) => {
    modalStatusText.textContent = message.loading;
    
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
        item.checked = false;
    });
    textarea.value = '';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    modalStatus.classList.add('active');
    modalStatusClose.addEventListener('click', () => {
        modalStatus.classList.remove('active');
    });
    modalStatus.addEventListener('click', (e) => {
        if (e.target == modalStatus) {
            modalStatus.classList.remove('active');
        } 
    });

    const formData = new FormData(form);

    postData('mailer/smart.php', formData)
        .then(res => {
            console.log(res);
            modalStatusText.textContent = message.success;
        })
        .catch(() => modalStatusText.textContent = message.failure)
        .finally(() => {
            clearInputs();
            setTimeout(() => {
                modalStatusText.textContent = '';
                modalStatus.classList.remove('active');
            }, 5000);
        });
});


