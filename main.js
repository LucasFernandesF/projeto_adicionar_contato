const form = document.getElementById('form-contact');
arrayNomes = [];
arrayContatos = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarContato();
    atualizaTabela();
})

function adicionarContato() {
    const nomeContato = document.getElementById('name-contact');
    const numeroContato = document.getElementById('number-contact');

    if (arrayNomes.includes(nomeContato.value) || arrayContatos.includes(parseInt(numeroContato.value))) {
        alert('Nome ou número de contato já foram adicionados na tabela. Confira novamente.')
    } else if (numeroContato.length = !11) {
        alert('O numero digitado é invalido, verifique se foi colocado o DD. EX: 31999999999');
    } else {
        arrayNomes.push(nomeContato.value)
        arrayContatos.push(parseInt(numeroContato.value));
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>'
        linhas += linha;

        nomeContato.value = '';
        numeroContato.value = '';
    }
}

function atualizaTabela() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
}