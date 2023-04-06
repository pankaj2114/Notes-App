const addNotes = document.querySelector('#add-notes');
const deleteNotes = document.getElementById("delete-notes");
const saveNotes = document.getElementById("save-notes");
const textareaNotes = document.getElementById("text-area");
const container = document.querySelector('.container');
addNotes.addEventListener('click', 
    function(){
        addNote();
    }
)
const saveNote = () =>{
    const NotesData = document.querySelectorAll("#text-area");
    console.log(NotesData)
    const data = [];
    NotesData.forEach(
        (note) => data.push(note.value)
    )
    // console.log(data);
    
}

const addNote = () =>{
    const note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML = `
     <div class="box">
    <div class="icons">
        <i class="fa-solid fa-floppy-disk save-icon" id="save-notes"></i>
        <i class="fa-solid fa-trash delete-icon" id="delete-notes"></i>
    </div>
    <div class="textarea">
        <textarea name="" id="text-area" placeholder="Write your note here!"></textarea>
    </div>
</div>
`;

    note.querySelector('.delete-icon').addEventListener('click',
        function(){
            note.remove();
        } 
    )
    note.querySelector('.save-icon').addEventListener('click',
        function(){
            saveNote();
        }
    )
    container.appendChild(note);
}