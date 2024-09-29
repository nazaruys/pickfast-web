"use client";
import FAQList from '../components/FAQList';

export default function NewPage() {
    const faqItems = [['How to add a list?', 'To add it you just need to a sdadsd asdad asdad adada asdada asdadas adada adadad adadad adad.'], ['What do i get exactly?', 'An app.)'], ['And then you can?', 'Yes bla bla bla lbal.'], ['Can i get a refund?', 'Hello es sdj ajs da lorem ipsum.']]
    return (
        <div className="bg-cyan-50 px-8 md:px-36 py-10 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between min-h-screen">     
                {/* Left: Additional Content */}
                <div className="md:w-1/2 flex justify-center">
                    <h1>Frequently Asked Questions</h1>
                </div>

                {/* Right: FAQ Section */}
                <div className="md:w-1/2">
                    <FAQList faqItems={faqItems} />
                </div>

            </div>
        </div>

    );
    }
