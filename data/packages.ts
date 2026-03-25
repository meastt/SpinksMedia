export interface ServiceItem {
  name: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  servicesCount: number;
  description: string;
  image: string;
  popular?: boolean;
  services: ServiceItem[];
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$750.00",
    servicesCount: 5,
    description: "The essential package for getting your listing noticed. Professional cinematic video and high-quality photography to kickstart your marketing.",
    image: "/images/package-starter.jpg",
    services: [
      { name: "Cinematic Highlight Video", description: "A sweeping 45-60 second cinematic tour of the property set to licensed music." },
      { name: "25 Professional Photos", description: "High-resolution, HDR-edited photos capturing the best angles of the home." },
      { name: "Drone Aerials", description: "Stunning 4K bird's-eye view shots of the property and surrounding neighborhood." },
      { name: "24-Hour Delivery", description: "Fast turnaround so you can get your listing live as soon as possible." },
      { name: "Social Media Teaser", description: "A 15-second vertical edit optimized for Instagram Reels and TikTok." },
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: "$1,100.00",
    servicesCount: 6,
    description: "Our most balanced offering. Enhanced storytelling and more comprehensive media coverage for properties that need to stand out.",
    image: "/images/package-signature.jpg",
    services: [
      { name: "Extended Highlight Video", description: "A detailed 90-second cinematic tour with advanced speed ramping and transitions." },
      { name: "40 Professional Photos", description: "Complete coverage including interior, exterior, and detailed architectural shots." },
      { name: "4K Aerial Video & Stills", description: "Comprehensive drone coverage including property boundaries and local landmarks." },
      { name: "Virtual Twilight", description: "Specialized editing to give the home a beautiful evening glow from daytime shots." },
      { name: "Floor Plan SVG", description: "A clean, accurate 2D layout of the property for the MLS listing." },
      { name: "IG Reel with Voiceover", description: "A scripted, voice-narrated reel focused on the property's best features." },
    ],
  },
  {
    id: "the-summit",
    name: "The Summit",
    price: "$1,425.00",
    servicesCount: 8,
    description: "Total market domination. Full-scale production value designed to make your listing go viral and cement your status as a top-tier agent.",
    image: "/images/package-full-stable.jpg",
    popular: true,
    services: [
      { name: "Full Cinematic Feature", description: "A 2-3 minute masterpiece with high-end storytelling and sound design." },
      { name: "60 Professional Photos", description: "Every detail captured, including community amenities and lifestyle shots." },
      { name: "FPV Drone Tour", description: "Immersive 'fly-through' video that glides through the front door and around the house." },
      { name: "Custom Property Website", description: "A dedicated single-page site for your listing with all media embedded." },
      { name: "Matterport 3D Tour", description: "An interactive virtual walkthrough that buyers can explore at their own pace." },
      { name: "Social Media Kit", description: "A bundle of 5+ vertical clips, thumbnails, and captions ready for posting." },
      { name: "Twilight Session", description: "A dedicated evening shoot during 'blue hour' for the most magical exteriors." },
      { name: "YouTube Optimization", description: "SEO-optimized upload to our channel to drive extra traffic to your listing." },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    price: "Custom",
    servicesCount: 0,
    description: "Tailored to your specific needs. From high-end luxury estates to commercial developments, we build the media plan that fits your vision.",
    image: "/images/package-custom.jpg",
    services: [
      { name: "Full-Service Media Strategy", description: "We scope, plan, and execute a complete media campaign tailored to your property — from concept to delivery." },
      { name: "Custom Production", description: "Custom scope and artistic direction for unique or luxury properties." },
      { name: "Commercial Media", description: "High-end content for developments, rentals, and commercial real estate." },
      { name: "Personal Branding", description: "Videos and photos focused entirely on your image and market presence." },
    ],
  },
];
