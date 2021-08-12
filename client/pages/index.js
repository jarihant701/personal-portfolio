import Head from 'next/head';
import Header from '../Components/Header';
import Home from '../Components/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const App = () => {
  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='dOzffsem28KEmyLKaYPfnMVbg_TDuDAXrHh2ro75RJs'
        />
        <meta
          name='description'
          content="Hey, I am Arihant. A web designer and developer from India. I bring people's ideas to life and help them go further online."
        />
        <meta property='og:image' content='screenshot.jpg' />
        <title>Arihant Jain | MERN Developer</title>
        <script
          src='https://kit.fontawesome.com/bfca5621f8.js'
          crossOrigin='anonymous'
          defer
        ></script>
      </Head>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
