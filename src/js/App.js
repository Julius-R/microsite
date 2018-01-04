import $ from 'jQuery';

const openBtn = $('.nav-toggle-btn');
const closeBtn = $('.nav-close-btn');
const links = $('.links');

openBtn.on('click', () => {
  links.css({
    'display': 'block',
    'height': 'auto'
  });
  openBtn.css('display', 'none');
  closeBtn.css('display', 'block');
});

closeBtn.on('click', () => {
  links.css({
    'display': 'none',
    'height': '0vh'
  });
  closeBtn.css('display', 'none');
  openBtn.css('display', 'block');
});
