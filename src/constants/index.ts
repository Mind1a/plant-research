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
    name: 'თამარა გიგინეიშვილი',
    position: 'პოზიცია: პროექტის მენეჯერი',
    socialLinks: {},
    team: 'Project Management',
  },
  {
    name: 'ანანო ბიჩინაშვილი',
    position: 'პოზიცია: პროექტის მენეჯერი',
    socialLinks: {},
    team: 'Project Management',
  },
  {
    name: 'მარიამ დეკანოიძე',
    position: 'პოზიცია: ილუსტრატორი',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mariamdekanoidze/',
      behance: 'https://www.behance.net/mariami9',
    },
    team: 'Design Team',
  },
  {
    name: 'მარიამ ინასარიძე',
    position: 'პოზიცია: ილუსტრატორი',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mariam-inasaridze-7142402a5/',
      behance: 'https://www.behance.net/mariaminasari',
    },
    team: 'Design Team',
  },

  {
    name: 'გიორგი კვარაცხელია',
    position: 'პოზიცია: Back-end Developer',
    socialLinks: {},
    team: 'Development Team',
  },
  {
    name: 'ბექა კოპაძე',
    position: 'პოზიცია: Back-end Developer',
    socialLinks: {},
    team: 'Development Team',
  },
  {
    name: 'მინდია არაბული',
    position: 'პოზიცია: Front-end Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mindia-arabuli-b29131238/',
    },
    team: 'Development Team',
  },
  {
    name: 'საბა ვარდოსანიძე',
    position: 'პოზიცია: Front-end Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/saba-vardosanidze-76839434b/',
    },
    team: 'Development Team',
  },
  {
    name: 'თორნიკე ესიტაშვილი',
    position: 'პოზიცია: Front-end Developer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tornike-esitashvili-630b192a4/',
    },
    team: 'Development Team',
  },
];
