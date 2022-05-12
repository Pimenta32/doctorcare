window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

//Função para saber qual seção esta ativa
function activeMenuAtCurrentSection(section) {
  //targetLine é uma linha imaginaria do centro da tela
  const targetLine = scrollY + innerHeight / 2

  //quais dados vou precisar?
  //sectionTop é o topo da pagina
  const sectionTop = section.offsetTop
  //sectionHeight é o final da pagina
  const sectionHeight = section.offsetHeight
  //SectionTopReachOrPassedLine, o topo da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedLine = targetLine >= sectionTop

  //verificar se a seção passou da linha

  //console.log('O topo da seção chegou ou passou da linha?',
  //  sectionTopReachOrPassedLine)

  //verificar se a base esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight

  //O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about content`)
