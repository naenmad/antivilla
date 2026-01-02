"use client";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-30 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Last updated: January 1, 2026
                        </div>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                        Print
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate prose-lg max-w-none">
                    <p>
                        Welcome to AntiVilla. Please read these Terms of Service closely before using our platform.
                        By accessing or using our websites and services, you agree to become bound by these Terms.
                    </p>

                    <h3 className="text-slate-900">1. Acceptance of Terms</h3>
                    <p>
                        By accessing or using the AntiVilla platform, you agree to comply with and be bound by these Terms of Service.
                        If you do not agree to these terms, you may not use our services.
                    </p>

                    <h3 className="text-slate-900">2. User Responsibilities</h3>
                    <p>
                        You are responsible for maintaining the confidentiality of your account information and for all activities
                        that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </p>
                    <ul>
                        <li>You must be at least 18 years old to use this service.</li>
                        <li>You agree to provide accurate and complete information.</li>
                        <li>You will not use the platform for any illegal purposes.</li>
                    </ul>

                    <h3 className="text-slate-900">3. Booking and Cancellations</h3>
                    <p>
                        All bookings are subject to availability and acceptance by the host. Cancellation policies vary by booking
                        and are strictly enforced. Please review the specific cancellation policy for your reservation before booking.
                    </p>

                    <h3 className="text-slate-900">4. Liability</h3>
                    <p>
                        AntiVilla is a platform connecting guests with hosts. We are not responsible for the condition of the
                        properties or the actions of hosts or guests, although we verify listings to the best of our ability.
                    </p>

                    <h3 className="text-slate-900">5. Changes to Terms</h3>
                    <p>
                        We reserve the right to modify these terms at any time. We will provide notice of significant changes
                        by posting an announcement on our website.
                    </p>
                </div>
            </div>
        </div>
    );
}
