export function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 bg-slate-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <span className="text-xl font-bold text-emerald-900 tracking-tighter">Antivilla.</span>
                    <p className="text-center text-sm leading-relaxed text-slate-500 md:text-left max-w-sm">
                        The trusted marketplace for Puncak villas. Verified listings, transparent road access info.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 md:items-end">
                    <div className="flex gap-6 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-emerald-700">Privacy</a>
                        <a href="#" className="hover:text-emerald-700">Terms</a>
                        <a href="#" className="hover:text-emerald-700">Contact</a>
                    </div>
                    <p className="text-center text-xs text-slate-400 md:text-right">
                        &copy; {new Date().getFullYear()} Antivilla. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
