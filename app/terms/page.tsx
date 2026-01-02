
export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
                    <p className="text-slate-500 text-lg">Last updated: January 1, 2026</p>
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
