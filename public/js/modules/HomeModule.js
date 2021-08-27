import {buttons} from "../dom.js"
buttons.forEach((button) => {
 button.addEventListener('click', (e) => {
  window.location.href = `/?page=${e.target.dataset.number}`
 })
})

