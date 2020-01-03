var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos(){
    listElement.innerHTML = ''; //ta zerando o list pra não colocar coisas repetidas

    for (todo of todos) {
        var todoElement = document.createElement('li'); //aqui ele cria o li
        var todoText = document.createTextNode(todo);   //e aqui ele pega o texto do próprio ToDo

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#'); //pra poder ter o efeito clicavel
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' +  pos + ')');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText); //estamos adicionando o text no elemento
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement); //estamos adicionando o li no list
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1)//remove uma quantidade de itens do array baseado na posição passada
    //se passar 0 na pos, vai remover 1 item, visto q é um array, da certo
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem('list_todos', todos);
}