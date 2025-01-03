function format_cpf(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 3) value = value.slice(0, 3) + '.' + value.slice(3);
    if (value.length > 7) value = value.slice(0, 7) + '.' + value.slice(7);
    if (value.length > 11) value = value.slice(0, 11) + '-' + value.slice(11);

    input.value = value;
}

function format_telefone(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 2) value = `(${value.slice(0,2)}) ${value.slice(2)}`;
    if (value.length > 10) value = `${value.slice(0,10)}-${value.slice(10)}`;

    input.value = value;
}

function format_cep(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 6) value = `${value.slice(0,6)}-${value.slice(6)}`;

    input.value = value;
}