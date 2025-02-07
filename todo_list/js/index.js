function Concluir(id) {
    var item = document.getElementById('item'+id).classList;

    item.toggle('checked');

}

function OpenForm() {
    var formulario = document.getElementById('formulario').classList;
    formulario.toggle('close');
}

function NewItem() {
    var inputItem = document.getElementById('nomeItem');
    var newItem = inputItem.value;
    var itemList = document.getElementById('itemList');

    itemList.innerHTML += `<div id="item${newItem}" class="item">
                    <input type="checkbox" name="item" id="${newItem}" onclick="Concluir('${newItem}')">
                    <label for="item">${newItem}</label>
                </div>`

    inputItem.value = '';

    return OpenForm();
    
}