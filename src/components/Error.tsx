type ErrorMessageProps = {
  handleRetry?: () => void
}

export function ErrorMessage (props: ErrorMessageProps){
  const { handleRetry } = props
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-red-600 my-4 text-center">
        💀 Ooops!!, something went wrong 💀
      </p>
      <button onClick={handleRetry} className="text-slate-500 border border-gray-300 rounded-lg py-1 px-4">try again</button>
    </div>
  )
}