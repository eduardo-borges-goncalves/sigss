let consulta = document.getElementById('consulta')
let exame = document.getElementById('exame')

let especialidade = document.getElementById('especialidadeDiv')
let tipoDeExame = document.getElementById('tipoDeExameDiv')

let validate = false
let validateExam = false

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


