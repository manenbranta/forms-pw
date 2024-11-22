const data = JSON.parse(localStorage.getItem("data"));

console.log(data);

document.getElementById("nome").innerText = data.nome;
document.getElementById("cpf").innerText = data.cpf;
document.getElementById("email").innerText = data.email;
document.getElementById("telefone").innerText = data.telefone;
document.getElementById("genero").innerText = data.genero;
document.getElementById("nascimento").innerText = data.nascimento;
document.getElementById("escolaridade").innerText = data.escolaridade;
document.getElementById("uf").innerText = data.uf;
document.getElementById("cep").innerText = data.cep;
document.getElementById("civil").innerText = data.civil;
document.getElementById("temfilhos").innerText = data.temfilhos;
document.getElementById("num-filhos").innerText = data["num-filhos"];
document.getElementById("status").innerText = data.status;
document.getElementById("cobrarbanco").innerText = data.cobrarbanco;
document.getElementById("salario").innerText = data.salario;
document.getElementById("emprestimo").innerText = data.emprestimo;
document.getElementById("finalidade").innerText = data.finalidade;
