// * Selecionar as tags

const inputText = document.getElementById('task');
const tasKList = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

// * Conectar o btnADD a uma função VIA JS

btnAdd.addEventListener('click', function(){
    addTask();
})

// * Função - conectada ao botão
function addTask(){
// ^ valeu em um input = Valor digitado ou valor dentro da caixa de texto
    if(inputText.value == ''){
        alert("você precisa adiconar a descrição da terefa");
    }

    else{
        // ? ELSE = A PESSOA DIGITOU O NOME DA TERAFA
        // * CRIANDO UMA TAG E SALVANDO EM UMA VARIÁVEL
        // * createElement() cria uma tag
        // * um novo LI = uma nova tarefa
        let li = document.createElement("li");
        // * o conteúdo do li recebe o que a pessoa digitou
        li.innerHTML = inputText.value;
        // * appendChild = adicionar uma tag dentro de outra 
        // * no caso o novo <li> é colocado dentro do <ul> taskList
        tasKList.appendChild(li);
    }

    // * Limpando caixa de texto para a próxima tarefa
    inputText.value = '';

}