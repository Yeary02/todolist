function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== '') {
        const list = document.getElementById('todo-list');
        const item = document.createElement('li');
        item.textContent = text;
        item.onclick = function() {
            list.removeChild(item);
        };
        list.appendChild(item);
        input.value = '';
    }
}
