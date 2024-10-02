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
  const [currentNote, setCurrentNote] = useState()
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
    <div>
      <h1 className='text-3xl mb-5 font-bold text-yellow-500'>Notes.</h1>
      <div className='flex w-full gap-10 relative'>
        <div className='flex flex-col w-1/2 note-pad justify-between gap-5'>
          <NoteInput reload={setReload} setCurrentNote={setCurrentNote} />
          <div className='flex flex-col gap-2 transition-all w-full items-center note-container overflow-scroll '>
            { loading ? <Loading/> : notes.map(note => {
              return <NoteList key={note.id} note={note} reload={setReload} setCurrentNote={setCurrentNote}  />
              }) 
            }
          </div>
        </div>
        <Note note_id={currentNote}/>
      </div>
    </div>
      
  )
}


// route
export const noteRoutes = {
  path: "notes",
  element: <Notes/>
}


export default Notes