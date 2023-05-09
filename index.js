// const homepage = document.querySelector('#homepage');

const hamburger = document.querySelector('#hamburger-menu');

const crossInMenu = document.querySelector('#close-menu');

hamburger.addEventListener('click', () => {
  document.querySelector('#menu').style.display = 'block';
});

crossInMenu.addEventListener('click', () => {
  document.querySelector('#menu').style.display = 'none';
});

// Speakers Section Dynamic Creation

const speakersArray = [
  {
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    photo: './assets/lecturer1.jpg',
  },

  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './assets/lecturer3.jpg',
  },

  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './assets/lecturer2.jpg',
  },

  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './assets/lecturer4.jpg',
  },

  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './assets/lecturer5.jpg',
  },

  {
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    photo: './assets/lecturer6.jpg',
  },

];

window.onload = () => {
  for (let i = 0; i < speakersArray.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('highlevel-section-div-2', 'mb-5');
    if (i > 1) {
      speaker.setAttribute('id', `head-${i + 5}`);
    }
    speaker.innerHTML = `
        <div><img src='${speakersArray[i].photo}' alt='lecture 2' /></div>
                            <div><h4'>${speakersArray[i].name}</h4>
                            <p>${speakersArray[i].role}</p><hr><p>${speakersArray[i].description}</p></div>
        `;
    document.querySelector('#block-78910').appendChild(speaker);
  }
};