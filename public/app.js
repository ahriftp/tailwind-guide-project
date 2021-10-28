const accordionBoxes = document.querySelectorAll('.accordion-box')

accordionBoxes.forEach((accordionBox) => {
  accordionBox.addEventListener('click', () => {
    const height = accordionBox.nextElementSibling.scrollHeight
    accordionBox.classList.toggle('active-accordion')
    if (accordionBox.classList.contains('active-accordion')) {
      accordionBox.childNodes[3].style.transform = 'rotate(180deg)'
      accordionBox.nextElementSibling.style.maxHeight = `${height}px`
    } else {
      accordionBox.childNodes[3].style.transform = ''
      accordionBox.nextElementSibling.style.maxHeight = `0`
    }
  })
})
