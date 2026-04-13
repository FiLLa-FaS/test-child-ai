import { MicIcon, PaperclipIcon, WaveIcon } from "@/components/icons";

/** Inset of the mic+wave group from the right inner edge of the chat field (px). */
const CHAT_WAVE_BUTTON_RIGHT_PX = 4;

/** Gap between mic and wave buttons (px). */
const CHAT_MIC_WAVE_GAP_PX = 6;

const CHAT_ROW_ICON_PX = 46;

const chatInputPaddingRightPx =
  CHAT_WAVE_BUTTON_RIGHT_PX +
  CHAT_ROW_ICON_PX +
  CHAT_MIC_WAVE_GAP_PX +
  CHAT_ROW_ICON_PX;

const suggestions = [
  "What's the largest ocean on Earth?",
  "Tell me a joke!",
  "What's the largest ocean on Earth?",
  "What are you doing today?",
  "What are you doing today?",
  "What's the largest ocean on Earth?",
];

export function ChatArea() {
  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-transparent">
      {/* Scrollable content */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-between overflow-y-auto px-4 py-6 sm:px-8">
        {/* Top section: greeting + chips */}
        <div className="w-full max-w-xl flex flex-col items-center gap-[32px]">
          {/* Greeting */}
          <h2 className="font-sans text-[32px] font-bold leading-[100%] tracking-normal text-center text-[#5353B3]">
            Hi John, what do you want to know?
          </h2>

          {/* Suggestion chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((text, i) => (
              <button
                key={i}
                type="button"
                className="cursor-pointer rounded-[71px] bg-[rgba(255,255,255,0.7)] p-[12px] font-sans text-[16px] font-semibold leading-[100%] tracking-normal text-right text-[#5353B3] whitespace-nowrap transition-colors duration-200 hover:bg-[rgba(255,255,255,0.92)]"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Flexible middle — layout only; mascot is absolutely positioned behind */}
        <div className="min-h-0 w-full flex-1" aria-hidden />
      </div>

      {/* Chat input — pinned bottom */}
      <div className="shrink-0 px-4 pb-[43px] sm:px-8">
        <div
          className="relative mx-auto mt-4 flex h-[58px] max-w-xl items-center gap-3 rounded-[99px] border-4 border-[#D1CDFF] bg-white pl-4"
          style={{ paddingRight: chatInputPaddingRightPx }}
        >
          {/* Attach */}
          <button
            type="button"
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-80"
            aria-label="Attach file"
          >
            <PaperclipIcon />
          </button>

          {/* Input */}
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-transparent font-sans text-base text-black outline-none placeholder:font-semibold placeholder:leading-[100%] placeholder:tracking-[0] placeholder:text-[#8998B3] placeholder:[leading-trim:none]"
            readOnly
          />

          {/* Mic + wave — grouped, 6px gap; `right` on the group (see CHAT_WAVE_BUTTON_RIGHT_PX) */}
          <div
            className="absolute top-1/2 flex -translate-y-1/2 items-center"
            style={{
              right: CHAT_WAVE_BUTTON_RIGHT_PX,
              gap: `${CHAT_MIC_WAVE_GAP_PX}px`,
            }}
          >
            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-80"
              aria-label="Voice input"
            >
              <MicIcon />
            </button>
            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-80"
              aria-label="Send"
            >
              <WaveIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
