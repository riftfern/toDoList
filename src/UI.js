import {UI} from './classicman.js';

// website shell
function content(){
    const bodyDiv = document.createElement('div');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const section = document.createElement('section');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const btn4 = document.createElement('button');
    const btn5 = document.createElement('button');
    const dropDownDiv = document.createElement('div');
    const dropDownContent = document.createElement('div');
    const footer = document.createElement('footer');
    const contentDiv = document.createElement('div');

    bodyDiv.className = 'bodyDiv';
    contentDiv.className = 'contentDiv';
    dropDownDiv.className = 'dropDownDiv';
    dropDownContent.id = 'dropDownContent';
    dropDownContent.className = 'dropDownContent'

    btn1.id = 'home';
    btn2.id = 'notes';
    btn3.id = 'jokes';
    btn4.id = 'shows';
    btn5.id = 'new';

    h1.innerHTML = `<i class="fa-solid fa-book">Stand Up Comedy NoteBook</i>`;
    btn1.innerHTML = `<i class="fa-solid fa-house">Home</i>`;
    btn2.innerHTML = `<i class="fa-regular fa-note-sticky">Note</i>`
    btn3.innerHTML = `<i class="fa-solid fa-face-laugh-squint">Joke</i>`
    btn4.innerHTML = `<i class="fa-regular fa-star">Show</i>`;
    btn5.innerHTML = `<i class="fa-solid fa-circle-plus">New</i>`;
    footer.innerHTML = `<i class="fa-solid fa-socks">THANK YOU ODIN PROJECT AND FONT AWESOME. Photo by <a href="https://unsplash.com/@brutus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Beat Schuler</a> on <a href="https://unsplash.com/s/photos/dark-aesthetic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </i>`

    header.appendChild(h1);
    dropDownContent.appendChild(btn2);
    dropDownContent.appendChild(btn3);
    dropDownContent.appendChild(btn4);
    dropDownDiv.appendChild(btn5);
    dropDownDiv.appendChild(dropDownContent);

    
    nav.appendChild(dropDownDiv);

    contentDiv.appendChild(nav);
    contentDiv.appendChild(section);

    bodyDiv.appendChild(header);
    bodyDiv.appendChild(contentDiv);
    bodyDiv.appendChild(footer);

    return bodyDiv;
}
//form divs and content 
function jokeModalFormDiv(){
    const jokeModalFormDiv = document.createElement('div');
    jokeModalFormDiv.id = 'jokeModalFormDiv';

    //joke form
   const jokeFormDiv = document.createElement('div');
   jokeFormDiv.className = 'jokeFormDiv';
   const jokeForm = document.createElement('form');
   jokeForm.id = 'jokeForm';
   jokeForm.innerText = 'New Joke';
   jokeForm.setAttribute('method', 'post');
    
   const SU = document.createElement('input');
   const suTitle = document.createElement('title');
    
   SU.id = 'SU';
   SU.setAttribute('type', 'text');
   SU.setAttribute('name', 'Setup');
   SU.setAttribute('placeholder', 'Setup');

   const PL = document.createElement('input');
   PL.id = 'PL';
   PL.setAttribute('type', 'text');
   PL.setAttribute('name', 'PunchLine');
   PL.setAttribute('placeholder', 'Punchline');

   const jokeSubmit = document.createElement('input');
   jokeSubmit.id = 'jokeSubmit';
   jokeSubmit.setAttribute('type', 'submit');
   jokeSubmit.setAttribute('value', 'Submit');

   jokeForm.appendChild(SU);
   jokeForm.appendChild(PL);
   jokeForm.appendChild(jokeSubmit);

   jokeFormDiv.appendChild(jokeForm); 

   jokeModalFormDiv.appendChild(jokeFormDiv);

   return jokeModalFormDiv;
}
function noteModalFormDiv(){
    const noteModalFormDiv = document.createElement('div');
    noteModalFormDiv.id = 'noteModalFormDiv'

    //note form

   const noteFormDiv = document.createElement('div');
   noteFormDiv.className = 'noteFormDiv';
   const noteForm = document.createElement('form');
   noteForm.innerText = 'New Note'
   noteForm.id = 'noteForm';
   noteForm.setAttribute('method', 'post');
    
   const title = document.createElement('input');
   title.id = 'title';
   title.setAttribute('type', 'text');
   title.setAttribute('name', 'Title');
   title.setAttribute('placeholder', 'Title');
   
   const desc = document.createElement('input');
   desc.id = 'desc';
   desc.setAttribute('type', 'text');
   desc.setAttribute('name', 'Description');
   desc.setAttribute('placeholder', 'Description');

   const noteSubmit = document.createElement('input');
   noteSubmit.id = 'noteSubmit';
   noteSubmit.setAttribute('type', 'submit');
   noteSubmit.setAttribute('value', 'Submit');
   
   noteForm.appendChild(title);
   noteForm.appendChild(desc);
   noteForm.appendChild(noteSubmit);

   noteFormDiv.appendChild(noteForm);
   noteModalFormDiv.appendChild(noteFormDiv); 

   return noteModalFormDiv;
}
function showModalFormDiv(){
    const showModalFormDiv = document.createElement('div');
    showModalFormDiv.id = 'showModalFormDiv';

    //show form 
   const showFormDiv = document.createElement('div');
   showFormDiv.className = 'showFormDiv';
   const showForm  = document.createElement('form');
   showForm.innerText = 'New Show';
   showForm.id = 'showForm';
   showForm.setAttribute('method', 'post');

   const date = document.createElement('input');
   date.id = 'showDate';
   date.setAttribute('type', 'date');
   date.setAttribute('name', 'startDate');
   date.setAttribute('placeholder', 'Date');

   const showName = document.createElement('input');
   showName.id = 'showName';
   showName.setAttribute('type', 'text');
   showName.setAttribute('name', 'showName');
   showName.setAttribute('placeholder', 'Show Name');

   const showSubmit = document.createElement('input');
   showSubmit.id = 'showSubmit';
   showSubmit.setAttribute('type', 'submit');
   showSubmit.setAttribute('value', 'Submit');

   showForm.appendChild(showName);
   showForm.appendChild(date);
   showForm.appendChild(showSubmit);

   showFormDiv.appendChild(showForm);
   showModalFormDiv.appendChild(showFormDiv);
   
   return showModalFormDiv;
}
function homeTabUI(){
    const section = document.querySelector('section');
    const homeTabDiv = document.createElement('div');
    homeTabDiv.className = 'homeTabDiv';

    const toDoDiv = document.createElement('div');
    toDoDiv.id = 'toDoDiv';
    
    homeTabDiv.appendChild(toDoDiv);

    section.appendChild(homeTabDiv);
    
    return section;
}
function dropDown(){
    document.getElementById('dropDownContent').classList.toggle('show');
}
function hideModal(modal){
    modal.style.display = 'none';
}

export {content, homeTabUI, dropDown, hideModal, jokeModalFormDiv, noteModalFormDiv, showModalFormDiv};