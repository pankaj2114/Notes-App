const addNotes = document.querySelector('#add-notes');
const deleteNotes = document.getElementById("delete-notes");
const saveNotes = document.getElementById("save-notes");
const textareaNotes = document.getElementById("text-area");
const container = document.querySelector('.container');
addNotes.addEventListener('click',
    function () {
        addNote();
    }
)
const saveNote = () => {
    const NotesData = document.querySelectorAll("#text-area");
    const data = [];
    NotesData.forEach(
        (note) => data.push(note.value)
    )
    // console.log(data);
    if (data.length === 0) {
        localStorage.removeItem('note')
    } else {
        localStorage.setItem('note', JSON.stringify(data))
    }
    localStorage.setItem('note', JSON.stringify(data))

}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML = `
     <div class="box">
    <div class="icons">
        <i class="fa-solid fa-floppy-disk save-icon" id="save-notes"></i>
        <i class="fa-solid fa-trash delete-icon" id="delete-notes"></i>
    </div>
    <div class="textarea">
        <textarea name="" id="text-area" placeholder="Write your note here!">${text}</textarea>
    </div>
</div>
`;

    note.querySelector('.delete-icon').addEventListener('click',
        function () {
            note.remove();
            saveNote();
        }
    )
    note.querySelector('.save-icon').addEventListener('click',
        function () {
            saveNote();
        }
    )
    note.querySelector('textarea').addEventListener(
        'focusout',
        function(){
            saveNote();
        }
    )
    container.appendChild(note);
    saveNote();
}
(
    function () {
        const lsnote = JSON.parse(localStorage.getItem('note'));

        if (lsnote === null) {           
                    addNote();              
        } else {
            lsnote.forEach(
                (lsnote) => {
                    addNote(lsnote);
                }
            )
        }
        // if (lsnote.length === 0) {
        //     localStorage.removeItem('note')
        // } else {
        //     addNote();
        // }
    }
)()