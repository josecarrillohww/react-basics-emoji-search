import { EmojiRow } from "./EmojiRow"

type emoji = {
  title: string,
  symbol: string,
  keywords: string
}

type EmojiListProps = {
  emojiList: emoji[],
  error: string,
  isLoading: boolean
}
export function EmojiList(props: EmojiListProps) {
  return (
    <div className="flex flex-col h-screen gap-4 my-4 overflow-scroll scroll-m-0 items-center">
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
      <EmojiRow title="smile" emojiSymbol="😀"/>
    </div>
  )
}