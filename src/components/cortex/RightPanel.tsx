import { AchievementExplorer10Icon } from "@/components/icons";
import { HelpInfoButton } from "@/components/cortex/HelpInfoButton";
import { cn } from "@/lib/utils";

const LEVEL_PROGRESS_HELP = {
  title: "Level progress",
  body: "This bar shows how much XP you’ve earned toward your next level. Complete lessons, chats, and daily tasks to fill it. When the bar reaches the end, you level up and unlock new features. The markers show where you started (XP) and the level you’re working toward (LVL).",
} as const;

const ACHIEVEMENT_PROGRESS_HELP = {
  title: "Achievement progress",
  body: "Each achievement tracks a specific goal—here, asking questions in Explore mode. The purple fill shows your current count; the number on the right is the target. Finish the goal to earn the badge and any listed reward. Progress saves automatically as you use the app.",
} as const;

const dailyTasks = [
  { label: "Daily Challenge", reward: "+10 XP", filled: true },
  { label: "Daily Puzzle", reward: "+15 XP", filled: true },
  { label: "Daily Explore", reward: "GO!", filled: false },
];

export function RightPanel() {
  return (
    <aside className="flex w-full max-h-[min(40vh,22rem)] shrink-0 flex-col overflow-y-auto lg:h-full lg:max-h-none lg:w-64 lg:shrink-0 xl:w-72">
      <div className="flex flex-col gap-3 py-2 pr-4 pl-0">
        {/* Level Progress */}
        <div className="rounded-[24px] bg-white/70 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
              Level Progress
            </span>
            <HelpInfoButton
              ariaLabel="Level progress help"
              title={LEVEL_PROGRESS_HELP.title}
              body={LEVEL_PROGRESS_HELP.body}
            />
          </div>

          {/* XP bar */}
          <div className="flex items-center gap-2 mb-3">
            {/* Start badge */}
            <div className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center shrink-0">
              <span className="text-[9px] font-bold leading-tight text-center">
                XP
              </span>
            </div>

            {/* Progress track */}
            <div className="flex-1 h-3 bg-black/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full"
                style={{ width: "62%" }}
              />
            </div>

            {/* End badge */}
            <div className="w-9 h-9 rounded-full border-2 border-dashed border-black/30 flex items-center justify-center shrink-0">
              <span className="text-[9px] font-bold text-black/30 text-center">
                LVL
              </span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-lg font-black">550 XP</span>
          </div>
        </div>

        {/* Earn XP */}
        <div className="rounded-[24px] bg-white/70 p-0">
          <div className="mb-2 px-4 pt-4">
            <p className="font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
              Earn XP
            </p>
            <p className="mt-0.5 font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
              Complete daily challenges and level up!
            </p>
          </div>

          <ul className="mx-4 mb-4 mt-4 grid list-none grid-cols-[minmax(0,1fr)_auto] gap-x-2 gap-y-3 rounded-[24px] bg-[#DDDDFF] p-3">
            {dailyTasks.map((task) => (
              <li
                key={task.label}
                className="col-span-2 grid grid-cols-[subgrid] items-center rounded-[16px] bg-[#F3F3F3] px-2 py-1.5"
              >
                <span className="min-w-0 font-sans text-[14px] font-semibold leading-[100%] tracking-[0.1px] text-[#5353B3] [leading-trim:none]">
                  {task.label}
                </span>
                <span
                  className={cn(
                    "inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap font-sans text-base font-extrabold leading-[100%] tracking-[0.08px] [leading-trim:none] rounded-[12px] px-[9px] py-[6px]",
                    task.filled
                      ? "bg-[#4EEDA8] text-[#0E4327]"
                      : "cursor-pointer bg-[#847AF1] text-white",
                  )}
                >
                  {task.reward}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievement Progress */}
        <div className="rounded-[24px] bg-white/70 p-4">
          <div className="mb-[12px] flex items-center justify-between">
            <span className="font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
              Achievement progress
            </span>
            <HelpInfoButton
              ariaLabel="Achievement progress help"
              title={ACHIEVEMENT_PROGRESS_HELP.title}
              body={ACHIEVEMENT_PROGRESS_HELP.body}
            />
          </div>

          <div className="flex flex-col gap-[12px] rounded-2xl bg-gradient-to-r from-[rgba(192,202,255,1)] to-[rgba(192,202,255,0.48)] p-3">
            <div className="flex items-start gap-3">
              <AchievementExplorer10Icon />

              <div className="min-w-0 flex-1">
                <p className="font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
                  Curious Explorer
                </p>
                <p className="mt-0.5 font-sans text-[14px] font-normal leading-[100%] tracking-[0] text-[#5353B3] [leading-trim:none]">
                  Ask 10 questions in Explore mode
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-2">
              <div className="relative h-6 min-w-0 flex-1 overflow-hidden rounded-full bg-white">
                <div
                  className="absolute inset-y-0 left-0 flex items-center justify-end rounded-full bg-[#847AF1] pr-2 font-sans text-base font-semibold leading-[100%] text-right text-white [letter-spacing:1%] [leading-trim:none]"
                  style={{ width: "60%" }}
                >
                  6
                </div>
              </div>
              <span className="shrink-0 font-sans text-base font-semibold leading-[100%] tracking-[0] text-[#8787C4] [leading-trim:none]">
                10
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
