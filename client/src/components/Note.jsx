
export function Note( { note } ) {
  return (
    <div className="rounded-lg border-2 note-border w-96 p-10">
      <p className="text-sm">{note.description}</p>
    </div>
  )
}

