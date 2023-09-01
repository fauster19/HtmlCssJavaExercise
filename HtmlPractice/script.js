function addListItem() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('search').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById('todoList').appendChild(li);
    }
    document.getElementById('search').value = "";
}
