import type { StaticImageData } from "next/image";

import portfolioR6II4678 from "../portfolioR6II4678.webp";
import portfolioR6II4741 from "../portfolioR6II4741.webp";
import portfolioDJI0050 from "../portfolioDJI_20260205112639_0050_D.webp";
import portfolioDSC0564 from "../portfolio_DSC0564_5_6.webp";
import portfolioR6II4909 from "../portfolioR6II4909.webp";
import portfolioDSC0444 from "../portfolio_DSC0444.webp";
import portfolioDJITwilight from "../portfolioDJI_20260429192001_0159_D_twilight_3149f009.webp";
import portfolioR6II5029 from "../portfolioR6II5029.webp";
import portfolioR6II4843 from "../portfolioR6II4843.webp";
import portfolioR6II4744 from "../portfolioR6II4744.webp";
import portfolioR6II9287 from "../portfolioR6II9287.webp";
import portfolioDJI0138 from "../portfolioDJI_20260429191048_0138_D.webp";
import portfolioR6II9266 from "../portfolioR6II9266.webp";
import portfolioR6II5026 from "../portfolioR6II5026.webp";
import portfolioR6II5023 from "../portfolioR6II5023.webp";
import portfolioR6II4957 from "../portfolioR6II4957.webp";
import portfolioR6II4687 from "../portfolioR6II4687.webp";
import portfolioR6II4663 from "../portfolioR6II4663.webp";
import portfolioR6_9271 from "../portfolioR6__9271.webp";
import portfolioR6_9253 from "../portfolioR6__9253.webp";
import portfolioR6_9229 from "../portfolioR6__9229.webp";
import portfolioR6_1041 from "../portfolioR6__1041.webp";
import portfolioR6_0688 from "../portfolioR6__0688.webp";
import portfolioDSC9224 from "../portfolioDSC_9224.webp";
import portfolioDSC9221 from "../portfolioDSC_9221.webp";
import portfolioDSC9209 from "../portfolioDSC_9209.webp";
import portfolioDSC9202 from "../portfolioDSC_9202.webp";
import portfolioDSC9191 from "../portfolioDSC_9191.webp";
import portfolioDSC9185 from "../portfolioDSC_9185.webp";
import portfolioDSC9179 from "../portfolioDSC_9179.webp";
import portfolioDSC9167 from "../portfolioDSC_9167.webp";
import portfolioDSC9161 from "../portfolioDSC_9161.webp";
import portfolioDSC9098 from "../portfolioDSC_9098.webp";
import portfolioDSC9092 from "../portfolioDSC_9092.webp";
import portfolioDSC9086 from "../portfolioDSC_9086.webp";
import portfolioDSC9071 from "../portfolioDSC_9071.webp";
import portfolioDSC9047 from "../portfolioDSC_9047.webp";
import portfolioDSC0498 from "../portfolio_DSC0498.webp";
import portfolioDSC0486 from "../portfolio_DSC0486.webp";
import portfolioDSC0560 from "../portfolio_DSC0560.webp";

export type PortfolioImage = {
  id: string;
  src: StaticImageData;
  alt: string;
};

const portfolioSources = [
  portfolioR6II4678,
  portfolioR6II4741,
  portfolioDJI0050,
  portfolioDSC0564,
  portfolioR6II4909,
  portfolioDSC0444,
  portfolioDJITwilight,
  portfolioR6II5029,
  portfolioR6II4843,
  portfolioR6II4744,
  portfolioR6II9287,
  portfolioDJI0138,
  portfolioR6II9266,
  portfolioR6II5026,
  portfolioR6II5023,
  portfolioR6II4957,
  portfolioR6II4687,
  portfolioR6II4663,
  portfolioR6_9271,
  portfolioR6_9253,
  portfolioR6_9229,
  portfolioR6_1041,
  portfolioR6_0688,
  portfolioDSC9224,
  portfolioDSC9221,
  portfolioDSC9209,
  portfolioDSC9202,
  portfolioDSC9191,
  portfolioDSC9185,
  portfolioDSC9179,
  portfolioDSC9167,
  portfolioDSC9161,
  portfolioDSC9098,
  portfolioDSC9092,
  portfolioDSC9086,
  portfolioDSC9071,
  portfolioDSC9047,
  portfolioDSC0498,
  portfolioDSC0486,
  portfolioDSC0560,
];

export const portfolioImages: PortfolioImage[] = portfolioSources.map((src, index) => ({
  id: `portfolio-${index + 1}`,
  src,
  alt: `Spinks Media portfolio image ${index + 1}`,
}));

export const homepagePortfolioImages = portfolioImages.slice(0, 8);
