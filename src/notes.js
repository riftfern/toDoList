function newNote(title, description) {
  return {
    title,
    description,
    getInfo() {
      return `${this.title}, ${this.description}`;
    },
  };
}

function writeJoke(setup, punchline) {
  return {
    setup,
    punchline,
    tellJoke() {
      return `${this.setup}, ${this.punchline}`;
    },
  };
}

function addShow(name, date, startTime, showType) {
  return {
    name,
    date,
    startTime,
    showType,
    showInfo() {
      return `${this.name}, ${this.date}, ${this.startTime}, ${this.showType}`;
    },
  };
}

export { newNote, writeJoke, addShow };
