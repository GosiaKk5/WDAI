document.querySelector('form').onsubmit = () =>{
    const name = document.querySelector('#name-input').value; 
    const number = document.querySelector('#phone-input').value; 
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("mainContainer");

    const leftContainer = document.createElement('div');
    leftContainer.classList.add("leftContainer");
    const nameH1 = document.createElement('h1');
    const numberP = document.createElement('p');
    nameH1.textContent = name;
    numberP.textContent = number;
    leftContainer.appendChild(nameH1);
    leftContainer.appendChild(numberP);

    const rightContainer = document.createElement('div');
    rightContainer.classList.add("rightContainer")
    rightContainer.innerHTML ='<i class="fa-solid fa-trash-can"></i>';
    mainContainer.appendChild(leftContainer);
    mainContainer.appendChild(rightContainer);

    rightContainer.addEventListener('click', deleteContact);

    document.querySelector('#contact-container').appendChild(mainContainer);
    document.querySelector('#name-input').value = '';
    document.querySelector('#phone-input').value = '';

    return false;
}

function deleteContact(){
    const container = document.getElementById("contact-container");
    const index = Array.from(container.children).indexOf(this.parentNode);
    container.removeChild(container.children[index]);
}