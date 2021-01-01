var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Faith, and I am a Product Manager and Consultant.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  // .typeString('My name is Faith, and I am a Product Manager, Consultant, and life enthusiast.')
  .deleteAll(1)
  .typeString('I enjoy working in the nexus of technology, business, and design.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('In my free time I travel, participate in foodie shenanigans, and am in a constant state of acquiring new hobbies.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="https://linkedin.com/in/faithdomfeh" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />')
  .typeString('<a href="/resume2020.pdf" target="_blank" rel="noopener noreferrer">Resume</a> <br />')
  .typeString('<a href="https://gist.github.com/faithdomfeh" target="_blank" rel="noopener noreferrer">GitHub</a> <br />')
  .typeString('<a href="mailto:faithdomfeh@gmail.com">Email</a> <br />')
  .pauseFor(1000)
