import './styles.css';
import {
  content, homeTabUI, dropDown, jokeModalFormDiv, noteModalFormDiv, showModalFormDiv,
} from './shell';
import Formal from './components/Formal';
import UI from './components/UI';

function pageLoad(element) {
  document.body.appendChild(element);
  return document.body;
}

(function init() {
  pageLoad(content());
  // pageLoad(formModal());
  pageLoad(jokeModalFormDiv());
  pageLoad(noteModalFormDiv());
  pageLoad(showModalFormDiv());
  Formal.addJoke();
  Formal.addNote();
  Formal.addShow();
  homeTabUI();
}());

const newBtn = document.getElementById('new');

// const span = document.getElementsByClassName('close')[0];

// const modals = ['jokeForm', 'noteForm', 'showForm'];
const btnNames = ['jokes', 'notes', 'shows'];
btnNames.forEach((btnName) => {
  const btn = document.getElementById(btnName);
  btn.addEventListener('click', () => {
    if (btn.id === 'jokes') {
      UI.showJokeModal();
    } else if (btn.id === 'notes') {
      UI.showNoteModal();
    } else if (btn.id === 'shows') {
      UI.showShowModal();
    }
  });
});

newBtn.onclick = () => {
  dropDown();
};

document.querySelector('#toDoDiv').addEventListener('click', (e) => {
  UI.deleteTodo(e.target);
});
