export default function Home() {
  return (
    <div className="bg-cyan-50 px-8 md:px-36 py-1 min-h-screen">
      {/* Logo */}
      <div className="mb-8">
        <img src="/logo.png" alt="PickFast Logo" className="w-auto h-24" />
      </div>

      <div className="flex flex-col md:flex-row justify-between min-h-screen">
        {/* Left: Demo GIF */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="shadow-lg h-screen max-w-[24rem] overflow-hidden rounded-t-[3.5rem] border-t-[12px] border-l-[12px] border-r-[12px] border-black/85 bg-base-100 md:order-first lg:rounded-[3rem] lg:border-[14px] flex flex-col justify-center">
            <img src="/demo.gif" alt="Demo of PickFast" className="h-full w-auto" />
          </div>
        </div>

        {/* Right: Title, Subtitle, Google Play Link */}
        <div className="md:w-1/2">
          <h1 className="text-7xl font-extrabold text-orange-600 mb-10 tracking-tighter">Shop smarter,<br />pick faster</h1>
          <p className="text-xl text-gray-600 mb-10 tracking-tight">The shopping list for you and your family</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary bg-orange-500 text-white hover:bg-orange-600">Get it on Google Play</button>
          </a>
        </div>
      </div>
    </div>
  );
}
