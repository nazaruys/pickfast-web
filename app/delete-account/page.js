"use client";

export default function DeleteAccountPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@pick-fast.com";
  };

  return (
    <div className="min-h-screen bg-cyan-50 px-8 md:px-36 flex flex-col py-16">
      <div className="flex items-center flex-col text-center">
        <h1 className="text-4xl font-bold mb-4">Delete Your Account</h1>
        <h2 className="text-2xl mb-4">We’re sorry to see you go!</h2>
        <p className="mb-8">
          If you wish to delete your account, please send an email to <a className="font-bold">support@pick-fast.com</a> with your request.
        </p>
        <button 
          onClick={handleEmailClick} 
          className="btn btn-primary"
        >
          Email Support
        </button>
      </div>
    </div>
  );
}
