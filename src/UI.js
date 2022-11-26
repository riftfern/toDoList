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
    const footer = document.createElement('footer');
    const contentDiv = document.createElement('div');

    bodyDiv.className = 'bodyDiv';
    contentDiv.className = 'contentDiv';

    btn1.id = 'home';
    btn2.id = 'notes';
    btn3.id = 'jokes';
    btn4.id = 'shows';
    btn5.id = 'new';

    h1.textContent = 'Stand Up Comedy Notebook';
    btn1.textContent = 'Home';
    btn2.textContent = 'Notes';
    btn3.textContent = 'Jokes';
    btn4.textContent = 'Shows';
    btn5.textContent = 'New';
    footer.textContent = 'THANK YOU ODIN PROJECT';

    header.appendChild(h1);
    nav.appendChild(btn1);
    nav.appendChild(btn2);
    nav.appendChild(btn3);
    nav.appendChild(btn4);
    nav.appendChild(btn5);

    contentDiv.appendChild(nav);
    contentDiv.appendChild(section);

    bodyDiv.appendChild(header);
    bodyDiv.appendChild(contentDiv);
    bodyDiv.appendChild(footer);

    return bodyDiv;
}
//form divs and content 
function formModal(){
   
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
   jokeSubmit.setAttribute('type', 'submit');
   jokeSubmit.setAttribute('value', 'Submit');

   jokeForm.appendChild(SU);
   jokeForm.appendChild(PL);
   jokeForm.appendChild(jokeSubmit);

   jokeFormDiv.appendChild(jokeForm); 

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
   noteSubmit.setAttribute('type', 'submit');
   noteSubmit.setAttribute('value', 'Submit');
   
   noteForm.appendChild(title);
   noteForm.appendChild(desc);
   noteForm.appendChild(noteSubmit);

   noteFormDiv.appendChild(noteForm);

   //form modal
   const formModal =  document.createElement('div');
   formModal.id = 'formModal';

   const formModalContentDiv = document.createElement('div');
   formModalContentDiv.className = 'formModalContentDiv';

   const closeSpan = document.createElement('span');
   closeSpan.className = 'close';
   closeSpan.innerText = 'X';
   
   const formModalParagraph = document.createElement('p');
   formModalParagraph.className = 'formModalParagraph';
   formModalParagraph.innerText = 'Choose your note type';

   formModalContentDiv.appendChild(formModalParagraph);
   formModalContentDiv.appendChild(jokeFormDiv);
   formModalContentDiv.appendChild(noteFormDiv);
   formModalContentDiv.appendChild(closeSpan);

   formModal.appendChild(formModalContentDiv);
   
   return formModal;
}   

function homeTabUI(){
    const section = document.querySelector('section');
    const homeTabDiv = document.createElement('div');
    homeTabDiv.className = 'homeTabDiv';

    const jokeDiv = document.createElement('div');
    jokeDiv.id = 'jokeDiv';
    const noteDiv = document.createElement('div');
    noteDiv.id = 'noteDiv';
    
    homeTabDiv.appendChild(jokeDiv);
    homeTabDiv.appendChild(noteDiv);

    section.appendChild(homeTabDiv);
    
    return section;
}

function noteTabUI(){

}

function jokeTabUI(){
    UI.displayJokes();
}

export {formModal, content, homeTabUI};