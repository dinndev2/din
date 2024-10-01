import { API_URL } from '../../constants'
import { useRef } from 'react';

function NoteInput({reload}) {
  const formRef = useRef();

  async function createNote(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const notes_api_url = `${API_URL}/notes`
    const formData = new FormData(formRef.current);
    const note = {
      title: formData.get('title'),
      description: formData.get('description'),
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
    <form ref={formRef} onSubmit={createNote} >
      <input type="text" id="title" name="title" placeholder="Title" />
      <input type="text" id="description" name="description" placeholder="Description" />
      <button type="submit">Create</button>
    </form>
  );
}


export default NoteInput