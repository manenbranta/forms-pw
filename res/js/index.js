let filhos = Array.from(document.getElementsByName("temfilhos")).find(r => r.checked).value;
alert(filhos);

function cpf(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 3) value = value.slice(0, 3) + '.' + value.slice(3);
    if (value.length > 7) value = value.slice(0, 7) + '.' + value.slice(7);
    if (value.length > 11) value = value.slice(0, 11) + '-' + value.slice(11);

    input.value = value;
}

function telefone(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 2) value = `(${value.slice(0,2)}) ${value.slice(2)}`;
    if (value.length > 9) value = `${value.slice(0,9)}-${value.slice(9)}`;

    input.value = value;
}

function cep(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 6) value = `${value.slice(0,6)}-${value.slice(6)}`;

    input.value = value;
}