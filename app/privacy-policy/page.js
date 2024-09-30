import Link from 'next/link';

const PrivacyPolicy = () => {
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
            <h1 className="text-2xl font-bold mb-4">PickFast Privacy Policy</h1>
            <p><strong>Effective Date:</strong> 2024-09-20</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Privacy Policy</h2>
            <p>PickFast ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, 
            and share information when you use our mobile application.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Information Collection and Use</h3>
            <p>Our app does not collect any personal information from its users. We do not store any data that can be used 
            to identify you personally.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h3>
            <p>We do not share any information with third parties, as we do not collect any user data.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 
            effective date.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
            <p>If you have any questions or suggestions about this Privacy Policy, please contact us at <a href="mailto:support@pick-fast.com" className="text-blue-500 underline">support@pick-fast.com</a>.</p>

        </div>
    </div>
  );
}

export default PrivacyPolicy;
