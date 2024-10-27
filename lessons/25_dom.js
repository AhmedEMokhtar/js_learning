// dom
// vars
let body = document.body;
let div_container = document.createElement('div');
let div_title = document.createElement('h2');
let div_content = document.createElement('p');

// assignment block
div_title.innerHTML = 'Motivation Message';
div_content.innerHTML = 'This is the most motivation messsge , keep on whatever happen';

// append block
div_container.appendChild(div_title);
div_container.appendChild(div_content);

// style block
body.style.cssText = `background-color:cyan`;
div_title.style.cssText = 'text-decoration:underline';
div_container.style.cssText = `border : 1px solid grey;padding:4px;text-align:center;width:70%;margin:auto`;


//  create document
body.appendChild(div_container);