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
