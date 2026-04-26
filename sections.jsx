/* Optimus Industries — Content Sections */
const { useState: useS, useEffect: useE, useRef: useR } = React;

// ========== ABOUT ==========
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">02 — ABOUT</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 className="section-title">
              A consultancy built on <em>a decade and a half</em> of operational leadership in regulated industry.
            </h2>

            <div style={{ marginTop: 48, display: 'grid', gap: 20 }}>
              {[
                ['25+', 'Countries of market experience'],
                ['7+', 'Annual global exhibitions & forums'],
                ['15', 'Years in pharmaceutical operations'],
              ].map(([v,l]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 20, borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                  <div className="display" style={{ fontSize: 44, color: 'var(--gold)', minWidth: 100 }}>{v}</div>
                  <div style={{ fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 20 }}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-dim)', marginBottom: 24 }}>
              Optimus Industries LLC was founded in Sharjah, United Arab Emirates, to serve as a trusted intermediary between Gulf-market manufacturers and the specialist suppliers, processes and quality frameworks that make modern industry possible.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-dim)', marginBottom: 24 }}>
              The firm is led by a Chief Operating Officer & Partner with a decade and a half of pharmaceutical-industry leadership — progressing from Purchase Manager to COO across international supplier networks, regulatory navigation, and market entry in more than 25 countries spanning the GCC, South Asia, Europe, Africa and the Americas.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-dim)', marginBottom: 32 }}>
              We operate as a sister entity to <span style={{ color: 'var(--gold)' }}>KAD Industries</span> (Wyoming, USA) and KAD Enterprises — alongside a broader group engaged in pharmaceutical and food industries, pharmaceutical distribution and marketing agencies. A family of businesses united by one idea: procurement, marketing and capability should be engineered, not transactional.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 32, border: '1px solid var(--line)', background: 'var(--navy-800)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Quality Frameworks</div>
                <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.8 }}>
                  WHO GMP · USFDA<br/>
                  Saudi FDA (SFDA)<br/>
                  CAPA · ISO 9001<br/>
                  Lean Six Sigma methodology
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Jurisdiction</div>
                <div style={{ fontSize: 14, color: 'rgb(244, 236, 216)', lineHeight: 1.8, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Shams Free Zone<br/>
                  Sharjah, UAE<br/>
                  Group: Pharma · Food · Distribution · Marketing<br/>
                  Reach: 25+ countries
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies strip */}
        <div style={{ marginTop: 80, paddingTop: 48, borderTop: '1px solid var(--line)' }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Core competencies & strategic strengths</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 0', fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.9 }}>
            {[
              'Pharmaceutical Manufacturing', 'WHO GMP / USFDA / SFDA Compliance', 'Investment Strategy',
              'International Market Expansion (25+ countries)', 'Lean Six Sigma methodology', 'Regulatory Navigation',
              'Supply Chain Optimisation', 'Product Registration & Dossier Filing', 'Business Development',
              'Marketing & Agency Partnerships', 'Sales Channel Development', 'Tender & Private-Market Strategy',
              'Financial Oversight & P&L Management', 'Government Relations & Tenders', 'AI & Industry 4.0 Awareness',
              'Vendor Management & Global Sourcing', 'Team Leadership & Workforce Development', 'Strategic Planning',
            ].map((c, i, a) => (
              <React.Fragment key={c}>
                <span style={{ color: 'var(--ink)' }}>{c}</span>
                {i < a.length - 1 && <span style={{ color: 'var(--gold)', padding: '0 14px' }}>·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== SERVICES ==========
const SERVICES = [
  {
    num: '01',
    title: 'Sourcing & Procurement',
    sub: 'Source identification, qualification, development.',
    body: 'End-to-end sourcing: from market mapping and supplier qualification to contract negotiation, logistics orchestration and landed-cost optimisation across pharmaceutical, nutraceutical and industrial categories.',
    bullets: ['Vendor audit & qualification', 'RFQ & negotiation', 'Import / export facilitation', 'Landed-cost engineering'],
  },
  {
    num: '02',
    title: 'Manufacturing Solutions',
    sub: 'Capability design for new & existing operations.',
    body: 'For start-up projects and existing plants alike — plant layout guidance, process selection, equipment specification, contract manufacturing partnerships, and scale-up from pilot to commercial volumes.',
    bullets: ['Plant & line design review', 'Technology partner matching', 'Contract manufacturing', 'Scale-up advisory'],
  },
  {
    num: '03',
    title: 'Quality & Process Excellence',
    sub: 'DMAIC-led process excellence.',
    body: 'Lean Six Sigma methodology applied to quality systems, yield improvement, deviation reduction and regulatory readiness — with measurable targets at every stage gate and a firm command of WHO GMP, USFDA and SFDA frameworks.',
    bullets: ['Quality system design', 'DMAIC improvement projects', 'CAPA & deviation control', 'GMP / FDA readiness'],
  },
  {
    num: '04',
    title: 'Regulatory & Market Entry',
    sub: 'Dossiers, registrations, government relations.',
    body: 'Navigation of complex regulatory landscapes — product registration, dossier filing, agency partnerships and tender management. A trusted bridge between manufacturers and ministries across 25+ active markets.',
    bullets: ['Product registration & dossiers', 'Regulatory submissions', 'Government tenders', 'Agency partnerships'],
  },
  {
    num: '05',
    title: 'Marketing & Market Development',
    sub: 'Channels, agencies, brand presence.',
    body: 'End-to-end marketing and go-to-market strategy — sales channel design, agency and distributor partnerships, private-market positioning and government-tender strategy for pharmaceutical, nutraceutical and food-grade portfolios.',
    bullets: ['Sales channel design', 'Agency & distributor partnerships', 'Brand & product launch', 'Private & tender-market strategy'],
  },
  {
    num: '06',
    title: 'Business Consultancy',
    sub: 'Capability enhancement for operators.',
    body: 'Strategic advisory for operators entering new categories, scaling capacity, or expanding across GCC and emerging markets — plus investment-opportunity assessment and AI / Industry 4.0 transformation readiness.',
    bullets: ['Market entry strategy', 'Capacity scale-up', 'Investment advisory', 'AI & Industry 4.0 readiness'],
  },
];

function Services() {
  const [active, setActive] = useS(0);
  return (
    <section id="services" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,27,46,0.5) 40%, transparent 100%)' }}>
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">03 — SERVICES</span>
        </div>

        <h2 className="section-title" style={{ marginBottom: 80 }}>
          Four disciplines,<br/><em>one operating partner.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            {SERVICES.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '24px 0',
                  background: 'transparent',
                  border: 'none', borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                  color: active === i ? 'var(--gold)' : 'var(--ink-dim)',
                  transition: 'color 0.25s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span className="mono" style={{ fontSize: 11, color: active === i ? 'var(--gold)' : 'var(--ink-faint)' }}>{s.num}</span>
                  <span className="display" style={{ fontSize: 28, color: 'inherit' }}>{s.title}</span>
                  <span style={{ marginLeft: 'auto', fontSize: 18, color: 'inherit', transform: active === i ? 'translateX(8px)' : 'none', transition: 'transform 0.25s' }}>→</span>
                </div>
              </button>
            ))}
          </div>

          <div className="frame" style={{ padding: 48, minHeight: 440, background: 'var(--navy-800)' }}>
            <div className="frame-inner" />
            <div style={{ position: 'relative' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', marginBottom: 20 }}>
                SERVICE / {SERVICES[active].num}
              </div>
              <h3 className="display" style={{ fontSize: 44, color: 'var(--ink)', marginBottom: 12, fontStyle: 'italic' }}>
                {SERVICES[active].title}
              </h3>
              <div style={{ fontSize: 15, color: 'var(--gold)', marginBottom: 32, letterSpacing: '0.02em' }}>
                {SERVICES[active].sub}
              </div>
              <div className="hairline-gold" style={{ width: 80, marginBottom: 32 }} />
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-dim)', marginBottom: 32 }}>
                {SERVICES[active].body}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {SERVICES[active].bullets.map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: '1px solid var(--line)' }}>
                    <span className="diamond" style={{ width: 5, height: 5 }} />
                    <span style={{ fontSize: 13, color: 'var(--ink)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== CAPABILITIES (product categories) ==========
const CATEGORIES = [
  { t: 'Pharmaceutical Raw Materials', d: 'APIs, excipients and intermediates sourced from qualified, regulator-compliant manufacturers for formulation and contract manufacturing.', tag: 'PHARMA' },
  { t: 'Nutraceutical Ingredients', d: 'Vitamins, botanical extracts, amino acids and functional blends — for dietary supplement and health food production.', tag: 'NUTRA' },
  { t: 'Laboratory Chemicals & Reagents', d: 'Analytical-grade chemicals, solvents and reference standards for QC laboratories, research institutions and testing facilities.', tag: 'LAB' },
  { t: 'Industrial Enzymes & Biotech', d: 'Specialty enzymes for food, detergent, pharma and industrial applications — alongside fermentation-derived biotech inputs.', tag: 'BIOTECH' },
  { t: 'Food-Grade Specialty Inputs', d: 'Food-grade additives, stabilisers, flavour systems and functional ingredients meeting GCC and international standards.', tag: 'FOOD' },
  { t: 'Packaging & Ancillaries', d: 'Primary and secondary packaging systems sourced to specification — from pharmaceutical-grade to industrial applications.', tag: 'PACK' },
];

function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">04 — CAPABILITIES</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80, alignItems: 'end' }}>
          <h2 className="section-title">
            Categories we <em>source & qualify.</em>
          </h2>
          <p className="section-lede">
            Our procurement network spans regulated manufacturers across India, Europe, China and the GCC — selected for quality-system maturity, regulatory posture and commercial reliability.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {CATEGORIES.map((c, i) => (
            <div key={i} className="cap-card" style={{
              background: 'var(--navy-800)', padding: 40, minHeight: 300,
              display: 'flex', flexDirection: 'column',
              transition: 'background 0.3s',
              cursor: 'default',
              position: 'relative', overflow: 'hidden'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-700)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-800)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '0.28em' }}>
                  {String(i + 1).padStart(2, '0')} / {c.tag}
                </span>
                <span className="diamond" style={{ width: 6, height: 6 }} />
              </div>

              <h3 className="display" style={{ fontSize: 28, color: 'var(--ink)', marginBottom: 20, lineHeight: 1.1 }}>
                {c.t}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.65, marginBottom: 'auto' }}>
                {c.d}
              </p>
              <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Enquire →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== SIX SIGMA DMAIC ==========
const DMAIC = [
  { l: 'D', w: 'Define', d: 'Frame the problem, customer CTQs, project charter and measurable outcome targets.' },
  { l: 'M', w: 'Measure', d: 'Baseline current performance with validated measurement systems and data integrity checks.' },
  { l: 'A', w: 'Analyse', d: 'Root-cause analysis — statistical tools, process maps, FMEA — to isolate vital few drivers.' },
  { l: 'I', w: 'Improve', d: 'Design, pilot and validate interventions with DOE and controlled experimentation.' },
  { l: 'C', w: 'Control', d: 'Lock in gains with SOPs, control plans, SPC and sustained governance.' },
];

function SixSigma() {
  return (
    <section id="sigma" style={{ background: 'var(--navy-800)' }}>
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">05 — METHODOLOGY</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}>
          <h2 className="section-title">
            The <em>DMAIC</em> framework — applied to every engagement.
          </h2>
          <p className="section-lede">
            Process excellence is how we run projects. Every sourcing qualification, manufacturing review and quality programme is structured through the DMAIC cycle, with explicit targets at each phase gate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, border: '1px solid var(--line)' }}>
          {DMAIC.map((s, i) => (
            <div key={s.l} style={{
              padding: 36,
              borderRight: i < 4 ? '1px solid var(--line)' : 'none',
              background: 'var(--navy-700)',
              position: 'relative',
              display: 'flex', flexDirection: 'column', gap: 20
            }}>
              <div className="display" style={{ fontSize: 96, color: 'var(--gold)', lineHeight: 0.9, fontWeight: 300 }}>
                {s.l}
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 4 }}>PHASE {i + 1}</div>
                <div className="display" style={{ fontSize: 22, color: 'var(--ink)', fontStyle: 'italic', marginBottom: 16 }}>{s.w}</div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-dim)' }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Targets strip */}
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, padding: '48px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          {[
            ['3.4 DPMO', 'Six Sigma defect target'],
            ['99.9997%', 'Process yield goal'],
            ['< 1.5σ', 'Long-term drift allowance'],
            ['4.5σ min', 'Project intake threshold'],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="display" style={{ fontSize: 36, color: 'var(--gold)', marginBottom: 8 }}>{v}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== REACH ==========
function Reach() {
  const regions = [
    ['GCC & Middle East', 'UAE · Saudi Arabia · Oman · Kuwait · Qatar · Bahrain · Yemen · Lebanon · Syria · Jordan · Egypt · Tunisia · Algeria'],
    ['South & Central Asia', 'India · Pakistan · Bangladesh · Sri Lanka · Turkey'],
    ['Africa', 'Somalia · Sudan · Ethiopia · Algeria · Tunisia · Egypt'],
    ['Americas & Beyond', 'USA · Colombia · Guatemala · Europe · China · Indonesia'],
  ];

  const exhibitions = [
    ['CPHI Worldwide', 'Milan · Barcelona · Frankfurt · Paris', 'Annual'],
    ['CPHI India', 'New Delhi', 'Annual'],
    ['CPHI China', 'Shanghai', 'Attended'],
    ['CPHI Saudi Arabia', 'Riyadh', 'Attended'],
    ['Arab Health', 'Dubai, UAE', 'Annual'],
    ['Pharmaconex', 'Cairo, Egypt', 'Attended'],
  ];

  return (
    <section id="reach">
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">06 — REACH</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: 24 }}>
          Between the buyer and<br/>
          <em>the global source.</em>
        </h2>
        <p className="section-lede" style={{ marginBottom: 64 }}>
          Active market experience across 25+ countries — earned through company registrations, product dossiers, government tenders and a decade and a half of partnerships built face-to-face.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
          {regions.map(([r, list], i) => (
            <div key={r} style={{
              padding: '36px 28px',
              borderRight: i < 3 ? '1px solid var(--line)' : 'none',
              borderBottom: '1px solid var(--line)',
            }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '0.24em', marginBottom: 16 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="display" style={{ fontSize: 26, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.15 }}>{r}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.7 }}>{list}</div>
            </div>
          ))}
        </div>

        {/* Exhibitions */}
        <div style={{ marginTop: 96 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>International exhibitions & industry conferences</div>
          <h3 className="display" style={{ fontSize: 36, color: 'var(--ink)', marginBottom: 12, maxWidth: 760, lineHeight: 1.15 }}>
            Active global <em style={{ color: 'var(--gold)' }}>exhibitor & delegate</em> since 2019.
          </h3>
          <p style={{ fontSize: 16, color: 'var(--ink-dim)', maxWidth: 720, marginBottom: 40, lineHeight: 1.7 }}>
            Attending 7+ annual exhibitions to forge partnerships, scout investment opportunities and stay at the forefront of pharmaceutical and nutraceutical industry trends.
          </p>

          <div style={{ border: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 0.8fr', padding: '16px 28px', borderBottom: '1px solid var(--line)', background: 'var(--navy-800)' }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.24em', color: 'var(--gold)' }}>EXHIBITION</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.24em', color: 'var(--gold)' }}>LOCATIONS</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.24em', color: 'var(--gold)', textAlign: 'right' }}>FREQUENCY</div>
            </div>
            {exhibitions.map(([name, loc, freq], i) => (
              <div key={name} style={{
                display: 'grid', gridTemplateColumns: '1.2fr 2fr 0.8fr',
                padding: '22px 28px',
                borderBottom: i < exhibitions.length - 1 ? '1px solid var(--line)' : 'none',
                alignItems: 'center',
              }}>
                <div className="display" style={{ fontSize: 20, color: 'var(--ink)' }}>{name}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-dim)' }}>{loc}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textAlign: 'right' }}>{freq}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== CONTACT ==========
function Contact() {
  const [form, setForm] = useS({ name: '', org: '', email: '', subject: 'Sourcing', msg: '' });
  const [sent, setSent] = useS(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ background: 'var(--navy-800)' }}>
      <div className="container">
        <div className="section-label">
          <span className="diamond" />
          <span className="section-num">07 — CONTACT</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <h2 className="section-title">
              Begin a <em>dialogue.</em>
            </h2>
            <p className="section-lede" style={{ marginBottom: 48 }}>
              Tell us what you are sourcing, scaling or building. We reply within two business days with a considered response — not a sales script.
            </p>

            <div style={{ display: 'grid', gap: 32 }}>
              <ContactLine label="Registered office" value={<>Shams Free Zone<br/>Sharjah · United Arab Emirates</>} />
              <ContactLine label="General enquiries" value={<a href="mailto:info@optimus-industries.com" style={{ color: 'var(--ink)', textDecoration: 'none' }}>info@optimus-industries.com</a>} />
              <ContactLine label="Operations" value={<a href="mailto:operation@optimus-industries.com" style={{ color: 'var(--ink)', textDecoration: 'none' }}>operation@optimus-industries.com</a>} />
              <ContactLine label="Phone / WhatsApp" value={<a href="tel:+971541771760" style={{ color: 'var(--ink)', textDecoration: 'none' }}>+971 54 177 1760</a>} />
            </div>
          </div>

          <form onSubmit={submit} className="frame" style={{ padding: 40, background: 'var(--navy-700)', position: 'relative' }}>
            <div className="frame-inner" />
            <div style={{ position: 'relative', display: 'grid', gap: 24 }}>
              <FormRow>
                <Field label="Full name" value={form.name} onChange={v => setForm({ ...form, name: v })} required />
                <Field label="Organisation" value={form.org} onChange={v => setForm({ ...form, org: v })} />
              </FormRow>
              <Field label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} required />
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Enquiry type</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Sourcing', 'Consultancy', 'Manufacturing', 'Quality', 'Other'].map(t => (
                    <button type="button" key={t} onClick={() => setForm({ ...form, subject: t })}
                      style={{
                        padding: '10px 16px',
                        border: `1px solid ${form.subject === t ? 'var(--gold)' : 'var(--line)'}`,
                        background: form.subject === t ? 'rgba(201,162,74,0.08)' : 'transparent',
                        color: form.subject === t ? 'var(--gold)' : 'var(--ink-dim)',
                        fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                        cursor: 'pointer', transition: 'all 0.2s'
                      }}>{t}</button>
                  ))}
                </div>
              </div>
              <Field label="Brief" type="textarea" value={form.msg} onChange={v => setForm({ ...form, msg: v })} />

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {sent ? '✓ Message sent' : <>Send enquiry <span className="arrow">→</span></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ label, value }) {
  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 18, color: 'var(--ink)', fontFamily: 'var(--display)' }}>{value}</div>
    </div>
  );
}
function FormRow({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>{children}</div>;
}
function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <label style={{ display: 'block' }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{label}{required && <span style={{ color: 'var(--gold)' }}> *</span>}</div>
      {type === 'textarea' ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={4}
          style={fieldStyle} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
          style={fieldStyle} />
      )}
    </label>
  );
}
const fieldStyle = {
  width: '100%', padding: '14px 16px',
  background: 'var(--navy-900)', border: '1px solid var(--line)',
  color: 'var(--ink)', fontFamily: 'var(--body)', fontSize: 14,
  outline: 'none', transition: 'border-color 0.2s',
  resize: 'vertical',
};

// ========== FOOTER ==========
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img src="assets/optimus-mark.png" alt="" style={{ width: 48, height: 48 }} />
              <div>
                <div className="display" style={{ fontSize: 22, color: 'var(--gold)', letterSpacing: '0.2em' }}>OPTIMUS</div>
                <div style={{ fontSize: 9, letterSpacing: '0.32em', color: 'var(--ink-faint)' }}>INDUSTRIES LLC</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--ink-dim)', maxWidth: 360, lineHeight: 1.7 }}>
              Sourcing, manufacturing and quality consultancy — registered in Shams Free Zone, Sharjah, UAE.
            </p>
          </div>
          <FooterCol title="Company" items={['About', 'Services', 'Capabilities', 'Methodology']} />
          <FooterCol title="Group" items={['KAD Industries (USA)', 'KAD Enterprises', 'Alwajer (GCC)']} />
          <FooterCol title="Contact" items={['info@optimus-industries.com', 'operation@optimus-industries.com', '+971 54 177 1760', 'Sharjah, UAE']} />
        </div>

        <div style={{ paddingTop: 32, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.24em' }}>
            © MMXXVI OPTIMUS INDUSTRIES LLC · ALL RIGHTS RESERVED
          </div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.24em' }}>
            SHARJAH · UAE · N 25°21′ E 55°23′
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 10 }}>
        {items.map(i => <li key={i} style={{ fontSize: 13, color: 'var(--ink-dim)' }}>{i}</li>)}
      </ul>
    </div>
  );
}

Object.assign(window, { About, Services, Capabilities, SixSigma, Reach, Contact, Footer });
