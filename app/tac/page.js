import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className='bg-cyan-50 flex'>
        <div className="max-w-xl mx-auto mb-6 tracking-tight">
            <Link href="/">
                <button className="btn btn-ghost my-8 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Home
                </button>
            </Link>
            <h1 className="text-2xl font-bold mb-4">PickFast Terms & Conditions</h1>
            <p><strong>Last updated:</strong> 24 September 2024</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p>By registering and using PickFast (the “App”), you agree to be bound by these Terms & Conditions (“T&amp;C”). If you do not agree, please do not use the App.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. User Accounts</h2>
            <p>Users must register with a valid email address to use the App. By registering, you confirm that all the information provided is accurate (although the Name does not have to be real). The App does not support third-party login systems.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Collection</h2>
            <p>We collect your name, email, username, and password for account creation. This data is stored securely on Google Cloud SQL. We do not use your data for any other purposes.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing and Groups</h2>
            <p>You may share your group code to invite others to join your shopping list group. Group admins have the ability to block or remove users at their discretion. You can make your group private to restrict access.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. User Conduct</h2>
            <p>You agree not to engage in any illegal activities, hacking, or attempts to access others’ personal information. Any violations or suspected violations may result in account suspension or termination without prior notice.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
            <p>We are not responsible for any malfunctions, downtime, or data breaches affecting the App. Your use of PickFast is at your own risk.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. User Content</h2>
            <p>The only content you can share in the App is text (product names). You are responsible for the content you create and share.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Support and Reports</h2>
            <p>You may submit reports to our support team directly through the App. We will try our best to respond but do not guarantee immediate or satisfactory resolution.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Termination</h2>
            <p>We reserve the right to terminate or suspend your account if we believe you are engaging in hacking, attempting to access others’ personal information, or at our sole discretion for any other reasons.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to Terms</h2>
            <p>We may update these T&amp;C at any time. We will try to inform all users via email, but we do not guarantee that all users will be notified. It is your responsibility to review the T&amp;C regularly.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">11. Governing Law</h2>
            <p>These T&amp;C are governed by the laws of the Netherlands. Any disputes arising from your use of the App will be handled according to Dutch law.</p>
        </div>
    </div>
  );
}

export default TermsAndConditions;
