$(function(){

  // Tabs for aside
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

  // Tabs for name and contacts
  let activeFoto = tabs.querySelector('.img')
  let activeName = tabs.querySelector('.name')
  let activeContacts = tabs.querySelector('.contacts')

  
  function switcher(arr, i) {
    arr.forEach( item => {
      item.forEach( i => {i.classList.remove('tab-active')})
      item[i].classList.add('tab-active')
    })
  }

  activeFoto.addEventListener('click', () => {
    switcher([active, items, items2], 3)
  })
  activeName.addEventListener('click', () => {
    switcher([active, items, items2], 3)
  })
  activeContacts.addEventListener('click', () => {
    switcher([active, items, items2], 3)
  })


  // Tabs for projects-description
  let activeProject = tabs.querySelectorAll('.projects__gallery-item')
  let activeDescr = tabs.querySelectorAll('.projects-description__list-link')

  function changeProj(arr, i) {
    arr.forEach( item => {     
      item.forEach( i => {i.classList.remove('projects__gallery-item--hover')}) 
      item[i].classList.add('projects__gallery-item--hover')
    })
  }

  for(let i = 0; i < activeDescr.length; i++) {
    activeDescr[i].addEventListener('mousemove', () => {
      changeProj([activeDescr, activeProject], i)      
    })    
  }  

})