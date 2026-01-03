export function DotPattern({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className={className}
            aria-hidden="true"
            {...props}
        >
            <defs>
                <pattern
                    id="dot-pattern"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                >
                    <circle cx={2} cy={2} r={1} className="fill-slate-200" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#dot-pattern)" />
        </svg>
    );
}

export function GridPattern({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg className={className} aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id="grid-pattern"
                    width={40}
                    height={40}
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 40L40 0H20L0 20M40 40V20L20 40"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity={0.1}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
        </svg>
    );
}

export function MeshGradient() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-purple-400/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
    );
}

export function DecorativeCircles({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`absolute pointer-events-none overflow-hidden ${className}`} {...props}>
            <div className="absolute -left-16 -top-16 w-64 h-64 border border-slate-200/60 rounded-full opacity-50" />
            <div className="absolute -left-20 -top-20 w-80 h-80 border border-slate-200/40 rounded-full opacity-40" />
            <div className="absolute -left-24 -top-24 w-96 h-96 border border-slate-200/20 rounded-full opacity-30" />

            <div className="absolute -right-16 -bottom-16 w-64 h-64 border border-emerald-100/60 rounded-full opacity-50" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border border-emerald-100/40 rounded-full opacity-40" />
        </div>
    );
}
