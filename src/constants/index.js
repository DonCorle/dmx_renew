import Star from "../../public/assets/star.svg";
import Shield from "../../public/assets/Shield.svg";
import Send from "../../public/assets/Send.svg";
import People01 from "../../public/assets/people01.png";
import People02 from "../../public/assets/people02.png";
import People03 from "../../public/assets/people03.png";
import Image from "next/image";

import {
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
} from "../../public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: <Star />,
    title: "Procedure Template",
    content:
      "Self-customized procedure template is free. You can compose a lot of procedure template.",
  },
  {
    id: "feature-2",
    icon: <Shield />,
    title: "Work Orders",
    content:
      "DX Maintenance provides work order utility. Users can make work order and solve the problem.",
  },
  {
    id: "feature-3",
    icon: <Send />,
    title: "Build your own Team",
    content:
      "Make your team. And work with them. DX Maintenance provides you to build your own team.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Time is gold. DX Maintenance give me gold.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: <Image src={People01} />,
  },
  {
    id: "feedback-2",
    content:
      "Sometimes Life is going to hit you in the head with a brick. Don't lose faith.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: <Image src={People02} />,
  },
  {
    id: "feedback-3",
    content: "Everyone has a plan until they get punched in the mouth",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: <Image src={People03} />,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Users",
    value: "1500+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Managed Facilities",
    value: "1000+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Github",
        link: "https://github.com/DonCorle/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
