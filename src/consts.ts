import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Bublr",
  EMAIL: "solomon@bublr.life",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};


export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Just your home in the internet.",
};

export const UPDATE: Metadata = {
  TITLE: "Updates",
  DESCRIPTION: "Bublr's Updates"
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/solomonshalom/bublr"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/company/just-bublr/",
  }
];
