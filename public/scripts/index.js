const buttonMenu = document.getElementById('button-menu-body')
const main = document.getElementById('main-body')
const contacts = document.getElementById('contacts')
const buttonProject = document.getElementById('button-my-projects')
const buttonAbout = document.getElementById('button-about-me')
const chat = document.getElementById('chat')
const nav = document.getElementById('nav-body')
const closeButton = document.getElementById('close-chat')
const itemMenuBody = document.querySelectorAll('.item-menu-body')
const modal = document.getElementById('modal')
const buttonColseModal  = document.getElementById('close-modal')


const socket = io('http://localhost:8080')
$('#form').submit(function (event) {
    event.preventDefault()
    const author = $('input[name = name]').val()
    const message = $('textarea[name = message]').val()
    const messageObject = {
        author: author,
        message: message
    }
    socket.emit('sendMessage', messageObject)
    $('#form').trigger('reset')
    modal.classList.toggle('modal-visibility')

})

socket.on('receivedMessage',function (message) {
    console.log(message)
})

modal.addEventListener('click', ()=> {
    modal.classList.remove('modal-visibility')

})

itemMenuBody.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element)
        scrollToMove(element.title)
    })
});

const scrollToMove = (params) => {
    const scrollToMoveItem = document.getElementById(params)
    const position = scrollToMoveItem.offsetTop
    window.scrollTo(0, position - 78);
    nav.classList.remove('nav-body-visibility')

}

function navVisiblity() {
    nav.classList.toggle('nav-body-visibility')
}

buttonMenu.addEventListener('click', navVisiblity)

buttonProject.addEventListener('click', () => {
    scrollToMove('projects-main')
})

buttonAbout.addEventListener('click', () => {
    scrollToMove('about-me')
})
main.addEventListener('click', () => {
    nav.classList.remove('nav-body-visibility')
})

