"use client";

import { AppLogo } from "@/components/shell/AppLogo";
import { AccordionSection } from "@/components/ui/AccordionSection";
import { publicPath } from "@/lib/publicPath";

const modes = [
  {
    label: "EXPLORE",
    cardImage: "/images/png/card-red.png",
    textColor: "#FF6066",
  },
  {
    label: "HOMEWORK",
    cardImage: "/images/png/card-yellow.png",
    textColor: "#FF8800",
  },
  {
    label: "PUZZLE",
    cardImage: "/images/png/card-blue.png",
    textColor: "#474AD5",
  },
] as const;

const pastConversations = ["theme 1", "theme 2", "theme 3", "theme 4"];

const homeworkSessions = [
  "Math — fractions",
  "Science — cells",
  "History — week 4",
];

const puzzles = ["Logic grid #3", "Pattern hunt", "Word ladder"];

function NavList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-0.5 pb-1 lg:gap-[6px]">
      {items.map((item) => (
        <li key={item}>
          <button
            type="button"
            className="w-full cursor-pointer rounded-[16px] bg-[#5353B30A] px-[16px] py-[11px] text-left font-sans text-[14px] font-semibold leading-[100%] tracking-normal text-[#5353B3] transition-colors duration-200 hover:bg-[#5353B324]"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function LeftSidebarContent() {
  return (
    <>
      {/* Logo */}
      <div className="flex min-h-[73px] items-center justify-start px-4">
        <AppLogo />
      </div>

      {/* Mode cards */}
      <div className="flex flex-col gap-2 py-2 pl-4 pr-0">
        <div className="flex flex-col gap-2 rounded-[24px] bg-white p-[12px]">
          {modes.map((mode) => (
            <button
              key={mode.label}
              type="button"
              className="flex min-h-[105px] w-full cursor-pointer flex-col items-start justify-start rounded-[20px] p-[12px] text-left font-sans text-[24px] font-extrabold uppercase leading-[100%] tracking-normal transition-opacity hover:opacity-95 active:opacity-90"
              style={{
                backgroundImage: `url(${publicPath(mode.cardImage)})`,
                backgroundSize: "inherit",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: mode.textColor,
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-1 flex flex-col gap-2 py-2 pl-4 pr-0">
        <div className="flex flex-col gap-[12px] rounded-[24px] bg-white p-[12px]">
          <AccordionSection title="Past Conversations" defaultOpen>
            <NavList items={pastConversations} />
          </AccordionSection>

          <AccordionSection title="Homework Sessions">
            <NavList items={homeworkSessions} />
          </AccordionSection>

          <AccordionSection title="Puzzles">
            <NavList items={puzzles} />
          </AccordionSection>
        </div>
      </div>
    </>
  );
}

export function LeftSidebar() {
  return (
    <aside className="flex h-full min-w-[270px] shrink-0 flex-col overflow-y-auto">
      <LeftSidebarContent />
    </aside>
  );
}
