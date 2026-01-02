
export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                    <p className="text-slate-500 text-lg">Last updated: January 1, 2026</p>
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
