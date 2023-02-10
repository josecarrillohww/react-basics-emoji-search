import { TEmoji } from "../components/EmojiList"

export function filterEmoji(searchText: string, emojiList?: TEmoji[]) {
  return emojiList?.filter( emoji => {
    
    if (emoji.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
      return true
    }

    if (emoji.keywords.includes(searchText)) {
      return true
    }

    return false
  })
}