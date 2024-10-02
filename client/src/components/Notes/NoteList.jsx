
import { API_URL } from "../../constants";

export function NoteList( { note, reload, setCurrentNote } ) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const notes_api_url = `${API_URL}/notes`
  const subDescription = note.description.length > 0 && note.description.substring(0, 200) + '...'
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
    <div className="rounded-lg cursor-pointer relative border w-full p-6 transition-all" onClick={openNote}>
      <div className="flex w-full justify-between mb-2">
        <h1 className="text-xl font-bold">{note.title}</h1>
        <span className="text-gray-600 font-semibold text-xs">{formatDate(note.created_at)}</span>
        {/* <i onClick={destroyNote} className="font-bold cursor-pointer hover:text-green-700 transition-all right-5">X</i> */}
      </div>  
      <p className="text-sm text-gray-400 ">{subDescription}</p>
    </div>
  )
}

