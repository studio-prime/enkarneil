export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full h-px bg-[#e8e8e8]" />
      <div className="max-w-6xl mx-auto px-10 py-8">
        <p className="font-sans text-[12px] font-light tracking-[0.05em] text-[#999] text-center">
          &copy; {new Date().getFullYear()} Énkar Neil. Photographer and visual artist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
