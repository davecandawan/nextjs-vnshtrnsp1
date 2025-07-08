import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface FaqData {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2.5 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <div
        className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <span className="text-blue-600 font-bold text-left text-lg md:text-xl">{question}</span>
        <span
          className="ml-4 text-blue-600 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
      <div
        className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 border-t border-gray-200' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <p className="px-4 text-gray-800 leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
};

const faqData: FaqData[] = [
  {
    question: 'Q: Does this come in right-handed and left-handed configurations?',
    answer: 'A: No, the VNSH holster is a true ambidextrous holster.',
  },
  {
    question: 'Q: Will This Work With My Laser Sights or a Mounted Light?',
    answer: 'A: Depending on the light or sight you are using, it may fit.',
  },
  {
    question: 'Q: Will this work for my revolver?',
    answer: 'A: The holster will fit most compact revolvers.',
  },
  {
    question: 'Q: Do I Need a Belt? How Does It Connect Around The Waist?',
    answer:
      'A: NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)',
  },
  {
    question: "Q: My Semi-automatic Isn't Listed Above. Will it fit?",
    answer:
      'A: Yes, all semi-automatic firearms fit. In fact, that is what our design is specifically set for. This is the only holster on the market that will fit any semi-automatic firearm. The exception is the C.O.R.E. series from Smith and Wesson.',
  },
  {
    question: 'Q: Will My Magazines Fit in the Pouches?',
    answer:
      'A: Yes, all magazines for all semi-automatics will fit in any or all of the two magazine pouches.',
  },
  {
    question: 'Q: Does this holster work with slide-mounted optics (Red dots, etc)?',
    answer:
      "A: In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn't work, please remember we offer an any-reason return policy for the first 60-days you own the holster.",
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleFaqClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
