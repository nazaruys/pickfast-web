"use client";
import { XMarkIcon, ArrowDownIcon, GiftIcon } from '@heroicons/react/24/outline';
import FAQList from './components/FAQList';

export default function Home() {
	const faqItems = [['How to add a new product?', 'Bla bla la la lal al al la la la la llala la al.'], ['What do i get exactly?', 'An app.)'], ['Is it completly free?', 'Yes bla bla bla lbal.'], ['Can i get a refund?', 'Hello es sdj ajs da lorem ipsum.']]
    return (
	<>
		<div className="bg-cyan-50 px-8 md:px-36 py-1 min-h-screen">
			{/* Logo */}
			<div className="mb-8 pl-10">
				<img src="/logo.png" alt="PickFast Logo" className="w-auto h-20" />
			</div>

			<div className="flex flex-col md:flex-row justify-center">
				{/* Left: Demo GIF */}
				<div className="shadow-lg h-screen max-w-[24rem] overflow-hidden rounded-t-[3.5rem] border-t-[12px] border-l-[12px] border-r-[12px] border-black/85 bg-base-100 md:order-first lg:rounded-[3rem] lg:border-[14px] flex flex-col justify-center mr-20">
					<img src="/demo.gif" alt="Demo of PickFast" className="h-full w-auto" />
				</div>

				{/* Right: Title, Subtitle, Google Play Link */}
				<div className="md:w-1/2">
					<h1 className="text-6xl font-extrabold text-baseContent mb-8 tracking-tighter group">
						Make your groceries<br />
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

					{/* Small Gift Icon and Text Below the Google Play Button */}
					<div className="flex items-center mt-4 text-green-600 text-base">
					<GiftIcon className="w-6 h-6 mr-2" />
					<p>Shop with ease for free!</p>
					</div>

					{/* Blue Box with X Icon and Text */}
					<div className="bg-blue-100 w-fit h-auto p-6 mt-10 rounded-none">
					<ul className="space-y-8">
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
					<div className="flex items-center mt-16 text-gray-600 text-sm font-bold">
						<ArrowDownIcon className="w-4 h-4 mr-2" />
						<p>Try it this way</p>
					</div>
				</div>
			</div>

			{/* Below Section */}
			<div className="flex flex-col mt-24 px-4 md:px-12 lg:px-56">
			<h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Plan your groceries home, buy what you need in the store</h2>
			<p className="text-lg text-gray-600 tracking-tight">Add, edit, mark products and specify the store. Make your shopping list from recently bought products.</p>
			</div>
			<div className="flex flex-col my-28 md:flex-row justify-between">     
				{/* Left: Additional Content */}
				<div className="md:w-1/2 flex flex-col">
					<h1 className="text-4xl tracking-tighter font-extrabold mb-6">Frequently Asked Questions</h1>
					<p>
						More questions? Contact <a href="#" className="link font-bold">support</a>
						, or <a href="mailto:support@pick-fast.com" className="link font-bold">send email</a>.
					</p>
				</div>

				{/* Right: FAQ Section */}
				<div className="md:w-1/2">
					<FAQList faqItems={faqItems} />
				</div>

			</div>
		</div>
		{/* Footer */}
		<footer className="bg-cyan-50 border-t">
			<div className="max-w-7xl mx-auto px-8 pt-16 pb-32">
				<div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					{/* Left: PickFast Logo and Subtitle */}
					<div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto md:text-left">
						<a href="/#" aria-current="page" className="flex gap-2 justify-center md:justify-start items-center">
						<img src="/logo.png" alt="PickFast Logo" className="w-auto h-20" />
						</a>
						<p className="text-sm text-base-content/80 leading-relaxed">
						Shop smarter, pick faster
						</p>
					</div>

					{/* Links Section */}
					<div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm mb-3">LINKS</h3>
							<ul className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
								<li><a href="https://github.com/nazaruys/pickfast-app" target="_blank" className="link link-hover">Project on GitHub</a></li>
								<li><a href="#" className="link link-hover">Support</a></li>
								<li><a href="#" className="link link-hover">Delete account</a></li>
							</ul>
						</div>

						{/* Legal Section */}
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm mb-3">LEGAL</h3>
							<ul className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
								<li><a href="/privacy-policy" className="link link-hover">Privacy Policy</a></li>
								<li><a href="/tac" className="link link-hover">Terms & Conditions</a></li>
							</ul>
						</div>

						{/* About Maker Section */}
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm mb-3">ABOUT MAKER</h3>
							<ul className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
								<li><a href="https://github.com/nazaruys" target="_blank" className="link link-hover">GitHub</a></li>
								<li><a href="https://x.com/nazar_yakov" target="_blank" className="link link-hover">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</>
    );
}
