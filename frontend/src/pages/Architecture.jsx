// frontend/src/pages/Architecture.jsx
import "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers3,
  Code2,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Database,
  Server,
  Cloud,
  Lock,
  Zap,
} from "lucide-react";
import logo from "../assets/logo.png";
import "../App.css";

import architectureDiagram from "../assets/architecture.png";

export default function Architecture() {
  // useThemeStore is used but not defined – we'll comment it out or define it properly
  // const { isDarkMode } = useThemeStore(); // if useThemeStore exists; otherwise remove

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f8f7] dark:bg-[#07090d] text-zinc-900 dark:text-white transition-colors">
      {/* Background decorations – same as homepage */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(0,220,130,0.12),transparent_60%)] blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      {/* Header – simple navigation back to home */}
      <header className="relative z-20 pt-6 px-3 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#10141b] border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-lg">
                <img src={logo} alt="GitNest" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-xl font-black">Git<span className="text-[#00dc82]">Nest</span></span>
            </Link>
            <Link to="/" className="px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition">← Back to Home</Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00dc82]/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-[#00dc82]" />
            <span className="text-sm font-medium">System Architecture & Developer Guide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            GitNest <span className="bg-gradient-to-r from-[#00dc82] via-[#36e4da] to-[#4fd1ff] bg-clip-text text-transparent">Architecture</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            A full‑stack platform for developers to collaborate, manage repositories, issues, pull requests, and more.
          </p>
        </div>

        {/* Engineering Stack */}
        <div className="mb-20">
          <div className="group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11161d] dark:to-[#0c1017] p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00dc82]/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-[#00dc82]" />
                </div>
                <h2 className="text-3xl font-black">🛠 Engineering Stack</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Frontend</h3><p className="text-zinc-700 dark:text-zinc-300">React 18, Vite, TailwindCSS, Zustand, React Query</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Backend</h3><p className="text-zinc-700 dark:text-zinc-300">Node.js, Express.js</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Database</h3><p className="text-zinc-700 dark:text-zinc-300">MongoDB + Mongoose</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Cache</h3><p className="text-zinc-700 dark:text-zinc-300">Redis</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Real‑time</h3><p className="text-zinc-700 dark:text-zinc-300">Socket.io</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Auth</h3><p className="text-zinc-700 dark:text-zinc-300">JWT, bcrypt</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Storage</h3><p className="text-zinc-700 dark:text-zinc-300">Cloudinary, Supabase</p></div>
                <div><h3 className="text-xl font-semibold mb-3 text-[#00dc82]">DevOps</h3><p className="text-zinc-700 dark:text-zinc-300">GitHub Actions</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Project Structure + Diagram */}
        <div className="mb-8">
          <div className="group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11161d] dark:to-[#0c1017] p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00dc82]/10 flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-[#00dc82]" />
                </div>
                <h2 className="text-3xl font-black">📁 Current Project Structure</h2>
              </div>
              <pre className="bg-[#f8fbfa] dark:bg-[#0e1219] p-6 rounded-2xl overflow-x-auto text-sm font-mono text-zinc-800 dark:text-zinc-300 border border-[#dce7e3] dark:border-white/5">
{`GitNest/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validations/
│   │   └── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Profile/
│   │   │   └── NotFound/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   └── .gitignore
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
└── .gitignore`}
              </pre>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Card – slightly smaller image */}
        <div className="mb-20">
          <div className="group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11161d] dark:to-[#0c1017] p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00dc82]/10 flex items-center justify-center">
                  <Layers3 className="w-6 h-6 text-[#00dc82]" />
                </div>
                <h2 className="text-3xl font-black">📊 Architecture Diagram</h2>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={architectureDiagram}
                  alt="GitNest Architecture Diagram"
                  className="w-full max-w-2xl h-auto rounded-xl shadow-lg border border-[#e6ece9] dark:border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* System Architecture Overview */}
        <div className="mb-20">
          <div className="group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11161d] dark:to-[#0c1017] p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00dc82]/10 flex items-center justify-center">
                  <Layers3 className="w-6 h-6 text-[#00dc82]" />
                </div>
                <h2 className="text-3xl font-black">📦 System Architecture Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "CLIENT", desc: "React Frontend\nVite + TailwindCSS", icon: <Code2 className="w-6 h-6 text-[#00dc82]" /> },
                  { title: "REST API", desc: "Node.js\nExpress.js", icon: <Server className="w-6 h-6 text-[#00dc82]" /> },
                  { title: "DATABASE", desc: "MongoDB\nMongoose", icon: <Database className="w-6 h-6 text-[#00dc82]" /> },
                  { title: "CACHE & REAL‑TIME", desc: "Redis · Socket.io", icon: <Zap className="w-6 h-6 text-[#00dc82]" /> },
                  { title: "AUTH & SECURITY", desc: "JWT · bcrypt · Helmet", icon: <Lock className="w-6 h-6 text-[#00dc82]" /> },
                  { title: "STORAGE", desc: "Cloudinary · Supabase", icon: <Cloud className="w-6 h-6 text-[#00dc82]" /> },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#0e1219] rounded-2xl p-5 border border-[#e6ece9] dark:border-white/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#00dc82]/10 flex items-center justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UI Components */}
        <div className="mb-20">
          <div className="group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11161d] dark:to-[#0c1017] p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00dc82]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#00dc82]" />
                </div>
                <h2 className="text-3xl font-black">🎨 UI Components</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Empty States</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>• EmptyRepository</li>
                    <li>• EmptyIssues</li>
                    <li>• EmptyPullRequests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Cards & Stats</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>• StatCard</li>
                    <li>• RepoStars, Forks, Watchers</li>
                    <li>• RepoLanguage</li>
                    <li>• UserCard</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#00dc82]">Loading & Skeletons</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>• StatCardSkeleton</li>
                    <li>• UserCardSkeleton</li>
                    <li>• RepoSkeleton</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-[#f0fef8] dark:bg-[#0e1a14] rounded-2xl border border-[#00dc82]/20">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  All components support full dark/light mode switching via TailwindCSS.<br />
                  For complete component documentation and examples, see <code className="bg-white dark:bg-[#1e1e2a] px-2 py-1 rounded">frontend/src/components/COMPONENTS_DOCUMENTATION.md</code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/login" className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-gradient-to-r from-[#00dc82] to-[#36e4da] text-black font-bold shadow-lg hover:-translate-y-1 transition-all">
            Explore Repositories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>

      {/* Footer – fixed links to use proper navigation */}
      <footer className="relative overflow-hidden border-t border-[#dce7e3] bg-[#f8fbfa] dark:bg-[#080b11] py-14 mt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-r from-[#00dc82]/10 via-[#4fd1ff]/10 to-[#d9f99d]/10 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 items-start">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-[20px] bg-white border border-[#e4ece8] shadow-lg flex items-center justify-center p-2">
                  <img src={logo} alt="GitNest Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-black text-[34px] leading-none tracking-[-0.05em] text-[#071138] dark:text-white">
                    Git<span className="text-[#00c97b]">Nest</span>
                  </h3>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-[#7c8aa5] font-medium mt-1">Open Source Platform</p>
                </div>
              </div>
              <p className="text-[17px] leading-9 text-[#64748b] max-w-sm mb-8">
                A modern collaborative development platform inspired by GitHub and built for open source communities worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-[22px] font-black tracking-[-0.04em] text-[#071138] dark:text-white mb-8">Platform</h4>
              <div className="space-y-5 text-[#64748b] dark:text-zinc-400">
                <a href="#" className="group flex items-center gap-3 text-[17px] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Repositories
                </a>
                <a href="#" className="group flex items-center gap-3 text-[17px] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Pull Requests
                </a>
                <a href="#" className="group flex items-center gap-3 text-[17px] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  AI Workflows
                </a>
                <a href="#" className="group flex items-center gap-3 text-[17px] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Discussions
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[22px] font-black tracking-[-0.04em] text-[#071138] dark:text-white mb-8">Developers</h4>
              <div className="space-y-3">
                <a href="#" className="group flex items-center gap-3 text-[17px] text-[#64748b] dark:text-zinc-400 hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Contribution Guide
                </a>
                <a href="#" className="group flex items-center gap-3 text-[17px] text-[#64748b] dark:text-zinc-400 hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Roadmap
                </a>
                <a href="#" className="group flex items-center gap-3 text-[17px] text-[#64748b] dark:text-zinc-400 hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  API Docs
                </a>
                <Link to="/architecture" className="group flex items-center gap-3 text-[17px] text-[#64748b] dark:text-zinc-400 hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Architecture
                </Link>
                <Link to="/terms" className="group flex items-center gap-3 text-[16px] text-[#475569] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Terms & Conditions
                </Link>
                <Link to="/contact" className="group flex items-center gap-3 text-[16px] text-[#475569] hover:text-[#00b86b] transition">
                  <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-[22px] font-black tracking-[-0.04em] text-[#071138] dark:text-white mb-8 text-center flex flex-col items-center">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Tailwind", "Node.js", "MongoDB", "Express", "Socket.io", "JWT", "AI"].map(tech => (
                  <div key={tech} className="w-full px-4 py-3 rounded-2xl border border-[#e6ece9] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-[15px] font-medium text-[#334155] flex items-center gap-3 justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00c97b]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#dce7e3] dark:border-zinc-800 flex justify-center items-center">
            <p className="text-[15px] text-[#64748b] dark:text-zinc-400">© 2026 GitNest. Built for open-source collaboration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}