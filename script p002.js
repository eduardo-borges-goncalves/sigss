
let logUser = JSON.parse(localStorage.getItem('logUser') )
let welcomeUser = document.querySelector("#welcomeUser")




if (localStorage.getItem('token') == null) {
  window.alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'index.html'
} else {

  welcomeUser.innerHTML = `Bem vindo ${logUser.name.toUpperCase()}!`
}

function sair () {
  localStorage.removeItem('token')
  localStorage.removeItem('logUser')
  window.location.href = 'index.html'
}