import React, { useState } from 'react';
import Image from 'next/image';
import FooterModal from './FooterModal';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text, imgWidth = '150' }) => {
  // Calculate image height to maintain aspect ratio with larger size
  const aspectRatio = 100 / parseInt(imgWidth);
  const imageHeight = 200 * aspectRatio; // Increased from 160 to 200

  return (
    <div className="flex-1 min-w-[250px] max-w-[350px] p-4 text-center">
      <div className="h-full flex flex-col items-center">
        <div
          className="w-full flex items-center justify-center"
          style={{ height: `${imageHeight}px` }}
        >
          <div className="relative w-full max-w-[200px] h-full">
            <Image
              src={imgUrl}
              alt={title}
              width={200}
              height={imageHeight}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
        <h3 className="text-lg font-bold mt-4 mb-2 text-gray-800 whitespace-nowrap">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => (
  <a
    className="text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-300 mx-2"
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {label}
  </a>
);

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className="w-full text-base text-center py-1 flex flex-wrap justify-center items-center gap-2">
    <FooterLink label="Terms & Disclaimer" id="terms-pop-modal" onClick={loadInfo} />
    <span className="text-gray-300 select-none">|</span>
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <span className="text-gray-300 select-none">|</span>
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <span className="text-gray-300 select-none">|</span>
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
    document.body.style.overflow = 'auto';
  };

  return (
    <footer className="w-full mt-2 bg-white">
      <div className="py-8 text-gray-800 bg-white">
        <div className="py-4">
          <div className="box-border min-w-[250px] max-w-6xl mx-auto px-4 flex flex-wrap justify-around gap-6">
            <FooterColumn
              imgUrl="/contentimages/vnsh_money_back_guarantee_footer.webp"
              title="60-Day Money Back Guarantee"
              text="No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee..."
            />
            <FooterColumn
              imgUrl="/contentimages/vnsh_small_business_footer.webp"
              title="Thank You!"
              text="Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free."
            />
            <FooterColumn
              imgUrl="/contentimages/vnsh_secure_payment_footer.webp"
              title="100% Secure Payment"
              text="All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy..."
            />
          </div>
        </div>

        <div className="text-center text-gray-600 py-1">
          © <b>2025 VNSH.com</b> All Rights Reserved.
        </div>
        <FooterLinks loadInfo={loadInfo} />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 pt-20" onClick={closeModal}>
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative p-6 mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 bg-transparent border-none hover:bg-transparent"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <FooterModal modalId={modalId} closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
