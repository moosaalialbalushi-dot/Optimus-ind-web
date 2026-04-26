/* Hero variants for Optimus Industries */
const { useState, useEffect, useRef } = React;

// ---------- Hero A: Editorial Monogram (monolithic typography + framed mark) ----------
function HeroEditorial() {
  return (
    <section className="hero hero-editorial" style={{ padding: '160px 0 120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="reveal in" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <span className="diamond" />
              <span className="eyebrow">Est. 2025 · Sharjah, UAE</span>
            </div>

            <h1 className="display reveal in" style={{ fontSize: 'clamp(64px, 8vw, 128px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 32 }}>
              Sourcing,<br/>
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>refined.</em>
            </h1>

            <div className="hairline-gold reveal in" style={{ width: 120, margin: '24px 0 32px' }} />

            <p className="reveal in" style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-dim)', maxWidth: 520, marginBottom: 48 }}>
              A GCC-based consultancy for procurement, manufacturing and quality — engineered to scale capability across pharmaceutical, nutraceutical and industrial sectors.
            </p>

            <div className="reveal in" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#services" className="btn btn-primary">Our services <span className="arrow">→</span></a>
              <a href="#contact" className="btn btn-ghost">Begin a dialogue</a>
            </div>

            <div className="reveal in" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 520 }}>
              <Stat label="Countries of experience" value="25+" />
              <Stat label="Years in pharmaceuticals" value="15" />
              <Stat label="Markets served" value="GCC · Asia" />
            </div>
          </div>

          <div className="reveal in" style={{ position: 'relative' }}>
            <HeroMark />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="display" style={{ fontSize: 36, color: 'var(--gold)', marginBottom: 6 }}>{value}</div>
      <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

function HeroMark() {
  return (
    <div style={{ position: 'relative', aspectRatio: '1/1.1', width: '100%', maxWidth: 480, marginLeft: 'auto' }}>
      {/* outer frame */}
      <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--line-strong)' }} />
      <div style={{ position: 'absolute', inset: 18, border: '1px solid var(--line)' }} />
      <div style={{ position: 'absolute', inset: 36, border: '1px solid var(--line)' }} />
      {/* corner diamonds */}
      {[[0,0],[0,1],[1,0],[1,1]].map(([x,y],i) => (
        <div key={i} style={{
          position: 'absolute',
          top: y ? 'auto' : -5, bottom: y ? -5 : 'auto',
          left: x ? 'auto' : -5, right: x ? -5 : 'auto',
          width: 10, height: 10, background: 'var(--gold)',
          transform: 'rotate(45deg)'
        }} />
      ))}

      {/* big O */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 280, lineHeight: 1, color: 'var(--gold)',
          fontWeight: 300, letterSpacing: 0,
          textShadow: '0 8px 40px rgba(201,162,74,0.15)'
        }}>O</div>
      </div>

      {/* top/bottom glyphs */}
      <div style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 10, height: 10, background: 'var(--gold-deep)' }} />
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 10, height: 10, background: 'var(--gold-deep)' }} />

      {/* subtle animated ring */}
      <div style={{
        position: 'absolute', inset: -24,
        border: '1px dashed var(--line)',
        borderRadius: '50%',
        animation: 'slowSpin 80s linear infinite',
        opacity: 0.4,
      }} />

      {/* caption */}
      <div style={{ position: 'absolute', bottom: -40, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.32em', color: 'var(--ink-faint)' }}>
          OPTIMUS · MMXXV
        </div>
      </div>
    </div>
  );
}

// ---------- Hero B: Cinematic Full-Bleed (type dominant, image placeholder background) ----------
function HeroCinematic() {
  return (
    <section style={{ padding: 0, minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background:
          'radial-gradient(ellipse 90% 60% at 70% 40%, rgba(201,162,74,0.08), transparent 60%),' +
          'linear-gradient(135deg, #0a1224 0%, #070c18 60%, #050811 100%)',
      }} />
      {/* corner frame */}
      <div style={{ position: 'absolute', top: 100, left: 48, right: 48, bottom: 48, border: '1px solid var(--line)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 116, left: 64, right: 64, bottom: 64, border: '1px solid var(--line)', opacity: 0.6, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: 100 }}>
        <div style={{ maxWidth: 1100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 60 }}>
            <span style={{ width: 40, height: 1, background: 'var(--gold)' }} />
            <span className="eyebrow">Optimus Industries LLC · SMAMS Free Zone</span>
          </div>

          <h1 className="display" style={{
            fontSize: 'clamp(64px, 9vw, 160px)',
            lineHeight: 0.9,
            letterSpacing: '-0.035em',
            marginBottom: 48,
          }}>
            Engineered <span style={{ color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--display)' }}>procurement</span><br/>
            <span style={{ color: 'var(--ink)' }}>& </span><span style={{ color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--display)' }}>quality.</span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginTop: 80 }}>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-dim)', maxWidth: 540 }}>
              A consultancy built to strengthen the companies already in the market — raising sourcing discipline, quality compliance and manufacturing capability across the GCC and Asia.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a href="#services" className="btn btn-primary">What we do <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.32em', color: 'var(--ink-faint)' }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(var(--gold), transparent)' }} />
      </div>
    </section>
  );
}

// ---------- Hero C: Split Ledger (left type, right monogram tile) ----------
function HeroLedger() {
  return (
    <section style={{ padding: 0, minHeight: '100vh', display: 'flex' }}>
      <div style={{ flex: 1.2, padding: '160px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--gold)' }}>01 / HOME</span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>SHARJAH · UAE</span>
        </div>

        <h1 className="display" style={{ fontSize: 'clamp(54px, 7vw, 112px)', lineHeight: 1.0, marginBottom: 40 }}>
          The quiet<br/>
          architecture of<br/>
          <em style={{ color: 'var(--gold)' }}>industrial supply.</em>
        </h1>

        <p style={{ fontSize: 18, color: 'var(--ink-dim)', maxWidth: 520, marginBottom: 48, lineHeight: 1.6 }}>
          Optimus Industries is a sourcing, manufacturing and quality consultancy serving pharmaceutical, nutraceutical and specialty-ingredient businesses across the Gulf and Asia.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#services" className="btn btn-primary">Explore capabilities <span className="arrow">→</span></a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
          {[
            ['Sourcing', '01'],
            ['Consultancy', '02'],
            ['Manufacturing', '03'],
            ['Quality', '04'],
          ].map(([l,n]) => (
            <div key={n}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--gold)', marginBottom: 8 }}>{n}</div>
              <div style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, background: 'var(--navy-700)', position: 'relative', borderLeft: '1px solid var(--line)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroMark />
        </div>
        <div style={{ position: 'absolute', top: 48, left: 48, right: 48, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.32em', color: 'var(--ink-faint)' }}>
          <span>N 25°21'</span>
          <span>E 55°23'</span>
        </div>
        <div style={{ position: 'absolute', bottom: 48, left: 48, right: 48, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.32em', color: 'var(--ink-faint)' }}>
          OPTIMUS INDUSTRIES LLC · MMXXV
        </div>
      </div>
    </section>
  );
}

window.HeroEditorial = HeroEditorial;
window.HeroCinematic = HeroCinematic;
window.HeroLedger = HeroLedger;
window.HeroMark = HeroMark;
