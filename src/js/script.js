AOS.init({
  once : true
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwpwyHYZzZGA11j1uk7cuf8T2tgPRAruIK-kAhWXKKzU4tWM1aO2LvtEeMSlgK337Ae/exec'
const form = document.forms['submit-to-google-sheet']
let btn_loading = document.getElementById('btn-loading')
let btn_submit = document.getElementById('btn-submit')
btn_loading.style.display = "none"
form.addEventListener('submit', e => {
  e.preventDefault()
  btn_submit.style.display = "none"
  btn_loading.style.display = "block"
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
      btn_submit.style.display = "block"
      btn_loading.style.display = "none"
      Swal.fire({
        title: 'Success',
        text: 'Your message has been sended',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })
    .catch(error => {
      btn_submit.style.display = "block"
      btn_loading.style.display = "none"
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while sending the message',
        icon: 'error',
        confirmButtonText: 'Close'
      })
  })
})

var typeText = document.querySelector(".typeText")
var textToBeTyped = "a software engineer"
var textToBeTypedArr = ["A WEB DEVELOPER", "A GAMER", "GALDIUS"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()