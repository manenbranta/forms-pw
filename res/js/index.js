
function cpf(input) {
    // Remover todos os valores que não são números
    let value = input.value.replace(/\D/g, '');

    // Formatação
    if (value.length > 3) value = value.slice(0, 3) + '.' + value.slice(3);
    if (value.length > 6) value = value.slice(0, 7) + '.' + value.slice(7);
    if (value.length > 9) value = value.slice(0, 11) + '-' + value.slice(11);

    // Limita o input a 14 caracteres (incluindo os pontos e traço)
    input.value = value.slice(0, 14);
}