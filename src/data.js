import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Gallery',
      href: getPermalink('/#gallery'),
    },
    {
      text: 'Bio',
      href: getPermalink('/bio'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const socialData = {
  links: [
    { ariaLabel: 'Instagram', icon: 'ri:instagram', href: 'https://www.instagram.com/m6tier' },
    { ariaLabel: 'Telegram', icon: 'ri:telegram', href: 'https://t.me/mtvi6' },
    { ariaLabel: 'Snapchat', icon: 'ri:snapchat', href: 'https://snapchat.com/add/m6tier' },
    { ariaLabel: 'TikTok', icon: 'ri:tiktok', href: 'https://www.tiktok.com/@kwlens' },
    // { ariaLabel: 'WhatsApp', icon: 'ri:whatsapp', href: 'https://wa.me/96566467967' },
    // { ariaLabel: 'RSS', icon: 'ri:rss', href: getAsset('/rss.xml') },
  ],
};

export const galleryData = {
  images: [
    {
      url: import('~/assets/images/gallery/img0.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img1.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img2.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img3.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img4.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img5.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img6.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img7.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img8.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img9.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img10.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img11.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img12.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img13.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img14.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img15.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img16.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img17.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img18.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img19.jpeg'),
    },
    {
      url: import('~/assets/images/gallery/img20.jpeg'),
    },
  ],
};
