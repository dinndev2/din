import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="w-screen h-screen flex items-center justify-center flex-col gap-6">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/" className="text-red-500 font-bold border p-4 border-red-600">
        <i>{error.statusText || error.message}</i>
      </a>
    </div>
  );
}