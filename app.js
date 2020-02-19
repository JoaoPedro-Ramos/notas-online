var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#put input')
var buttonElement = document.querySelector('#put button')

var notas = JSON.parse(localStorage.getItem('list_item'))

function renderNotas(){
    listElement.innerHTML = ''
    for(nota of notas){
        var liElement = document.createElement('li')
        var TextElement = document.createTextNode(nota)

        var linkElement = document.createElement('a')
        var LinkText = document.createTextNode(' Excluir')
        linkElement.appendChild(LinkText)
        linkElement.setAttribute('href', '#')

        var pos = notas.indexOf(nota)
        linkElement.setAttribute('onclick', 'deleteNota(' +pos+ ')')

        liElement.appendChild(TextElement)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
}
}

renderNotas()

function addNotas(){
    var notaText = inputElement.value

    notas.push(notaText)
    inputElement.value = ''
    renderNotas()
    saveNotas()
}

buttonElement.onclick = addNotas

function deleteNota(pos){
    notas.splice(pos, 1)
    renderNotas()
    saveNotas()
}

function saveNotas(){
    localStorage.setItem('list_item', JSON.stringify(notas))
}