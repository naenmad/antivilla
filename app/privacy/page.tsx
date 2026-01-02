"use client";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-30 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
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
                        At AntiVilla, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure,
                        and safeguard your information when you visit our website.
                    </p>

                    <h3 className="text-slate-900">1. Information We Collect</h3>
                    <p>
                        We collect information that you voluntarily provide to us when you register on the website, express an interest
                        in obtaining information about us or our products and services, when you participate in activities on the
                        website, or otherwise when you contact us.
                    </p>

                    <h3 className="text-slate-900">2. How We Use Your Information</h3>
                    <p>
                        We use personal information collected via our website for a variety of business purposes described below:
                    </p>
                    <ul>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you administrative information.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To post testimonials with your consent.</li>
                    </ul>

                    <h3 className="text-slate-900">3. Disclosure of Your Information</h3>
                    <p>
                        We may process or share your data that we hold based on the following legal basis:
                    </p>
                    <ul>
                        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information.</li>
                        <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                    </ul>

                    <h3 className="text-slate-900">4. Data Security</h3>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the
                        security of any personal information we process. However, please also remember that we cannot guarantee
                        that the internet itself is 100% secure.
                    </p>
                </div>
            </div>
        </div>
    );
}
