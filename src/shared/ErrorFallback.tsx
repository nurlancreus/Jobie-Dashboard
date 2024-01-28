type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary?: () => void;
};

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-dark sm:text-3xl xl:text-5xl">
          Something went wrong 🤔
        </h1>
        <p className="mb-6 mt-2 text-xl text-dark sm:text-2xl xl:text-4xl">
          {error ? error.message : "Could not find the page"} 😔
        </p>
        <button
          type="button"
          className="rounded-2xl border-none bg-primary px-5 py-3 text-lg font-medium text-white outline-transparent xl:text-xl"
          onClick={resetErrorBoundary}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
