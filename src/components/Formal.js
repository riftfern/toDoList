import Joke from './Joke';
import UI from './UI';
import State from './State';
import Show from './Show';
import Note from './Note';

class Formal {
  static addJoke() {
    const modal = document.getElementById('jokeModalFormDiv');
    document.querySelector('#jokeForm').addEventListener('submit', (e) => {
      e.preventDefault();

      // form values
      const setup = document.querySelector('#SU').value;
      const punchline = document.querySelector('#PL').value;

      // new joke
      const joke = new Joke(setup, punchline);

      // add to UI
      UI.addJokeToList(joke);

      // add to State
      State.addJoke(joke);

      Formal.clearJokeFields();

      modal.style.display = 'none';
    });
  }

  static addNote() {
    const modal = document.getElementById('noteModalFormDiv');
    document.querySelector('#noteForm').addEventListener('submit', (e) => {
      e.preventDefault();

      // form values
      const title = document.querySelector('#title').value;
      const desc = document.querySelector('#desc').value;

      // new note
      const note = new Note(title, desc);

      // add to UI
      UI.addNoteToList(note);

      // add to State
      State.addNote(note);

      Formal.clearNoteFields();

      modal.style.display = 'none';
    });
  }

  static addShow() {
    const modal = document.getElementById('showModalFormDiv');
    document.querySelector('#showForm').addEventListener('submit', (e) => {
      e.preventDefault();

      // show values
      const showName = document.querySelector('#showName').value;
      const date = document.querySelector('#showDate').value;

      // new show
      const show = new Show(showName, date);

      // add to UI
      UI.addShowToList(show);

      // add to State
      State.addShow(show);

      Formal.clearShowFields();

      modal.style.display = 'none';
    });
  }

  static clearJokeFields() {
    document.querySelector('#SU').value = '';
    document.querySelector('#PL').value = '';
  }

  static clearNoteFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#desc').value = '';
  }

  static clearShowFields() {
    document.querySelector('#showName').value = '';
    document.querySelector('#showDate').value = '';
  }
}

export default Formal;
