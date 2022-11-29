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
    static remove 
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
        
            Formal.clearJokeFields();

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
        
            Formal.clearNoteFields();

            modal.style.display = 'none';
        });
    }
    static clearJokeFields(){
        document.querySelector('#SU').value = '';
        document.querySelector('#PL').value = '';
    }
    static clearNoteFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#desc').value = '';
    }
}
class UI{
    static displayJokes(){
        const jokes = State.getJokes();
        jokes.forEach((joke) => UI.addJokeToList(joke));
    }
    static displayNotes(){
        const notes = State.getNotes();
        notes.forEach((note) => UI.addNoteToList(note));
    }
    static addJokeToList(joke){
        const toDoDiv  = document.getElementById('toDoDiv');
    
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
    static addNoteToList(note){
        const toDoDiv  = document.getElementById('toDoDiv');
    
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
    static deleteTodo(el){
        if(el.id === 'delete'){
            el.parentElement.parentElement.remove();
        }
    }
    static deleteJoke(){
        let deleteBtn = document.getElementById('#delete');

        deleteBtn.onclick(UI.deleteTodo());
        
        document.querySelector('#toDoDiv').addEventListener('click', (e) => {
            //remove from ui
            UI.deleteTodo(e.target);
            //remove from state
            //State.removeTodo(e.target.parentElement.previousElementSibiling.textContent);
        })
    }
    static removeJokeRows(){
        let jokeRows = document.querySelectorAll('#jokeRow');
        jokeRows.forEach((row) => {
            row.remove();
        })
    }
    static removeNoteRows(){
        let noteRows = document.querySelectorAll('#note Row');
        noteRows.forEach((row) => {
            row.remove();
        })
    }
}

export {Joke, State, Formal, UI}