

var item = document.getElementsByClassName('list-group-item');
console.log(item);
item[1].textContent = 'hey';
item[1].style.fontWeight = 'bold';
item[1].style.color = 'green';