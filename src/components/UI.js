import State from './State';

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

export default UI;
