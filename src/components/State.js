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

export default State;
