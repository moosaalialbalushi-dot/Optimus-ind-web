/* Optimus Industries — App shell */
const { useState: uS, useEffect: uE, useRef: uR } = React;

function Nav() {
  const [scrolled, setScrolled] = uS(false);
  uE(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <img src="assets/optimus-mark.png" alt="Optimus" />
          <div>
            <div className="nav-brand-text">OPTIMUS</div>
            <div className="nav-brand-sub">Industries LLC</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#sigma" className="nav-link">Methodology</a>
          <a href="#reach" className="nav-link">Reach</a>
          <a href="#contact" className="nav-cta">Enquire</a>
        </div>
      </div>
    </nav>
  );
}

function ScrollProgress() {
  const [w, setW] = uS(0);
  uE(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(Math.min(100, (window.scrollY / h) * 100));
    };
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <div className="scroll-progress" style={{ width: w + '%' }} />;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  uE(() => {
    document.documentElement.setAttribute('data-type', t.typography);
  }, [t.typography]);

  uE(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [t.hero]);

  const HeroEditorial = window.HeroEditorial;
  const HeroCinematic = window.HeroCinematic;
  const HeroLedger = window.HeroLedger;
  const About = window.About;
  const Services = window.Services;
  const Capabilities = window.Capabilities;
  const SixSigma = window.SixSigma;
  const Reach = window.Reach;
  const Contact = window.Contact;
  const Footer = window.Footer;

  const heroMap = { editorial: HeroEditorial, cinematic: HeroCinematic, ledger: HeroLedger };
  const Hero = heroMap[t.hero] || HeroEditorial;

  return (
    <React.Fragment>
      <div className="page-bg" />
      <div className="grain" />
      <ScrollProgress />
      <Nav />

      <main id="top">
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Capabilities /></div>
        <div className="reveal"><SixSigma /></div>
        <div className="reveal"><Reach /></div>
        <div className="reveal"><Contact /></div>
      </main>

      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero variant" />
        <TweakRadio
          label="Layout"
          value={t.hero}
          options={['editorial', 'cinematic', 'ledger']}
          onChange={v => setTweak('hero', v)}
        />

        <TweakSection label="Typography pairing" />
        <TweakRadio
          label="Pairing"
          value={t.typography}
          options={['classic', 'editorial', 'modern', 'sans']}
          onChange={v => setTweak('typography', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
