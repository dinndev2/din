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
    <div className="w-8/12 flex items-start justify-center">
      {activeNote ? 
        <div className="w-full"> 
          <div>
            <h1 className="bg-yellow-500 text-2xl inline-block py-1 px-2 mb-2 font-bold text-white">{activeNote.title}</h1>
          </div>
          <h2 className="text-lg text-gray-600">{activeNote.description}</h2>
        </div> : "This is a test only"}
    </div>
  )
}