const crossOffList = document.querySelectorAll('ol')
const strikeThrough = (event) => {
  const whatWasClicked = event.target
  whatWasClicked.style.textDecoration = 'line-through'
}
for (items of crossOffList) {
  items.addEventListener('click', strikeThrough)
}


const faded = document.querySelectorAll('ul')
const fadeAway = (event) => {
  const clicked = event.target
  clicked.style.opacity = '0'
} 
for(const items of faded) {
  items.addEventListener('click', fadeAway)
}


// const getDinos = document.querySelectorAll('#row')
// const collapse = (event) => {
//   const click = event.target
//   click.style.width = '0' 
// }

// for (const dinoPic of getDinos) {
// dinoPic.addEventListener('click', collapse)
// }

for(const dinoPic of document.querySelectorAll('#row')) {
  dinoPic.addEventListener('click', (event) => event.target.style.width = '0' 
  )}




for(const extinction of document.querySelectorAll('.feature')) {
  extinction.addEventListener('click', (event) => event.style.color  
  )
}