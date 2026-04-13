import { ChatArea } from "@/components/cortex/ChatArea";
import { RightPanel } from "@/components/cortex/RightPanel";

export default function HomePage() {
  return (
    <>
      <div className="order-1 min-h-0 shrink-0 lg:order-2 lg:flex lg:h-full lg:shrink-0">
        <RightPanel />
      </div>

      <div className="order-2 flex min-h-0 min-w-0 flex-1 flex-col lg:order-1">
        <ChatArea />
      </div>
    </>
  );
}
