import { useState } from "react"
import { EmojiList, TEmoji } from "./components/EmojiList"
import { Header } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { useEmojis } from "./hooks/useEmojis"
import { filterEmoji } from "./utils/filterEmoji"

function App() {
  const { emojis, loading, error, refetch } = useEmojis()
  const [filteredEmojis, setFilteredEmoji] = useState<TEmoji[] | undefined>(() => filterEmoji('', emojis))
  const [isSearching, setIsSearching] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const searchText = e.target.value
    setFilteredEmoji(filterEmoji(searchText, emojis))
    setIsSearching(true)

  }

  return (
    <div className="flex justify-start items-center flex-col h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="px-1 min-w-md">
        <Header/>
        <SearchInput handleChange={handleChange}/>
        <EmojiList emojiList={isSearching ? filteredEmojis : emojis} error={error} isLoading={loading} refetch={refetch}/>
      </div>
    </div>
  )
}

export default App


