const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sliderLength = slideRight.querySelectorAll('div').length;

let activeSlide = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlide++;
    if (activeSlide > sliderLength - 1) {
      activeSlide = 0;
    }
  } else if (direction === 'down') {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = sliderLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
};
