let name = document.getElementById('user')
let password = document.getElementById('password')

let usuário = {
  nome: "eduardo",
  senha: '12345678'
}

let teste = String(name.value)

function login(){
  
    if  (name.value == usuário.nome && password.value == usuário.senha){ 
    
      window.location.href = 'pag002.html'
      
    } else {

      window.alert("usuário incorreto")

    }
}

/**/

