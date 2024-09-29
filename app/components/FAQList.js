import { useState } from 'react';

export default function FAQList({ faqItems }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    // Check if the index is already in the openIndexes array
    if (openIndexes.includes(index)) {
      // If it is, remove it (close the FAQ)
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // If it isn't, add it (open the FAQ)
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div>
      <ul className="basis-1/2">
        {faqItems.map((item, index) => (
          <li key={index} className={`border-b ${index === 0 ? 'border-t' : ''}`}>
            <div className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex tracking-tight items-center w-full text-left font-semibold text-xl ${openIndexes.includes(index) ? 'text-orange-500' : 'text-base-content'}`} // Change text color to orange if open
                aria-expanded={openIndexes.includes(index) ? 'true' : 'false'}
              >
                <span className={`flex-1 ${openIndexes.includes(index) ? 'text-orange-500' : 'text-base-content'}`}>
                  {item[0]}
                </span> {/* Change text color only */}

                {/* SVG for + Icon (rotates on click) */}
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current text-base-content" // Keep SVG color unchanged
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal line */}
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}`} // Keep horizontal line at 0 rotation for plus
                    style={{ transformOrigin: 'center' }}  // Sets the transform origin to the center
                  ></rect>

                  {/* Vertical line */}
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-0' : 'rotate-[-90deg]'}`} // Rotate vertical line to 90 degrees for minus
                    style={{ transformOrigin: 'center' }}  // Sets the transform origin to the center
                  ></rect>
                </svg>
              </button>

              {/* Answer Section with Animation */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndexes.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-5 leading-relaxed">
                  <p>{item[1]}</p> {/* Replace with actual answer */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
