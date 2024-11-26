const data = JSON.parse(sessionStorage.getItem("data"));
const nascimento = new Date(data.nascimento);
const current = new Date();

let idade = current.getFullYear()-nascimento.getFullYear();

if (
    current.getMonth() < nascimento.getMonth() || 
    current.getMonth() == nascimento.getMonth() && current.getDay() < nascimento.getDay()
) {
    idade--;
}

console.log(data);

document.getElementById("nome").innerText = data.nome;
document.getElementById("cpf").innerText = data.cpf;
document.getElementById("email").innerText = data.email;
document.getElementById("telefone").innerText = data.telefone;
document.getElementById("genero").innerText = data.genero;
document.getElementById("nascimento").innerText = nascimento.toLocaleDateString("pt-BR");
document.getElementById("idade").innerText = `${idade} anos`;
document.getElementById("escolaridade").innerText = data.escolaridade;
document.getElementById("uf").innerText = data.uf;
document.getElementById("cep").innerText = data.cep;
document.getElementById("civil").innerText = data.civil;
document.getElementById("temfilhos").innerText = data.temfilhos;
if (data["num-filhos"] != "") {
    document.getElementById("num-filhos").innerText = data["num-filhos"];
} else {
    document.getElementById("numfilhos").style.display = "none";
}
document.getElementById("status").innerText = data.status;
document.getElementById("cobrarbanco").innerText = data.cobrarbanco;
document.getElementById("salario").innerText = data.salario;
document.getElementById("emprestimo").innerText = "R$ " + data.emprestimo;
document.getElementById("finalidade").innerText = data.finalidade;
