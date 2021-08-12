import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState('');

  const toggleMenu = () => {
    setToggle(() => (toggle === '' ? 'open' : ''));
  };

  return (
    <header>
      <div className='nav-logo'>AJ</div>
      <div className='hamburger' onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <nav className={`${toggle}`}>
        <ul className='nav-links'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        {/* </Scrollspy> */}
        <div className='nav-social'>
          <a
            href='https://github.com/jarihant701'
            target='_blank'
            rel='noreferrer'
            title='Github'
            className='social-links'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/arihant-jain-862503190/'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn'
            className='social-links'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='mailto:jarihant701@gmail.com'
            className='social-links'
            target='_blank'
            rel='noreferrer'
            title='Email'
          >
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
