$(function(){

  let tabs = document.querySelector('.container')
  let active = tabs.querySelectorAll('.menu__item')
  let items = tabs.querySelectorAll('.tab-item')
  let items2 = tabs.querySelectorAll('.tab-item2')

  function change(arr, i) {
    arr.forEach( item => {
      item.forEach( i => {i.classList.remove('tab-active')})
      item[i].classList.add('tab-active')
    })
  }

  for(let i = 0; i < active.length; i++) {
    active[i].addEventListener('click', () => {
      change([active, items, items2], i)
    })
  }


})