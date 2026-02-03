export default function AscensionGrid({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string
}) {
    return (
        <div className={`w-full min-h-screen grid grid-cols-12 gap-4 px-4 md:px-6 relative ${className}`}>
            {/* The Scholar's Margin (Left) */}
            <div className="hidden md:block col-span-1 border-r border-ink/5 h-full relative">
                <div className="sticky top-0 h-screen flex flex-col justify-between py-6">
                    <span className="block w-px h-full bg-ink/5 absolute left-1/2 -translate-x-1/2" />
                </div>
            </div>

            {/* Content Zone */}
            <div className="col-span-12 md:col-span-11 relative">
                {children}
            </div>
        </div>
    );
}
