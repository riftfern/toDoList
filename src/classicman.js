class Joke{
    constructor(setup, punchline){
        this.setup = setup;
        this.punchline = punchline;
    }
}
class Note{
    constructor(title, description){
        this.title = title; 
        this.description = description;
    }
}
class State{
    static getJokes(){
        let jokes = [];
        return jokes;
    }
    
    static addJoke(joke){
        const jokes = State.getJokes();
        jokes.push(joke);
    }
    static getNotes(){
        let notes = [];
        return notes;
    }
    static addNote(note){
        const notes = State.getNotes();
        notes.push(note);
    }
}
class Formal{
    static addJoke(){
        let modal = document.getElementById('formModal')
        document.querySelector('#jokeForm').addEventListener('submit', (e) => {
            e.preventDefault();
    
            //form values
            const setup = document.querySelector('#SU').value;
            const punchline = document.querySelector('#PL').value;
    
            //new joke
            const joke = new Joke(setup, punchline);
    
            //add to UI
            UI.addJokeToList(joke);
    
            //add to State
            State.addJoke(joke);
        
            Formal.clearFields();

            modal.style.display = 'none';
        });
    }
    static addNote(){
        let modal = document.getElementById('formModal')
        document.querySelector('#noteForm').addEventListener('submit', (e) => {
            e.preventDefault();
    
            //form values
            const title = document.querySelector('#title').value;
            const desc = document.querySelector('#desc').value;
    
            //new note  
            const note = new Note(title, desc);
    
            //add to UI
            UI.addNoteToList(note);
    
            //add to State
            State.addNote(note);
        
            Formal.clearFields();

            modal.style.display = 'none';
        });
    }
    static clearFields(){
        document.querySelector('#SU').value = '';
        document.querySelector('#PL').value = '';
    }    
}
class UI{
    static displayJokes(){
        const jokes = State.getJokes();
        jokes.forEach((joke) => UI.addJokeToList(joke));
    }
    static displayNotes(){
        const jokes = State.getNotes();
        notes.forEach((note) => UI.addNoteToList(note));
    }
    static addJokeToList(joke){
        const jokeDiv  = document.getElementById('jokeDiv');
        const list = document.createElement('div');
        list.id = 'jokeList';

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${joke.setup}</td>
        <td>${joke.punchline}</td>
        <td><p>X</p></td>`;

        list.appendChild(row);
        jokeDiv.appendChild(list);
    }
    static addNoteToList(note){
        const noteDiv  = document.getElementById('noteDiv');
        const list = document.createElement('div');
        list.id = 'noteList';

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${note.title}</td>
        <td>${note.description}</td>
        <td><p>X</p></td>`;

        list.appendChild(row);
        noteDiv.appendChild(list);
    }
}

export {Joke, State, Formal, UI}