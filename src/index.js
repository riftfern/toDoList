import './styles.css';
import {formModal, content, homeTabUI} from './UI.js';
import {Joke, State, Formal} from './classicman.js';

function pageLoad(element){
    document.body.appendChild(element);
    return document.body;
}



(function init(){
    pageLoad(content());
    pageLoad(formModal());
    Formal.addJoke();
    Formal.addNote();
    homeTabUI();
})();



let btn = document.getElementById('new');

let modal = document.getElementById('formModal');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = 'block';
}

span.onclick = function(){
    modal.style.display = 'none';
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

