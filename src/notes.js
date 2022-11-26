function newNote(title, description){
    return {
        title: title,
        description: description,
        getInfo(){
            return `${this.title}, ${this.description}`;
        },
    };
};

function writeJoke(setup, punchline){
    return {
        setup: setup,
        punchline: punchline,
        tellJoke(){
            return `${this.setup}, ${this.punchline}`;
        },
    };
};

function addShow(name, date, startTime, showType){
    return {
        name: name,
        date: date, 
        startTime: startTime, 
        showType: showType,
        showInfo(){
            return `${this.name}, ${this.date}, ${this.startTime}, ${this.showType}`;
        },
    };
};

export {newNote,writeJoke,addShow}