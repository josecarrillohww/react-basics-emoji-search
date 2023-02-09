export function Header() {
  return(
    <header className="flex flex-row align-center my-4 w-full justify-evenly">
      <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500 mx-2">
          Emoji Search
        </h1>
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
    </header>
  )
}