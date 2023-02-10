import { EmojiList } from "./components/EmojiList"
import { EmojiRow } from "./components/EmojiRow"
import { Header } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { LoadingWheel } from "./components/LoadingWheel"

function App() {

  return (
    <div className="flex justify-start items-center flex-col h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="px-1 min-w-md">
        <Header/>
        <SearchInput />
        <EmojiList />
      </div>
    </div>
  )
}

export default App


