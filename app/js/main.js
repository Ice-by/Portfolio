$(function(){
    var tabs = document.querySelector('.slider__img-container');
document.querySelector('.slider__select-items').addEventListener('change', function() {
  tabs.querySelector('.slider__active-tab').classList.remove('slider__active-tab');
  tabs.querySelector(`#${this.value}`).classList.add('slider__active-tab');  
});

    
})