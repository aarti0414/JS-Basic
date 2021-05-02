

// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// item[1].textContent = 'hey';
// item[1].style.fontWeight = 'bold';


// for (var i = 0; i < item.length; i++) {
//     item[i].style.backgroundColor = 'grey';
//     item[i].style.fontWeight = 'bold';
// }
// item[2].style.backgroundColor = 'green';

// var li = document.getElementsByTagName('li');
// console.log(li);

//Query Selector
var header = document.querySelector('#headerTitle');
header.style.borderBottom = 'solid 7px #ccc';

var input = document.querySelector('input');
input.value = 'Harshada';
var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

// 1st item red
var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//access last item
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

//access nth node  item
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = "pink";

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'false';

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.background = 'green';
}
// var second = document.querySelectorAll('li:nth-child');
// second[1].style.color = 'green';
