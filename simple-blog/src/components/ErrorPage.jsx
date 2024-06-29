import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <p>Oops, Something went wrong !!! </p>
    </div>
  );
}

export default ErrorPage;
