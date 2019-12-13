// @ts-ignore
import Rank from './rank.svg';
// @ts-ignore
import Icon from './icon.png';
// @ts-ignore
import Avatar from './avatar.jpeg';

const createDIV = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};

describe('jest-less-transformer', () => {
  test('import svg', () => {
    const div = createDIV();
    div.setAttribute('style', `height: 50px; background-image: url('${Rank}')`);
  });

  test('import png', () => {
    const img = document.createElement('img');
    document.body.appendChild(img);
    img.setAttribute('src', Icon);
  });

  test('import jpeg', () => {
    const div = createDIV();
    div.setAttribute('style', `height: 50px; background-image: url('${Avatar}')`);
  });
});
