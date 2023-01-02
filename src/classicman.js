class Joke {
  constructor(setup, punchline) {
    this.setup = setup;
    this.punchline = punchline;
  }
}
class Note {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}
class Show {
  constructor(showName, date) {
    this.showName = showName;
    this.date = date;
  }
}
class State {
  static getJokes() {
    const jokes = [];
    return jokes;
  }

  static addJoke(joke) {
    const jokes = State.getJokes();
    jokes.push(joke);
  }

  static removeJoke(setup) {
    const jokes = State.getJokes();
    jokes.forEach((joke, index) => {
      if (joke.setup === setup) {
        jokes.splice(index, 1);
      }
    });
    // localStorage.setItem('jokes', JSON.stringify(jokes));
  }

  static getNotes() {
    const notes = [];
    return notes;
  }

  static addNote(note) {
    const notes = State.getNotes();
    notes.push(note);
    // localStorage.setItem('notes', JSON.stringify(notes));
  }

  static removeNote() {

  }

  static getShows() {
    const shows = [];
    return shows;
  }

  static addShow(show) {
    const shows = State.getShows();
    shows.push(show);
    // localStorage.setItem('shows', JSON.stringify(shows));
  }
}
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
class UI {
  static displayJokes() {
    const jokes = State.getJokes();
    jokes.forEach((joke) => UI.addJokeToList(joke));
  }

  static displayNotes() {
    const notes = State.getNotes();
    notes.forEach((note) => UI.addNoteToList(note));
  }

  static displayShows() {
    const shows = State.getShows();
    shows.forEach((show) => UI.addShowToList(show));
  }

  static addJokeToList(joke) {
    const toDoDiv = document.getElementById('toDoDiv');

    const row = document.createElement('tr');
    row.id = 'jokeRow';

    row.innerHTML = `
        <td class="titleCell">Joke:</td>
        <td contentEditable>${joke.setup}</td>
        <td contentEditable>${joke.punchline}</td>
        <td class="deleteCell">
            <button id="delete"><i class="fa-regular fa-circle-xmark">Delete</i></button>
        </td>`;

    toDoDiv.appendChild(row);
  }

  static addNoteToList(note) {
    const toDoDiv = document.getElementById('toDoDiv');

    const row = document.createElement('tr');
    row.id = 'noteRow';

    row.innerHTML = `
        <td class="titleCell">Note:</td>
        <td contentEditable>${note.title}</td>
        <td contentEditable>${note.description}</td>
        <td class="deleteCell">
            <button id="delete"><i class="fa-regular fa-circle-xmark">Delete</i></button>
        </td>`;

    toDoDiv.appendChild(row);
  }

  static addShowToList(show) {
    const toDoDiv = document.getElementById('toDoDiv');

    const row = document.createElement('tr');
    row.id = 'showRow';

    row.innerHTML = `
        <td class="titleCell">Show:</td>
        <td contentEditable>${show.showName}</td>
        <td contentEditable>${show.date}</td>
        <td class="deleteCell">
            <button id="delete"><i class="fa-regular fa-circle-xmark">Delete</i></button>
        </td>`;

    toDoDiv.appendChild(row);
  }

  static deleteTodo(el) {
    if (el.id === 'delete') {
      el.parentElement.parentElement.remove();
    }
  }

  static deleteJoke() {
    const deleteBtn = document.getElementById('#delete');

    deleteBtn.onclick(UI.deleteTodo());

    document.querySelector('#toDoDiv').addEventListener('click', (e) => {
      // remove from ui
      UI.deleteTodo(e.target);
      // remove from state
      // State.removeTodo(e.target.parentElement.previousElementSibiling.textContent);
    });
  }

  static removeJokeRows() {
    const jokeRows = document.querySelectorAll('#jokeRow');
    jokeRows.forEach((row) => {
      row.remove();
    });
  }

  static removeNoteRows() {
    const noteRows = document.querySelectorAll('#noteRow');
    noteRows.forEach((row) => {
      row.remove();
    });
  }

  static showJokeModal() {
    const jokeModalFormDiv = document.getElementById('jokeModalFormDiv');
    jokeModalFormDiv.style.display = 'flex';
    return jokeModalFormDiv;
  }

  static showNoteModal() {
    const noteModalFormDiv = document.getElementById('noteModalFormDiv');
    noteModalFormDiv.style.display = 'flex';
    return noteModalFormDiv;
  }

  static showShowModal() {
    const showModalFormDiv = document.getElementById('showModalFormDiv');
    showModalFormDiv.style.display = 'flex';
    return showModalFormDiv;
  }
}

export {
  Joke, State, Formal, UI,
};
