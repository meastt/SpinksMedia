export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  id: string;
  questions: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      {
        question: "Where is Spinks Media based?",
        answer: "We are proudly based in St. George, Utah, and we primarily serve the Southern Utah real estate market including Cedar City, Washington, and Hurricane.",
      },
      {
        question: "Do you travel outside of Southern Utah?",
        answer: "Yes! While we are local to St. George, we offer specialized travel packages for listings nationwide. Check our 'Out of State' section for details.",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking & Scheduling",
    questions: [
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 3-5 business days in advance to ensure your preferred time slot, though we always do our best to accommodate last-minute requests.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24 hours notice for cancellations or rescheduling. Cancellations within 24 hours may be subject to a rescheduling fee.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Packages",
    questions: [
      {
        question: "Are there any hidden fees?",
        answer: "No. Our package pricing is transparent. Additional costs only apply if you request extra services outside your selected package or if the travel exceeds our local radius.",
      },
      {
        question: "Do you offer bulk discounts for high-volume agents?",
        answer: "Yes, we have custom retainers for agents and teams who shoot 4+ listings per month. Contact us for a custom quote.",
      },
    ],
  },
  {
    id: "production",
    title: "Video & Content Production",
    questions: [
      {
        question: "How long does a shoot typically take?",
        answer: "A standard shoot takes 2-4 hours on-site, depending on the home size and chosen services. Luxury tours or 'Full Stable' packages may take 5+ hours.",
      },
      {
        question: "What should the agent's role be during the shoot?",
        answer: "We love having agents on-site! It's the perfect time to film your intros/outros and branding content. If you can't make it, just ensure the property is 100% shoot-ready.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Turnaround & Delivery",
    questions: [
      {
        question: "How quickly will I get my media back?",
        answer: "Photos are typically delivered within 24 hours. Videos take 48-72 hours due to the cinematic editing process. We offer 'Priority Delivery' for faster turnaround.",
      },
      {
        question: "How are the files delivered?",
        answer: "We deliver all media via a high-resolution download link (typically Google Drive or Dropbox) where you can download both MLS-ready and high-res versions.",
      },
    ],
  },
];
