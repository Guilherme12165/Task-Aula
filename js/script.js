// * Selecionar as tags

const inputText = document.getElementById('task');
const tasKList = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

// * Conectar o btnADD a uma função VIA JS

btnAdd.addEventListener('click', function(){
    addTask();
})

inputText.addEventListener('keydown', function (e){ 
    if(e.code == "Enter")
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

        // * criando um span com x
        let span = document.createElement('span');
        // * \u007 representa um x
        span.innerHTML = '\u00d7';
        // ^ Adicionando o span DENTRO do <li> que acabou de ser criando
        li.appendChild(span);
    }

    // * Limpando caixa de texto para a próxima tarefa
    inputText.value = '';
    saveData();

}

// * 03/10/2024

tasKList.addEventListener('click', function(e){
    // ^ O 'e' função anônima representa a TAG que foi clicada pois dentro da TaskLIST TEM MUITAS COISAS para clicar
    // ^ (ul, span, li imagem) entao saber no que exatamente foi clicado

    // *  Chegando se o que foi clicado foi a tag <li>
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } 
    else if (e.target.tagName == 'SPAN'){
// * pegamos o que foi clicado e acessamos o seu  PAI 


// ^ e apagamos o seu pai (O <LI>)
// * e.target = tagSpan
        e.target.parentElement.remove();
        saveData();
    }
})
// * salvando informação no navegador, para não peder as terefas ao fechar o site.

function saveData(){
    localStorage.setItem("task_data", tasKList.innerHTML);
}

function loadData(){
    // * A o carregar o site de novo, o <ul> taskList vai iniciar vaio
    // * então escrevemos o seu innerHTML (seu conteúdo) com a informação salva no localStorage
    tasKList.innerHTML = localStorage.getItem('task_data');

    // ^ Chmando a função fora = chama ao carregar o site
    // *  então ao abrir o site ele carrega os <li> salvamos no localStorage
}
loadData();