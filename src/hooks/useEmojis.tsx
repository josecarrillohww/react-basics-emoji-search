import { useEffect, useState } from "react"
import { TEmoji } from "../components/EmojiList"

export function useEmojis() {
  const [emojis, setEmojis] = useState<TEmoji[] | undefined>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchEmojis = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/emojis')
      const emojiData: TEmoji[] = await response.json()

      setEmojis(emojiData)
      setError(false)
    } catch(error) {
      setError(true)
    }
    setLoading(false)
  }

  function refetch() {
    fetchEmojis()
  }

  useEffect( () => {
    fetchEmojis()
  },[])

  return { emojis, loading, error, refetch }
}