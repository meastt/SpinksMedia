import { Package } from "./packages";

export const outOfStatePackages: Package[] = [
  {
    id: "package-01",
    name: "Package 01",
    price: "$6,500.00",
    servicesCount: 6,
    description: "Essential out-of-state production. We travel to you to capture your premium listing with full cinematic quality.",
    image: "/images/package-starter.jpg", // Placeholder
    services: [
      { name: "Full Cinematic Tour", description: "A high-end 2-minute cinematic story of the property." },
      { name: "40 Professional Photos", description: "Full interior/exterior photography session." },
      { name: "Drone Coverage", description: "Comprehensive aerial video and photography." },
      { name: "Travel Included", description: "All travel and accommodation costs for our two-person crew." },
      { name: "2 Business Day Delivery", description: "Fast delivery despite the travel distance." },
      { name: "Social Media Reels (x2)", description: "Two vertical edits optimized for your socials." },
    ],
  },
  {
    id: "package-02",
    name: "Package 02",
    price: "$7,500.00",
    servicesCount: 8,
    description: "Our signature travel package. Comprehensive media and personal branding for luxury properties and top performers.",
    image: "/images/package-signature.jpg", // Placeholder
    popular: true,
    services: [
      { name: "Enhanced Cinematic Tour", description: "Detailed 3-minute production with advanced sound design." },
      { name: "60 Professional Photos", description: "Complete architectural and lifestyle coverage." },
      { name: "FPV + Standard Drone", description: "Both fly-through and sweeping aerial perspectives." },
      { name: "Agent Branding Session", description: "A separate shoot dedicated to your personal marketing content." },
      { name: "Floor Plans & 3D Tour", description: "Matterport and detailed layouts for maximum buyer info." },
      { name: "Custom Listing Site", description: "Dedicated website for the property." },
      { name: "Social Media Master Kit", description: "5+ vertical clips, thumbnails, and ready-to-go captions." },
      { name: "Travel Included", description: "Full crew travel costs covered." },
    ],
  },
  {
    id: "package-03",
    name: "Package 03",
    price: "$8,500.00",
    servicesCount: 10,
    description: "The ultimate out-of-state production. Elite level media for your most prestigious listings.",
    image: "/images/package-full-stable.jpg", // Placeholder
    services: [
      { name: "Premium Feature Film", description: "A 4-5 minute masterpiece featuring the property and locale." },
      { name: "Infinite Photo Library", description: "Uncapped photo count covering every possible angle." },
      { name: "Sunset & Sunrise Drone", description: "Aerials during the best light of the entire day." },
      { name: "Lifestyle Video Session", description: "Using models and lifestyle elements to sell a lifestyle, not just a house." },
      { name: "Dedicated Project Manager", description: "Point of contact for all scheduling and revisions." },
      { name: "24-Hour Priority Edit", description: "Ultra-fast delivery for urgent launches." },
      { name: "Full Social Strategy", description: "Detailed plan for how to deploy the media for maximum views." },
      { name: "Travel Included", description: "Full white-glove travel service." },
      { name: "Virtual Staging (x5)", description: "Beautiful digital furniture for empty spaces." },
      { name: "Custom Ad Assets", description: "Specific clips optimized for paid Facebook/IG ads." },
    ],
  },
];
