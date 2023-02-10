import { EmojiRow } from "./EmojiRow"
import { ErrorMessage } from "./Error"
import { LoadingWheel } from "./LoadingWheel"

export type TEmoji = {
  title: string,
  symbol: string,
  keywords: string
}

type EmojiListProps = {
  emojiList?: TEmoji[] | [],
  error: string | unknown,
  isLoading: boolean
  refetch: () => void
}

export function EmojiList(props: EmojiListProps) {
  const { emojiList, error, isLoading, refetch } = props

  if (isLoading) return <LoadingWheel />
  if (error) return <ErrorMessage handleRetry={refetch}/>
  if (!emojiList?.length) return <p>No results!!</p>
  
  return (
    <div className="flex flex-col h-screen gap-4 my-4 overflow-scroll scroll-m-0 items-center">
      {
        emojiList.map( (emoji, index) => (
          <EmojiRow key={index} title={emoji.title} emojiSymbol={emoji.symbol}/>
        ))
      }
      
    </div>
  )
}