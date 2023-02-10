import { useCopyToClipboard } from "react-use";

type EmojiRowProps = {
  title: string,
  emojiSymbol: string,
}

export function EmojiRow(props: EmojiRowProps) {
  const { title, emojiSymbol } = props
  const codePointHex = emojiSymbol.codePointAt(0)?.toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  const [state, copyToClipboard] = useCopyToClipboard()

  return (
    <div onClick={() => copyToClipboard(emojiSymbol)} className="group/hover flex justify-between w-80 align-middle my-2block p-4 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 transition-all">
      <div className="flex justify-center">
        <img className="h-10" alt={title} src={src}></img>
        <span className="self-center m-2">{title}</span>
      </div>
      <span className="self-center text-white group-hover/hover:text-slate-500">Click to copy emoji</span>
    </div>
  )
}