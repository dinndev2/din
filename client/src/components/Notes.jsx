import  { Note }  from './Note'
import { useState, useEffect } from 'react'
import  Loading  from './common/Loading'
import { API_URL } from '../constants'

function Notes() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true) 
  useEffect(() => {
    async function getNotes() {
      const notes_api_url = `${API_URL}/notes`
      try {
        const response = await fetch(notes_api_url)
        if (response.ok) {
          const raw_notes = await response.json();
          setNotes(raw_notes)
        } else {
          throw new Error(`Response status: ${response.status}`);
        }
      } catch(error) {
        console.error(error.message);
      } finally {
        setLoading(false)
      }
    }
    getNotes()
  },[]);
  return (
    <div className='flex flex-col gap-2'>
      { loading ? <Loading/> : notes.map(note => {
       return <Note key={note.id} note={note} />
      }) 
      }
    </div>
  )
}

export const noteRoutes = {
  path: "notes",
  element: <Notes/>
}


export default Notes