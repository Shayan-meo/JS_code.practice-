// var target = document.childNodes[1].childNodes[2].childNodes[1].parentNode.parentNode;

// // var target = document.childNodes[1].childNodes[2].childNodes[1];

// console.log(target)



// var parentEle = document.getElementsByTagName('div')[0].childNodes[1]


// console.log(parentEle.innerText)

// console.log(parentEle.nextElementSibling.nextElementSibling)



// hasAttribute
// getAttribute
// setAttribute

// var para = doc   ument.getElementsByTagName('p')[1];


// console.log(para.hasAttribute('id'))
// console.log(para.getAttribute('id'))
// console.log(para.setAttribute('class', 'para'))
// console.log(para.getAttribute('class'))

// console.log(para.attributes)


// var container = document.getElementById('container');

// var newPara = document.createElement('p');

// newPara.innerText = 'This is a new para added from JS !';

// container.appendChild(newPara);

// console.log(newPara.innerText)











// // Pehle paragraph element ko pakadte hain (index [1] matlab doosra 'p')
// var para = document.getElementsByTagName('p')[1];

// // --- 1. hasAttribute ---
// // Check karega ki 'id' hai ya nahi? (Result: true)
// console.log("Kya ID hai? ", para.hasAttribute('id')); 

// // --- 2. getAttribute ---
// // ID ka naam nikaal kar layega. (Result: "target-para")
// console.log("ID ka naam: ", para.getAttribute('id'));

// // --- 3. setAttribute ---
// // Ek naya attribute 'class' jor dega.
// para.setAttribute('class', 'highlight-box'); 
// console.log("Nayi Class lag gayi!");

// // --- 4. .attributes (Sabse important) ---
// // Ye aapko ek list dega un sabhi cheezon ki jo is tag ke andar likhi hain.
// var allAttributes = para.attributes;

// console.log("--- Saare Attributes ki List ---");
// for (var i = 0; i < allAttributes.length; i++) {
//     // allAttributes[i].name = Attribute ka naam (e.g., id, title, class)
//     // allAttributes[i].value = Uske andar ki value (e.g., target-para)
//     console.log(allAttributes[i].name + " : " + allAttributes[i].value);
// }