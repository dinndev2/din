import filedownloadsvg from '../assets/file-download.svg'


export default function ToolBar() {
  function handleDownloadPDF() {
    window.open(`${API_URL}/download_cv`, '_blank')
  }
  return (
    <div className="w-full flex justify-end items-center" style={{height: "5vh"}}>
      <button className='hover:opacity-90 text-xs flex items-center gap-3 transition-all' onClick={handleDownloadPDF}>
        Download CV
        <img src={filedownloadsvg} className="w-5 h-5" />
      </button>
    </div>
  )  
}

