export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 mix-blend-difference text-[#F3F2EA] flex justify-between items-start pointer-events-none">
            <div className="flex flex-col gap-1 pointer-events-auto cursor-pointer">
                <h1 className="font-display text-base md:text-lg tracking-tight leading-none uppercase">
                    UMR Studios
                </h1>
                <span className="font-mono text-[10px] md:text-xs tracking-wider opacity-60">
                    The Ink of the Scholar
                </span>
            </div>

            <div className="flex gap-6 pointer-events-auto">
                <button className="font-mono text-xs uppercase tracking-wider hover:italic transition-all">
                    Menu
                </button>
            </div>
        </nav>
    );
}
