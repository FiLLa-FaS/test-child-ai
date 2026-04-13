import Link from "next/link";

export default function NotFound() {
  return (
    <div className="order-2 flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-8 px-4 py-16 lg:order-1">
      <h1 className="max-w-xl text-center text-3xl font-bold uppercase leading-tight tracking-tight text-black sm:text-5xl">
        Page under construction
      </h1>
      <Link
        href="/"
        className="rounded-full bg-[#5353B3] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#5353B3]/90"
      >
        Back to home
      </Link>
    </div>
  );
}
