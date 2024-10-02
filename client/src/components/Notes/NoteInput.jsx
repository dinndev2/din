import { API_URL } from '../../constants'
import { useRef } from 'react';

function NoteInput({reload, setCurrentNote}) {
  const formRef = useRef();

  async function createNote(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const notes_api_url = `${API_URL}/notes`
    const formData = new FormData(formRef.current);
    
    const description = formData.get('description')
    const descriptionTitle = formData.get('description').slice(0, 30)

    const note = {
      description: formData.get('description'),
      title: descriptionTitle
    };

      if(note.title || note.description) {
        try {
          const response = await fetch(notes_api_url, {
            method: "post",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
          })
          if (response.ok) {
            // reload note lists
            reload(true)
            const createdNote = await response.json()
            setCurrentNote(createdNote)
            // reset input
            formRef.current.reset()
          } else {
            throw new Error(`Response status: ${response.status}`);
          }
        } catch(error) {
          console.error(error.message);
        } 
      }
  }

  return (
    <div>
       <form ref={formRef} >
        <div className='flex flex-col'>
          <textarea className='rounded text-2xl note-input text-sm font-bold' style={{ outline: 'none', border: 'none' }} type="text" id="description" name="description" onBlur={createNote} placeholder="How's your day?"/>
        </div>
      </form>
    </div>
  );
}


export default NoteInput