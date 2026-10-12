import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, Mail, Github, Linkedin, Sparkles, Calculator, BarChart3,
  Brain, Receipt, ShieldCheck, TrendingUp, GraduationCap, Award,
  Send, CheckCircle2, Star, Quote, BookOpen, Database, Briefcase, Cpu,
} from "lucide-react";
import heroImg from "../assets/hero-portrait.jpg";
import aboutImg from "../assets/about-illustration.jpg";
import eduImg from "../assets/education-portrait.jpg";
// --- Impor gambar proyek ---
import proanalystImg from "../assets/project-proanalyst.png";
import aureliaImg from "../assets/project-aurelia.png";
// Gunakan proanalystImg sebagai placeholder sementara untuk AccuTax jika project-accutax belum ada
const accutaxImg = proanalystImg;

export const Route = createFileRoute("/")({ component: PortfolioPage });

function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]">
      <div className="bg-white/85 backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_30px_-10px_rgba(138,141,245,0.2)] border border-white">
        <a href="#home" className="font-display font-bold text-lg flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>S</span>
          <span>Syafira<span className="gradient-text">.</span></span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/70">
          {["About","Expertise","Projects","Education","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

function FloatingBadge({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`absolute bg-white rounded-full px-4 py-2 text-xs font-semibold shadow-[0_10px_30px_-10px_rgba(138,141,245,0.35)] float-anim ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function FloatingCard({ icon: Icon, title, sub, className = "", delay = 0, gradient }: { icon: any; title: string; sub: string; className?: string; delay?: number; gradient: string }) {
  return (
    <div className={`absolute bg-white rounded-2xl p-3 flex items-center gap-3 shadow-[0_14px_40px_-12px_rgba(138,141,245,0.35)] float-anim ${className}`} style={{ animationDelay: `${delay}s` }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: gradient }}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="pr-2">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{sub}</div>
        <div className="text-sm font-bold">{title}</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-warm)" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="fade-up lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-xs font-semibold text-primary mb-6 border border-white">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to my portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.05] text-foreground">
            Hi, I'm <span className="gradient-text">Syafira Daniela Nahuway</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-foreground/70 font-display">
            Accounting, Taxation & Data Analytics Enthusiast
          </p>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
            I combine accounting knowledge, taxation expertise, data analytics, and technology
            to create digital solutions that transform complex manual work into efficient, intelligent systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-gradient px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="bg-white hover:-translate-y-0.5 transition-all px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 border border-border/60 shadow-sm">
              Contact Me <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#8A8DF5","#A98BE7","#F58DB8","#F7C3D8"].map(c => (
                <div key={c} className="w-9 h-9 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <div className="text-muted-foreground text-xs">Driven by curiosity & precision</div>
            </div>
          </div>
        </div>

        {/*
          Container untuk animasi foto.
          Di layar kecil (mobile), kita gunakan `scale` untuk mengecilkan seluruh elemen secara proporsional.
        */}
        <div className="relative h-[420px] lg:h-[560px] flex items-center justify-center lg:scale-100 scale-[0.75] -mx-10 -my-10 lg:m-0 lg:order-2">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 560" fill="none">
            <ellipse cx="260" cy="290" rx="220" ry="240" stroke="url(#g1)" strokeWidth="2" strokeDasharray="2 8" />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="500" y2="560">
                <stop offset="0" stopColor="#8A8DF5" />
                <stop offset="1" stopColor="#F58DB8" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-square rounded-[45%_55%_60%_40%/45%_50%_50%_55%] overflow-hidden shadow-[0_30px_80px_-20px_rgba(138,141,245,0.4)]" style={{ background: "var(--gradient-soft)" }}>
            <img src={heroImg} alt="Syafira Daniela Nahuway" className="w-full h-full object-cover" width={1024} height={1024} />
          </div>

          <FloatingBadge className="top-4 left-2" delay={0}>🧾 Tax Technology</FloatingBadge>
          <FloatingBadge className="top-16 right-0" delay={1}>📊 Data Analytics</FloatingBadge>
          <FloatingBadge className="bottom-32 -left-2" delay={2}>📈 Financial Reporting</FloatingBadge>
          <FloatingBadge className="bottom-16 right-4" delay={1.5}>🤖 AI Solutions</FloatingBadge>

          <FloatingCard icon={Calculator} sub="Project" title="AccuTax" gradient="var(--gradient-primary)" className="-left-4 bottom-44" delay={0.5} />
          <FloatingCard icon={Brain} sub="AI Engine" title="Aurelia.ai" gradient="var(--gradient-warm)" className="-right-2 top-1/2" delay={1.8} />
          <FloatingCard icon={BarChart3} sub="Dashboard" title="Financial BI" gradient="var(--gradient-cool)" className="left-1/2 -translate-x-1/2 -bottom-2" delay={2.5} />
        </div>
      </div>
    </section>
  );
}

/**
 * A component that triggers a 'fade-up' animation when it scrolls into view.
 */
function AnimateOnScroll({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return <div ref={ref} className={`${className} ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}

function SectionTitle({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className={`inline-flex px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${light ? "bg-white/25 text-white backdrop-blur" : "bg-white text-primary shadow-sm"}`}>{eyebrow}</div>
      <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${light ? "text-white/90" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-60 blur-2xl" style={{ background: "var(--gradient-soft)" }} />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(138,141,245,0.3)]" style={{ background: "linear-gradient(180deg,#F8EBEF,#FFFFFF)" }}>
            <img src={aboutImg} alt="Illustration of analytical work" className="w-full h-auto" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(138,141,245,0.3)] flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="font-bold text-sm">D4 Student</div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex px-4 py-1.5 rounded-full bg-secondary text-xs font-semibold uppercase tracking-wider text-primary mb-4">About Me</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Why I Love <span className="gradient-text">Building Solutions</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>I'm currently pursuing a D4 degree in Accounting and Taxation. My passion lies in combining accounting, taxation, data analytics, and technology to solve real-world business problems.</p>
            <p>I enjoy transforming repetitive manual processes into efficient digital systems through automation, data-driven insights, and innovative thinking.</p>
            <p>Technology allows us to focus less on routine tasks and more on creating value, making better decisions, and driving meaningful impact.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { v: "D4", l: "Degree Track" },
              { v: "10+", l: "Skills" },
              { v: "3+", l: "Projects" },
            ].map(s => (
              <div key={s.l} className="bg-secondary/50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const expertise = [
  { title: "Taxation", icon: ShieldCheck, items: ["Tax Planning", "Tax Compliance", "Tax Calculation", "Tax Reporting"], gradient: "var(--gradient-primary)" },
  { title: "Accounting", icon: Receipt, items: ["Financial Reporting", "Financial Analysis", "Auditing", "Business Performance Analysis"], gradient: "var(--gradient-cool)" },
  { title: "Data Analytics", icon: BarChart3, items: ["Power BI", "SQL", "Dashboard Design", "Business Intelligence"], gradient: "var(--gradient-warm)" },
];

function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(at 20% 20%, rgba(255,255,255,0.4) 0, transparent 50%), radial-gradient(at 80% 80%, rgba(255,255,255,0.3) 0, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto relative">
        <AnimateOnScroll className="fade-up">
          <SectionTitle light eyebrow="My Expertise" title={<>The disciplines I bring together</>} subtitle="Three core pillars working as one integrated practice." />
        </AnimateOnScroll>
        <div className="mt-14 md:grid md:grid-cols-3 md:gap-7 flex overflow-x-auto snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide">
          {expertise.map((e, i) => (
            <AnimateOnScroll key={e.title} delay={i * 150} className="flex-none w-[85%] md:w-auto snap-center">
              <div className="bg-white rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: e.gradient }}>
                <e.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-5">{e.title}</h3>
              <ul className="space-y-3">
                {e.items.map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm text-foreground/75">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export const projects = [
  { slug: "accutax", name: "AccuTax", category: "Tax Technology", desc: "Smart tax calculation platform designed to simplify tax compliance and calculations.", features: ["Tax Calculator", "Tax Estimation", "Tax Reporting"], icon: Calculator, image: accutaxImg },
  { slug: "the-pro-analyst", name: "The Pro Analyst", category: "Financial Reporting", desc: "Interactive financial reporting dashboard for decision-making and business analysis.", features: ["KPI Dashboard", "Financial Ratios", "Trend Analysis"], icon: TrendingUp, image: proanalystImg },
  { slug: "aurelia-ai", name: "Aurelia.ai", category: "AI & Data Analytics", desc: "AI-powered platform helping analysts automate repetitive analytical tasks and generate faster insights.", features: ["Data Cleaning", "AI Insights", "Reporting Automation"], icon: Brain, image: aureliaImg },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="fade-up">
          <SectionTitle eyebrow="Featured Projects" title={<>Projects That Reflect <span className="gradient-text">My Passion</span></>} subtitle="Selected work where finance, data, and technology meet." />
        </AnimateOnScroll>
        <div className="mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex overflow-x-auto snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.name} delay={i * 150} className="flex-none w-[85%] md:w-auto snap-center h-full">
              <article className="bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(138,141,245,0.3)] hover:shadow-[0_20px_50px_-20px_rgba(138,141,245,0.5)] border border-border/40 group h-full flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {p.category}
                </div>
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-bold text-2xl">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-2">
                  {p.features.map(f => (
                    <span key={f} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">{f}</span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                  Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 px-6" style={{ background: "#F8EBEF" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex px-4 py-1.5 rounded-full bg-white text-xs font-semibold uppercase tracking-wider text-primary mb-4 shadow-sm">Education</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Building deep, applied expertise that spans both the language of business and the tools of modern analytics.
          </p>
          <div className="mt-8 bg-white rounded-3xl p-7 shadow-[0_20px_50px_-15px_rgba(138,141,245,0.25)]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">D4 Accounting and Taxation</h3>
                <p className="text-primary font-semibold text-sm mt-1">Politeknik Negeri Lampung</p>
                <p className="text-sm text-muted-foreground mt-3">Focus on Accounting, Taxation, Business Intelligence, Data Analytics, and Technology Innovation.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Accounting","Taxation","Business Intelligence","Data Analytics","Tech Innovation"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 560" fill="none">
            <rect x="40" y="40" width="420" height="480" rx="200" stroke="url(#g2)" strokeWidth="2" strokeDasharray="8 8" />
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="500" y2="560">
                <stop offset="0" stopColor="#F58DB8" />
                <stop offset="1" stopColor="#8A8DF5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative mx-auto w-[80%] aspect-[4/5] rounded-[45%_55%_55%_45%/40%_45%_55%_60%] overflow-hidden shadow-[0_30px_80px_-20px_rgba(245,141,184,0.4)]" style={{ background: "var(--gradient-warm)" }}>
            <img src={eduImg} alt="Syafira studying" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="absolute top-6 -left-2 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold">Lifelong Learner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const achievements = [
  { title: "Academic Projects", desc: "Coursework and applied case studies in accounting and taxation.", icon: GraduationCap, gradient: "var(--gradient-primary)" },
  { title: "Tax Projects", desc: "Smart tax calculation tools and compliance workflows.", icon: ShieldCheck, gradient: "var(--gradient-cool)" },
  { title: "Data Analytics Projects", desc: "Power BI dashboards, SQL reporting, and BI deliverables.", icon: Database, gradient: "var(--gradient-warm)" },
  { title: "Technology Projects", desc: "AI assistants and automation tools for analysts.", icon: Cpu, gradient: "var(--gradient-soft)" },
];

function Achievements() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <div className="max-w-7xl mx-auto relative">
        <AnimateOnScroll className="fade-up">
          <SectionTitle light eyebrow="Achievements" title={<>Certifications & Highlights</>} subtitle="A growing portfolio across academic, tax, data and tech work." />
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {achievements.map((a, i) => (
            <AnimateOnScroll key={a.title} delay={i * 150}>
              <div className="bg-white rounded-[1.75rem] p-7 hover:-translate-y-2 transition-all duration-300 shadow-xl h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: a.gradient }}>
                <a.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-bold text-primary">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Rina Pratiwi", role: "Senior Tax Consultant", quote: "Syafira combines technical precision with genuine curiosity. Her tax calculator project showed unusual maturity for a student.", color: "#8A8DF5" },
  { name: "Andi Mahendra", role: "Data Analytics Lead", quote: "Her dashboards turn raw numbers into clear stories. She thinks like an analyst and ships like a developer.", color: "#A98BE7" },
  { name: "Dr. Lestari", role: "Lecturer, Polinela", quote: "One of the most driven students I've taught. She bridges accounting and technology with confidence.", color: "#F58DB8" },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="fade-up">
          <SectionTitle eyebrow="Kind Words" title={<>What People <span className="gradient-text">Say About Me</span></>} subtitle="Feedback from mentors, peers, and collaborators along the journey." />
        </AnimateOnScroll>
        <div className="mt-14 md:grid md:grid-cols-3 md:gap-7 flex overflow-x-auto snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 150} className="flex-none w-[85%] md:w-auto snap-center">
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_-20px_rgba(138,141,245,0.25)] border border-border/40 hover:-translate-y-2 transition-all duration-300 relative h-full">
              <Quote className="absolute top-6 right-6 w-10 h-10 opacity-10" style={{ color: t.color }} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: t.color }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "#F8EBEF" }}>
      <div className="max-w-6xl mx-auto rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(138,141,245,0.5)]" style={{ background: "var(--gradient-primary)" }}>
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(at 10% 0%, rgba(255,255,255,0.5) 0, transparent 50%), radial-gradient(at 90% 100%, rgba(255,255,255,0.4) 0, transparent 50%)" }} />
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="text-white">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-semibold uppercase tracking-wider mb-5">Get in touch</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Let's Connect</h2>
            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              Interested in accounting, taxation, data analytics, or digital innovation?
              Let's collaborate and build meaningful solutions together.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "syafirafira08162@gmail.com", href: "mailto:syafirafira08162@gmail.com" },
                { icon: Linkedin, label: "syafira daniela nahuway", href: "https://www.linkedin.com/in/syafira-daniela-nahuway-1706a1327?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: Github, label: "@syafiradaniela", href: "https://github.com/miyuraa1001" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/95 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            action="https://formspree.io/f/mlgyvzaq" // <-- Ganti dengan ID Formspree Anda
            method="POST"
            className="bg-white rounded-[2rem] p-8 space-y-4 shadow-2xl"
          >
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
              <input required name="name" className="w-full px-4 py-3 rounded-2xl bg-secondary/40 border border-transparent focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <input required type="email" name="email" className="w-full px-4 py-3 rounded-2xl bg-secondary/40 border border-transparent focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-2xl bg-secondary/40 border border-transparent focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none text-sm" placeholder="Tell me about your idea..." />
            </div>
            <button type="submit" className="btn-gradient w-full py-3.5 rounded-2xl font-semibold inline-flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>S</span>
              Syafira<span className="gradient-text">.</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Accounting & Taxation Student. Data Analytics Enthusiast. Building thoughtful tools at the intersection of finance and technology.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About","Expertise","Projects","Education","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/syafira-daniela-nahuway-1706a1327?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
                { href: "https://github.com/miyuraa1001", icon: Github },
                { href: "mailto:syafirafira08162@gmail.com", icon: Mail }
              ].map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <l.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Open to internships, collaborations & mentorship.</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Syafira Daniela Nahuway. All rights reserved.</p>
          <p className="flex items-center gap-1">Crafted with <Briefcase className="w-3 h-3 text-primary" /> precision & care.</p>
        </div>
      </div>
    </footer>
  );
}

function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
