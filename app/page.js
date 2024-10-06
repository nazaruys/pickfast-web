"use client";
import { XMarkIcon, ArrowDownIcon, GiftIcon } from '@heroicons/react/24/outline';
import FAQList from './components/FAQList';

export default function Home() {
	const faqItems = [
		['How is PickFast better than other shopping list apps?', '🍊PickFast offers a simpler and more customizable experience. You can mark items with a single click and name them however you prefer!'],
		['Is it completely free?', 'Yes! The app is completely free to use 😀'],
		['How do I share my list with family members?', 'Family members can join your group by entering a 6-character code that you provide.'],
		['How many people can join my group?', 'There is no limit! You can invite family, friends, or anyone else you wish to share your list with.'],
		['Can I prioritize products?', 'Yes, you can set and later edit the priority of each product according to your preferences.']
	];
	
    return (
	<>
		<div className="bg-cyan-50 px-4 md:px-36 py-1 min-h-screen">
			{/* Logo */}
			<div className="mb-8 pl-4 md:pl-10">
				<img src="/logo.png" alt="PickFast Logo" className="w-auto h-16 md:h-20" />
			</div>

			<div className="flex flex-col md:flex-row justify-center">
				{/* Right: Title, Subtitle, Google Play Link */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-extrabold text-baseContent mb-6 md:mb-8 tracking-tighter group">
						Make your groceries<br />
						<div className="relative inline-block">
							<span className="relative z-10">with ease</span>
							<div className="absolute left-0 right-0 bottom-[-0.25rem] md:bottom-[-0.5rem] border-b-4 md:border-b-8 border-dashed border-primary/50 transition-all duration-200 group-hover:border-primary/100"></div>
						</div>
					</h1>

					<p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 tracking-tight">
						The <span className="relative whitespace-nowrap"> 
								<span className="absolute bg-primary -left-0.5 -top-0.5 -bottom-0.5 -right-0.5 md:-left-1 md:-top-0 md:-bottom-0.5 md:-right-1 -rotate-1"></span>
								<span className="text-white relative">shopping list</span>
							</span> for you and your family
					</p>
					
					{/* Google Play Badge with link */}
					<a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="pointer-events-none opacity-60">
						<img src="/get-it-on-google-play.png" alt="Get it on Google Play" className="w-48 md:w-56 h-auto mx-auto md:mx-0" />
					</a>

					{/* Small Gift Icon and Text Below the Google Play Button */}
					<div className="flex justify-center md:justify-start items-center mt-4 text-green-600 text-base">
						<GiftIcon className="w-6 h-6 mr-2" />
						<p>Shop with ease for free!</p>
					</div>

					{/* Blue Box with X Icon and Text */}
					<div className="bg-blue-100 w-full md:w-fit h-auto p-4 md:p-6 mt-6 md:mt-10">
					<ul className="space-y-4 md:space-y-8">
						<li className="flex items-start">
							<XMarkIcon className="w-6 md:w-8 h-6 md:h-8 text-red-600 mr-2 md:mr-3 flex-shrink-0" />
							<p className="text-gray-700 text-sm md:text-lg">Spending money on unwanted products.</p>
						</li>
						<li className="flex items-start">
							<XMarkIcon className="w-6 md:w-8 h-6 md:h-8 text-red-600 mr-2 md:mr-3 flex-shrink-0" />
							<p className="text-gray-700 text-sm md:text-lg">Thinking about the products in the store.</p>
						</li>
						<li className="flex items-start">
							<XMarkIcon className="w-6 md:w-8 h-6 md:h-8 text-red-600 mr-2 md:mr-3 flex-shrink-0" />
							<p className="text-gray-700 text-sm md:text-lg">∞ Disputes with family about unpurchased product.</p>
						</li>
					</ul>
					</div>

					{/* Small Icon and Text Below the Box */}
					<div className="flex justify-center md:justify-start items-center mt-8 md:mt-16 text-gray-600 text-sm font-bold">
						<ArrowDownIcon className="w-4 h-4 mr-2" />
						<p>Try it this way</p>
					</div>
				</div>

				{/* Left: Demo GIF */}
				<div className="max-h-[28rem] overflow-hidden rounded-t-[3.5rem] border-t-[12px] border-l-[12px] border-r-[12px] border-black/85 bg-base-100 md:mr-20 md:order-first md:max-h-none md:max-w-[24rem] lg:rounded-[3rem] lg:border-[14px] order-last mt-10 md:mt-0">
					<img src="/demo.gif" alt="Demo of PickFast" className="h-full w-full object-cover" />
				</div>
			</div>

			{/* Below Section */}
			<div className="flex flex-col mt-12 md:mt-24 px-4 md:px-12 lg:px-56 text-center md:text-left">
				<h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Plan your groceries home, buy what you need in the store</h2>
				<p className="text-sm md:text-lg text-gray-600 tracking-tight">Add, edit, mark products and specify the store. Make your shopping list from recently bought products.</p>
			</div>
			
			<div className="flex flex-col my-16 md:my-28 md:flex-row justify-between">     
				{/* Left: Additional Content */}
				<div className="md:w-1/2 flex flex-col text-center md:text-left mb-3">
					<h1 className="text-3xl md:text-4xl tracking-tighter font-extrabold mb-4 md:mb-6">Frequently Asked Questions</h1>
					<p>
						More questions? Contact <a href="mailto:support@pick-fast.com" className="link font-bold">support</a>.
					</p>
				</div>

				{/* Right: FAQ Section */}
				<div className="md:w-1/2">
					<FAQList faqItems={faqItems} />
				</div>
			</div>
		</div>

		<footer className="bg-cyan-50 border-t">
			<div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-24 md:pb-32">
				<div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-center md:text-left">
				{/* Left: PickFast Logo and Subtitle */}
				<div className="w-full md:w-80 max-w-full flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0">
					<a href="/#" aria-current="page" className="flex gap-2 justify-center md:justify-start items-center">
					<img src="/logo.png" alt="PickFast Logo" className="w-auto h-16 md:h-20" />
					</a>
					<p className="text-sm text-base-content/80 leading-relaxed mt-4">
					Shop smarter, pick faster<br />
					Copyright © 2024 - All rights reserved
					</p>
				</div>

				{/* Links Section */}
				<div className="flex-grow flex flex-wrap justify-center md:justify-start md:pl-24 -mb-10 md:mt-0 mt-10">
					<div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
					<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm mb-3">LINKS</h3>
					<ul className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
						<li><a href="https://github.com/nazaruys/pickfast-app" target="_blank" className="link link-hover">Project on GitHub</a></li>
						<li><a href="mailto:support@pick-fast.com" className="link link-hover">Support</a></li>
						<li><a href="/delete-account" className="link link-hover">Delete account</a></li>
					</ul>
					</div>

					{/* Legal Section */}
					<div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
					<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm mb-3">LEGAL</h3>
					<ul className="flex flex-col justify-center items-center md:items-start gap-2 text-sm">
						<li><a href="/privacy-policy" className="link link-hover">Privacy Policy</a></li>
						<li><a href="/tac" className="link link-hover">Terms & Conditions</a></li>
					</ul>
					</div>

					{/* About Maker Section */}
					<div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
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
