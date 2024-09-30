import { useState, useRef } from 'react';

export default function FAQList({ faqItems }) {
  const [openIndexes, setOpenIndexes] = useState([]);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Dynamically set the maxHeight for open/close animation
  const getContentHeight = (index) => {
    return openIndexes.includes(index)
      ? `${contentRefs.current[index]?.scrollHeight}px`
      : '0px';
  };

  return (
    <div>
      <ul className="basis-1/2">
        {faqItems.map((item, index) => (
          <li key={index} className={`border-b ${index === 0 ? 'border-t' : ''}`}>
            <div className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex tracking-tight items-center w-full text-left font-semibold text-xl ${openIndexes.includes(index) ? 'text-orange-500' : 'text-base-content'}`}
                aria-expanded={openIndexes.includes(index) ? 'true' : 'false'}
              >
                <span className={`flex-1 ${openIndexes.includes(index) ? 'text-orange-500' : 'text-base-content'}`}>
                  {item[0]}
                </span>

                {/* SVG for + Icon (rotates on click) */}
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current text-base-content"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal line */}
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}`}
                    style={{ transformOrigin: 'center' }}
                  ></rect>

                  {/* Vertical line */}
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-0' : 'rotate-[-90deg]'}`}
                    style={{ transformOrigin: 'center' }}
                  ></rect>
                </svg>
              </button>

              {/* Answer Section with Animated Height */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{ maxHeight: getContentHeight(index) }}
              >
                <div className="pt-5 leading-relaxed">
                  <p>{item[1]}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
