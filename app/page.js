"use client";
import { XMarkIcon, ArrowDownIcon, GiftIcon } from '@heroicons/react/24/outline';
import FAQList from './components/FAQList';

export default function Home() {
	const faqItems = [['How to add a list?', 'To add it you just need to a sdadsd asdad asdad adada asdada asdadas adada adadad adadad adad.'], ['What do i get exactly?', 'An app.)'], ['And then you can?', 'Yes bla bla bla lbal.'], ['Can i get a refund?', 'Hello es sdj ajs da lorem ipsum.']]
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
			<h1 className="text-6xl font-extrabold text-baseContent mb-5 tracking-tighter group">
				Make your<br />groceries<br />
				<div className="relative inline-block">
					<span className="relative z-10">with ease</span>
					<div className="absolute left-0 right-0 bottom-[-0.5rem] border-b-8 border-dashed border-primary/50 transition-all duration-200 group-hover:border-primary/100"></div>
				</div>
			</h1>

				<p className="text-xl text-gray-600 mb-10 tracking-tight">
					The <span class=" relative whitespace-nowrap"> 
							<span class="absolute bg-primary -left-1 -top-1 -bottom-1 -right-1 md:-left-1 md:-top-0 md:-bottom-0.5 md:-right-1 -rotate-1"></span>
							<span class="text-white relative">shopping list</span>
						</span> for you and your family
				</p>
				
				{/* Google Play Badge with link */}
				<a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
				<img src="/get-it-on-google-play.png" alt="Get it on Google Play" className="w-56 h-auto" />
				</a>

				{/* New: Small Gift Icon and Text Below the Google Play Button */}
				<div className="flex items-center mt-4 text-green-600 text-base">
				<GiftIcon className="w-6 h-6 mr-2" />
				<p>Shop with ease for free!</p>
				</div>

				{/* Blue Box with X Icon and Text */}
				<div className="bg-blue-100 w-96 h-auto p-6 mt-10 rounded-none">
				<ul className="space-y-4">
					<li className="flex items-start">
					<XMarkIcon className="w-8 h-8 text-red-600 mr-3 flex-shrink-0" />
					<p className="text-gray-700 text-lg">Spending money on unwanted products.</p>
					</li>
					<li className="flex items-start">
					<XMarkIcon className="w-8 h-8 text-red-600 mr-3 flex-shrink-0" />
					<p className="text-gray-700 text-lg">Thinking about the products in the store.</p>
					</li>
					<li className="flex items-start">
					<XMarkIcon className="w-8 h-8 text-red-600 mr-3 flex-shrink-0" />
					<p className="text-gray-700 text-lg">∞ Disputes with family about unpurchased product.</p>
					</li>
				</ul>
				</div>

				{/* Small Icon and Text Below the Box */}
				<div className="flex items-center mt-5 text-gray-600 text-sm font-bold">
				<ArrowDownIcon className="w-4 h-4 mr-2" />
				<p>Try it another way</p>
				</div>
          	</div>
        </div>

        {/* Below Section */}
        <div className="flex flex-col mt-24 px-4 md:px-12 lg:px-56">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Plan your groceries home, buy what you need in the store</h2>
          <p className="text-lg text-gray-600 tracking-tight">Add, edit, mark products and specify the store. Make your shopping list from recently bought products.</p>
        </div>
		<div className="flex flex-col mt-28 md:flex-row justify-between min-h-screen bg-slate-100">     
			{/* Left: Additional Content */}
			<div className="md:w-1/2 flex justify-center">
				<h1 className="text-3xl">Frequently Asked Questions</h1>
			</div>

			{/* Right: FAQ Section */}
			<div className="md:w-1/2">
				<FAQList faqItems={faqItems} />
			</div>

		</div>
      </div>
    );
}
