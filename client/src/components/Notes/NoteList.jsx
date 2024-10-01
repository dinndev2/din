
import { API_URL } from "../../constants";

export function NoteList( { note, reload, setCurrentNote } ) {
  const notes_api_url = `${API_URL}/notes`
   
  function openNote() {
    setCurrentNote(note.id)
  }
  async function destroyNote() {
    try {
      const response = await fetch(`${notes_api_url}/${note.id}`, {
        method: "DELETE",
        'Content-Type': 'application/json'
      })
      if (response.ok) {
        reload(true)
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch(error) {
      console.error(error.message);
    }
  }
  return (
    <div className="rounded-lg border-2 note-border w-96 p-10 transition-all" onClick={openNote}>
      <p onClick={destroyNote} className="text-sm">{note.description}</p>
    </div>
  )
}

