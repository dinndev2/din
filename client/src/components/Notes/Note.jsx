import { useEffect, useState } from "react"
import { API_URL } from "../../constants";

export default function Note({note_id}) {
  const notes_api_url = `${API_URL}/notes`
  const [activeNote, setActiveNote] = useState()
  useEffect(() => {
    async function openNote() {
      if(note_id) {
        try {
          const response = await fetch(`${notes_api_url}/${note_id}`, {
            method: "GET",
            'Content-Type': 'application/json'
          })
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          } else{
            const note_json = await response.json()
            setActiveNote(note_json)
          }
        } catch(error) {
          console.error(error.message);
        }
      }
    }
    openNote()
  }, [note_id])
  return(
    <div className="w-1/2 flex items-center justify-center">
      {activeNote ? 
        <div> 
          <h1>{activeNote.title}</h1>
          <h2>{activeNote.description}</h2>
        </div> : "This is a test only"}
    </div>
  )
}