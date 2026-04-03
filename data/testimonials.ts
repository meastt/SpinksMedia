export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Top Producer, Re/Max",
    text: "Spinks Media completely changed my listing game. The first house we shot with them stayed on the market for only 48 hours and got thousands of views on IG. Simply the best.",
    avatar: "https://i.pravatar.cc/150?u=1",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Ross",
    role: "Broker / Owner, Desert Bloom",
    text: "The quality is unmatched in Southern Utah. We've tried other videographers, but nobody understands 'scroll-stopping' content like Spinks. They are a core part of our team now.",
    avatar: "https://i.pravatar.cc/150?u=2",
    rating: 5,
  },
  {
    id: "3",
    name: "Amanda Thorne",
    role: "Luxury Specialist, Sotheby's",
    text: "If you have a high-end listing, you can't afford NOT to use these guys. The FPV drone tours are a massive hook for out-of-state buyers. Professional and fast.",
    avatar: "https://i.pravatar.cc/150?u=3",
    rating: 5,
  },
  {
    id: "4",
    name: "Kevin Wu",
    role: "Independent Agent",
    text: "I was skeptical about the cost at first, but the ROI was immediate. My personal branding has leveled up so much just from the Reels they create for me.",
    avatar: "https://i.pravatar.cc/150?u=4",
    rating: 5,
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    role: "Director of Marketing, Utah Real Estate",
    text: "Fast, reliable, and incredibly talented. They handle our entire team's media needs without missing a beat. The 'Summit' package is a game changer.",
    avatar: "https://i.pravatar.cc/150?u=5",
    rating: 5,
  },
];
