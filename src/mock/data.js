import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omololu Ajao,',
  subtitle: 'A Full Stack Software Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I have been an engineer for over 10 years. I have a passion for solving difficult problems and building apps. ',
  paragraphTwo: ' When im not coding, I enjoy relaxing with family and friends, watching or playing sports, working out and traveling. ',
  paragraphThree: 'Hire me and lets make the World a better place! ',
  resume: 'https://pdfslide.net/documents/ajs-resume-1627658978.html', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Buy My Shoes',
    info: '●	A ruby on rails and React app that allows only users to sell shoes.',
    info2: '●	This app is hosted on Microsoft Azure and has Full CRUD routes, authentication, react bootstrap and materialize styling. ',
    url: 'https://buymyshoe.azurewebsites.net/',
    repo: 'https://github.com/ajaocodes/frontbuymyshoes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'The Reminder App',
    info: '● This is a full stack app that allows users to create a profile and store reminders and information.',
    info2: '●	Full CRUD app with Create, Read, Update, Destroy functionality. Technologies used include Mongoose, Express, MongoDB, and Node.js',
    url: 'https://ajreminderapp.herokuapp.com/',
    repo: 'https://github.com/ajaocodes/the_reminder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Weather App',
    info: '●	This is a simple application that displays the weather temperature for most cities.',
    info2: '●	The Data is obtained from the weather.com API. Technologies used JavaScript, CSS, jQuery and HTML.',
    url: 'https://ajaocodes.github.io/weather-app/',
    repo: 'https://github.com/ajaocodes/weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Sport The Answer',
    info: 'This is a trivia questions app that tests the player’s knowledge about various sports.',
    info2: '●	It uses DOM manipulation and API fetch calls to display the trivia questions. Technologies used: JavaScript, CSS, jQuery and HTML.',
    url: 'https://ajaocodes.github.io/trivia-app/',
    repo: 'https://github.com/ajaocodes/trivia-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Job Assembly',
    info: '● An app created with several engineers to help job seekers track the jobs they are applying to. ',
    info2: '●	A Full CRUD app with authentication that uses an Express backend with and a React fromt end.',
    url: 'https://60b6a90d418688000817d03a--eager-montalcini-3bce15.netlify.app/',
    repo: 'https://github.com/sandeepnukala1/ga-grad-app-frontend', // if no repo, the button will not show up
  },
];

// SKILL DATA 

export const skillData = {
  paragraphOne: '● React ● Ruby ● HTML ● CSS ● Javascript ● jQuery ● Python ● Node.js ● Express ● MongoDb ● PostgreSQL ● RubyonRail ● Gatsby ● Bootstrap ● Sass ● Microsoft Azure ●  AWS'
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ajaoomololu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ajaoomololu1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/codingruby88',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omololuajao/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ajaocodes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
