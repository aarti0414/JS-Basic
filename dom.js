

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);


//parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'pink';

//firstchild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hey';

//lastchild
// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSiblinig
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//createELement

// //create a div
// var newDiv = document.createElement('div');

// //ADD class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello 1';

// //add attribute
// newDiv.setAttribute('title', 'hello div');

// //create text node
// var newDivText = document.createTextNode('Hello World');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv, h1);

//create a item
var item = document.createElement('li');

//ADD class
item.className = 'list-group-item';


//create text node
var itemText = document.createTextNode('Hello World');

//add text to li
item.appendChild(itemText);

var listgroup = document.querySelector('ul .list-group');
var li = document.querySelector('ul li');

console.log(item);
console.log(li);
listgroup.insertBefore(item, li);