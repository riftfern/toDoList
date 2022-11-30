import './styles.css';
import {content, homeTabUI, dropDown, jokeModalFormDiv, noteModalFormDiv, showModalFormDiv} from './UI.js';
import {Joke, State, Formal, UI} from './classicman.js';

function pageLoad(element){
    document.body.appendChild(element);
    return document.body;
}



(function init(){
    pageLoad(content());
    //pageLoad(formModal());
    pageLoad(jokeModalFormDiv())
    pageLoad(noteModalFormDiv());
    pageLoad(showModalFormDiv());
    Formal.addJoke();
    Formal.addNote();
    Formal.addShow();
    homeTabUI();
})();



let newBtn = document.getElementById('new');

let span = document.getElementsByClassName("close")[0];

let modals = ['jokeForm', 'noteForm', 'showForm'];
let btnNames = ['jokes', 'notes', 'shows'];
btnNames.forEach((btnName) => {
    let btn = document.getElementById(btnName);
    btn.addEventListener('click' , () => {
        if(btn.id == 'jokes'){
            UI.showJokeModal();
        }else if(btn.id == 'notes'){
            UI.showNoteModal();
        }else if(btn.id == 'shows'){
            UI.showShowModal();
        }
    });
});

newBtn.onclick = function(){
    dropDown();
}


//span.onclick = function(){
//    modal.style.display = 'none';/
//}/
//window.onclick = function(event){
//    if(event.target == modal){
//        modal.style.display = 'none';
//    }
//}

//let btnNames = ['home', 'jokes', 'notes'];
//btnNames.forEach(btnName => {
//    let btn = document.getElementById(btnName);
//    btn.addEventListener('click', () => {
//        if(btn.id == 'home'){
//            UI.displayJokes();
//            UI.displayNotes();
//        }else if(btn.id == 'jokes'){
//            UI.removeNoteRows();
//        }else if(btn.id == 'notes'){
//            UI.removeJokeRows();
//        }
//    })
//})




document.querySelector('#toDoDiv').addEventListener('click', (e) => {
    UI.deleteTodo(e.target);
});
