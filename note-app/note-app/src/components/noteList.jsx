import { useState } from "react";

function NoteList({ notes, editNote, deleteNote }) {

    const [openNote, setOpenNote] = useState(null);

    if (notes.length === 0) {
        return (
            <p className="no-notes">
                No notes found...
            </p>
        );
    }

    return (
        <div className="notes-container">

            {notes.map((note) => (

                <div
                    className={`note-card ${
                        openNote === note.id ? "expanded" : ""
                    }`}
                    key={note.id}
                    onClick={() => {
                        setOpenNote(
                            openNote === note.id
                                ? null
                                : note.id
                        );
                    }}
                >

                    <h2>{note.title}</h2>

                    <p
                        className={
                            openNote === note.id
                                ? "full-content"
                                : ""
                        }
                    >
                        {note.content}
                    </p>

                    <small>
                        {note.time}
                    </small>

                    <div className="note-buttons">

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                editNote(note);
                            }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteNote(note.id);
                            }}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default NoteList;