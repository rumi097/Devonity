import cmsContent from '../cms-content.json';

// Export all content from CMS
export const {
  company,
  contact,
  stats,
  hero,
  services,
  portfolio,
  blog,
  team,
  about
} = cmsContent;

// Helper function to get content
export const getContent = () => cmsContent;

// Helper to get specific sections
export const getCompanyInfo = () => cmsContent.company;
export const getContactInfo = () => cmsContent.contact;
export const getStats = () => cmsContent.stats;
export const getHero = () => cmsContent.hero;
export const getServices = () => cmsContent.services;
export const getPortfolio = () => cmsContent.portfolio;
export const getBlog = () => cmsContent.blog;
export const getTeam = () => cmsContent.team;
export const getAbout = () => cmsContent.about;
