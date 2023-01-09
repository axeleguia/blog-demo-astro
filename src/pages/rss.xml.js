import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Learner | Blog',
  description: 'Demo Blog Astro',
  site: 'https://axeleguia.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});