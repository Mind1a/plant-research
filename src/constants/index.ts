import { Navlink } from '../types';

export const NavLinks: Navlink[] = [
  {
    id: 1,
    title: 'მთავარი',
    url: '/',
  },
  {
    id: 2,
    title: 'სარკვევი',
    url: '/sarkvevi',
  },
  {
    id: 3,
    title: 'ოჯახები',
    url: '/families',
  },
  {
    id: 4,
    title: 'პროექტის შესახებ',
    url: '/about-project',
  },
];
import { ProjectAuthorType } from '../types';
import { ProjectAuthorimg } from '../presenter/assets';

export const projectAuthorInfo: ProjectAuthorType = {
  image: ProjectAuthorimg,
  name: 'ქეთევან ბაცაცაშვილი',
  description: `ქეთევან ბაცაცაშვილი - ბოტანიკოსი, ბიოლოგიის მეცნიერებათა კანდიდატი, 
  ილიას სახელმწიფო უნივერსიტეტის საბუნებისმეტყველო მეცნიერებათა და მედიცინის ფაკულტეტის ასოცირებული პროფესორი, 
  ბუნების დაცვის საერთაშორისო კავშირის კავკასიის მცენარეთა წითელი ნუსხის ავტორიტეტული ჯგუფის თანა-კოორდინატორი, 
  ჟურნალის Ethnobotany Research and Applications რედკოლეგიის წევრი. 
  გამოქვეყნებული აქვს რამდენიმე სამეცნიერო წიგნი / თავი სამეცნიერო წიგნებში, 
  ასევე რამდენიმე ათეული სამეცნიერო სტატია ადგილობრივ და უცხოურ ჟურნალებში.`,
};

import { TeamMember } from '../types';
export const teamMembers: TeamMember[] = [
  {
    name: 'ქეთი აფრიამაშვილი',
    position: 'პოზიცია: პროექტის მენეჯერი',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      dribbble: 'https://dribbble.com',
      behance: 'https://behance.net',
      discord: 'https://discordapp.com',
    },
    team: 'Project Management',
  },
  {
    name: 'ქეთი აფრიამაშვილი',
    position: 'პოზიცია: UI/UX დიზაინერი',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      dribbble: 'https://dribbble.com',
      behance: 'https://behance.net',
      discord: 'https://discordapp.com',
    },
    team: 'Design Team',
  },
  {
    name: 'ქეთი აფრიამაშვილი',
    position: 'პოზიცია: Front-end Developer',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      dribbble: 'https://dribbble.com',
      behance: 'https://behance.net',
      discord: 'https://discordapp.com',
    },
    team: 'Development Team',
  },
  {
    name: 'ქეთი აფრიამაშვილი',
    position: 'პოზიცია: Back-end Developer',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      dribbble: 'https://dribbble.com',
      behance: 'https://behance.net',
      discord: 'https://discordapp.com',
    },
    team: 'Development Team',
  },
];
