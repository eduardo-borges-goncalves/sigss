let consulta = document.getElementById('consulta')
let exame = document.getElementById('exame')

let especialidade = document.getElementById('especialidadeDiv')
let tipoDeExame = document.getElementById('tipoDeExameDiv')

let validate = false
let validateExam = false

let menu = document.getElementById('menu')

let navList = document.getElementById('nav-list')
let menuOn = false

let subList = document.getElementById('sub-list')
let subListOn = false
let menuLevelOne = document.getElementById('menu-level-one')

let modal = document.getElementById('modal-container-ID')

if (localStorage.getItem('token') == null) {
  window.alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'
} else {
  welcomeUser.innerHTML = `Bem vindo ${logUser.name.toUpperCase()}!`
}

function sair () {
  localStorage.removeItem('token')
  localStorage.removeItem('logUser')
  window.location.href = 'index.html'
}

function mobileMenu(){
 
  if(menuOn == false) {
    navList.setAttribute('style', "transform: translateX(0)")
    menuOn = true;
  } 
  
  else if (menuOn == true) {
    navList.setAttribute('style', "transform: translateX(-150%")
    menuOn = false;
    menuLevelOne.setAttribute("style", "height: 12vh")
    subList.setAttribute('style', "transform: translateX(-150%)")
    subListOn = false;
  }
}

function levelOneMenu(){
 
  if(subListOn == false) {
    menuLevelOne.setAttribute("style", "height: 40vh")
    subList.setAttribute('style', "transform: translateX(0)")
    subListOn = true;
  } 
  
  else if (subListOn == true) {
    menuLevelOne.setAttribute("style", "height: 12vh")
    subList.setAttribute('style', "transform: translateX(-150%)")
    subListOn = false;
  }
}

// authorize js

function teste() {
    console.log(consulta)
}

function especialidadeOn() {
    if (validate == false) {
        especialidade.setAttribute("style","transform: translateX(0)")
        console.log("Oi")
        validate = true
    } else if (validate == true) {
        especialidade.setAttribute("style","transform: translateX(-100)")
        console.log('é sobre isso')
        validate = false
    }
}

function tipoDeExameOn() {
    if (validateExam == false) {
        tipoDeExame.setAttribute("style","transform: translateX(0)")
        console.log("Oi")
        validateExam = true
    } else if (validateExam == true) {
        tipoDeExame.setAttribute("style","transform: translateX(-100)")
        console.log('é sobre isso')
        validateExam = false
    }
}


function buscar() {
    document.getElementById('hidden').style.display = 'block';
}

function showTheDiv(){
  modal.classList.add('showMe')
}

function closeModal() {
  modal.classList.remove('showMe')
}
