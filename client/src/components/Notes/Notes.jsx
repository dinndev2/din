import  { NoteList }  from './NoteList'
import { useState, useEffect } from 'react'
import  Loading  from '../common/Loading'
import { API_URL } from '../../constants'
import NoteInput from './NoteInput'
import Note from './Note'

function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [currentNote, setCurrentNote] = useState(null)
  useEffect(() => {
    async function getNotes() {
      const notes_api_url = `${API_URL}/notes`
      try {
        const response = await fetch(notes_api_url);
        if (response.ok) {
          const raw_notes = await response.json();
          setNotes(raw_notes)
        } else {
          throw new Error(`Response status: ${response.status}`);
        }
      } catch(error) {
        console.error(error.message);
      } finally {
        setReload(false)
        setLoading(false)
      }
    }
    getNotes()
  },[reload]);
  return (
    <div className='flex w-full'>
      <div className='flex flex-col gap-2 transition-all w-1/2 items-center'>
        { loading ? <Loading/> : notes.map(note => {
          return <NoteList key={note.id} note={note} reload={setReload} setCurrentNote={setCurrentNote}  />
          }) 
        }
        <NoteInput reload={setReload} />
      </div>
      <Note note_id={currentNote}/>
    </div>
  )
}


// route
export const noteRoutes = {
  path: "notes",
  element: <Notes/>
}


export default Notes