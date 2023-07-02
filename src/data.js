import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const galleryData = {
  images: [
    {
      text: 'Image 1',
      src: getAsset('/images/gallery/img1.jpeg'),
    },
    {
      text: 'Image 2',
      src: getAsset('/images/gallery/img2.jpeg'),
    },
    {
      text: 'Image 3',
      src: getAsset('/images/gallery/img3.jpeg'),
    },
    {
      text: 'Image 4',
      src: getAsset('/images/gallery/img4.jpeg'),
    },
    {
      text: 'Image 5',
      src: getAsset('/images/gallery/img5.jpeg'),
    },
    {
      text: 'Image 6',
      src: getAsset('/images/gallery/img6.jpeg'),
    },
    {
      text: 'Image 7',
      src: getAsset('/images/gallery/img7.jpeg'),
    },
    {
      text: 'Image 8',
      src: getAsset('/images/gallery/img8.jpeg'),
    },
    {
      text: 'Image 9',
      src: getAsset('/images/gallery/img9.jpeg'),
    },
    {
      text: 'Image 10',
      src: getAsset('/images/gallery/img10.jpeg'),
    },
    {
      text: 'Image 11',
      src: getAsset('/images/gallery/img11.jpeg'),
    },
    {
      text: 'Image 12',
      src: getAsset('/images/gallery/img12.jpeg'),
    },
    {
      text: 'Image 13',
      src: getAsset('/images/gallery/img13.jpeg'),
    },
    {
      text: 'Image 14',
      src: getAsset('/images/gallery/img14.jpeg'),
    },
    {
      text: 'Image 15',
      src: getAsset('/images/gallery/img15.jpeg'),
    },
    {
      text: 'Image 16',
      src: getAsset('/images/gallery/img16.jpeg'),
    },
    {
      text: 'Image 17',
      src: getAsset('/images/gallery/img17.jpeg'),
    },
    {
      text: 'Image 18',
      src: getAsset('/images/gallery/img18.jpeg'),
    },
    {
      text: 'Image 19',
      src: getAsset('/images/gallery/img19.jpeg'),
    },
    {
      text: 'Image 20',
      src: getAsset('/images/gallery/img20.jpeg'),
    },
  ],
};

export const headerData = {
  links: [
    {
      text: 'Bio',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const socialData = {
  links: [
    { ariaLabel: 'Instagram', icon: 'ri:instagram', href: 'https://www.instagram.com/m6tier' },
    { ariaLabel: 'Telegram', icon: 'ri:telegram', href: 'https://t.me/m6tier' },
    { ariaLabel: 'Snapchat', icon: 'ri:snapchat', href: 'https://snapchat.com/add/m6tier' },
    { ariaLabel: 'WhatsApp', icon: 'ri:whatsapp', href: 'https://wa.me/96566467967' },
    { ariaLabel: 'TikTok', icon: 'ri:tiktok', href: 'https://www.tiktok.com/@kwlens' },
    // { ariaLabel: 'RSS', icon: 'ri:rss', href: getAsset('/rss.xml') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'ri:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'ri:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'ri:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'ri:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'ri:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
