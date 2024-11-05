export default function Job({name, description, link, code_link}) {
  return (
    <div className="max-w-3xl h-full flex gap-2 m-auto mb-4 ">
      <div className="rounded-md w-7/12 border rounded-xl p-6">
        <h1 className="text-4xl mb-4 font-semibold">
          {name}
        </h1>
        <span className="text-gray-500 text-md">{description}</span>

        <div className="flex gap-2 mt-4">
          <a className="text-xs" href={code_link}>Code Base</a>
          <a className="text-xs" href={link}>Demo</a>
        </div>
      </div>
      <div className="description w-5/12 h-full border rounded-xl p-6">test</div>
    </div>
  )
}