
let logUser = JSON.parse(localStorage.getItem('logUser') )
let welcomeUser = document.querySelector("#welcomeUser")

let menu = document.getElementById('menu')



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


class MobileNavBar  {
  constructor (mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = 'active';

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.navList.classList.toggle(this.activeClass);
  }
  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
      if (this.mobileMenu) {
          this.addClickEvent()
      }
      return this;
  }
}


const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavBar.init()
