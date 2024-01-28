import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-dark sm:text-3xl xl:text-5xl">
          Something went wrong 🤔
        </h1>
        <p className="mb-6 mt-2 text-xl text-dark sm:text-2xl xl:text-4xl">
          Could not find the page 😔
        </p>
        <button
          type="button"
          className="rounded-2xl border-none bg-primary px-5 py-3 text-xl font-medium text-white outline-transparent"
          onClick={() => {
            navigate("/app");
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
