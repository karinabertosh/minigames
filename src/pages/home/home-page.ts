import { createElement } from '@/utils/dom';

import './home-page.scss';

export function createHomePage(): HTMLElement {
  const page: HTMLElement = createElement('div', { className: 'home-page' });
  const header: HTMLElement = createElement('header', { className: 'home-page__header' });
  const title: HTMLHeadingElement = createElement('h1', {
    className: 'home-page__title',
    text: 'MiniGames',
  });
  const main: HTMLElement = createElement('main', { className: 'home-page__content' });
  const description: HTMLParagraphElement = createElement('p', {
    className: 'home-page__description',
    text: 'Play. Compete. Create.',
  });
  const footer: HTMLElement = createElement('footer', { className: 'home-page__footer' });

  header.append(title);
  main.append(description);
  page.append(header, main, footer);

  return page;
}
