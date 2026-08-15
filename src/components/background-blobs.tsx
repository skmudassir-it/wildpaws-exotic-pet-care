"use client";

export function BackgroundBlobs() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      <div className="blob blob-primary left-[-10%] top-[-5%] h-[34rem] w-[34rem]" />
      <div className="blob blob-accent right-[-8%] top-[18%] h-[28rem] w-[28rem]" />
      <div className="blob blob-primary bottom-[-12%] left-[22%] h-[30rem] w-[30rem]" />
      <div className="blob blob-accent bottom-[6%] right-[10%] h-[22rem] w-[22rem]" />
    </div>
  );
}
