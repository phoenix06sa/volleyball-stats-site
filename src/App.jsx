import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import TikTokEmbed from './components/TikTokEmbed.jsx'
import InstagramEmbed from './components/InstagramEmbed.jsx'
import { Mail, Play, Trophy, ArrowRight, Volleyball } from 'lucide-react'


export default function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />

      {/* Hero (spicier) */}
      <section className="relative overflow-hidden">
        {/* soft blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: headline & actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Animated gradient first line */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600
                     bg-[length:200%_100%] animate-gradient-x"
              >
                Libby Askevich
              </span>

              <span className="relative block">
                {/* outline layer */}
                <span
                  className="absolute inset-0 select-none"
                  aria-hidden
                  style={{ WebkitTextStroke: "6px rgba(2,6,23,0.08)" }}
                >
                  Volleyball
                </span>
                {/* animated gradient fill */}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 bg-[length:200%_100%] animate-gradient-x">
                  Volleyball
                </span>
              </span>

            </div>

            {/* badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-slate-200 text-sm font-medium">
                Austin Skyline Volleyball · #4
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-slate-200 text-sm font-medium inline-flex items-center gap-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                13u National Champions
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 ring-1 ring-slate-200 text-sm">
                Libero · Class of 2030
              </span>
            </div>

            {/* actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#highlights"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white shadow-md">
                <Play className="w-4 h-4" />
                Watch Highlights
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white/70 backdrop-blur">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </motion.div>

          {/* Right: photo with glow + floating volleyball */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[1.25rem] bg-gradient-to-br from-sky-300/40 via-transparent to-indigo-300/40 blur-xl" />
            <div className="relative rounded-2xl p-1 bg-white/70 backdrop-blur shadow-xl ring-1 ring-black/5">
              <img
                src="/libby-placeholder.jpg"
                alt="Libby Askevich celebrating with team"
                className="rounded-xl w-full object-cover aspect-[4/3] bg-slate-200"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 text-[11px] font-semibold shadow flex items-center gap-1 max-w-[85%]">
                <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="leading-tight">
                  2025 13u National Champions, National Division
                </span>
              </div>

            </div>

            {/* floating volleyball accent */}
            <motion.div
              className="hidden md:flex absolute -top-6 -right-6"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-3 rounded-full bg-white/80 shadow-lg ring-1 ring-black/5">
                <Volleyball className="w-6 h-6 text-sky-600" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Coach-friendly summary section */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Player Profile</h3>
            <ul className="mt-3 text-sm list-disc pl-4 space-y-1">
              <li>Primary: Libero · Secondary: DS</li>
              <li>Height: 5'5&quot; · Reach: 7'2&quot; (sample)</li>
              <li>Approach: 8'9&quot; (sample)</li>
              <li>GPA: 3.9 (sample)</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-3 text-sm">Coach inquiries welcome. Please email for full schedule & film.</p>
            <a href="mailto:libby@example.com" className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white">
              <Mail className="w-4 h-4" /> Email
            </a>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Academics & Clubs</h3>
            <ul className="mt-3 text-sm list-disc pl-4 space-y-1">
              <li>Honors Algebra, English (sample)</li>
              <li>Leadership Council (sample)</li>
              <li>Community volunteering (sample)</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Highlights (TikTok + Instagram) */}
      {/* Highlights (TikTok only for now) */}
      <section id="highlights" className="bg-slate-100/70">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Highlights</h2>
          <p className="mt-2 text-sm text-slate-600">
            Follow along on TikTok, or view a few featured posts below.
          </p>

          {/* Profile buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.tiktok.com/@libbysvolleyball"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-black text-white"
            >
              TikTok Profile
            </a>
          </div>

          {/* Embeds */}
          <div className="mt-6 grid sm:grid-cols-2 gap-6 justify-items-center">
            <Card className="p-4 w-full max-w-[360px]">
              <h3 className="text-sm font-semibold mb-3">TikTok: yayyy dig against madfrogs top team! we beat the the first time lost to them the second and just barely didn’t qualify.. but we can still get a bid!</h3>
              <TikTokEmbed
                url="https://www.tiktok.com/@libbysvolleyball/video/7492901048324001054"
                size="sm"   // sm | md | lg
              />
            </Card>

            <Card className="p-4 w-full max-w-[360px]">
              <h3 className="text-sm font-semibold mb-3">TikTok: great rally!! to bad we lost the point</h3>
              <TikTokEmbed
                url="https://www.tiktok.com/@libbysvolleyball/video/7477273969784294702"
                size="sm"
              />
            </Card>

            <Card className="p-4 w-full max-w-[360px]">
              <h3 className="text-sm font-semibold mb-3">TikTok: yayy quick play from triple crown 👑👑👑! sunshine tomorrow ☀️ FREEBALL KILL BY MO</h3>
              <TikTokEmbed
                url="https://www.tiktok.com/@libbysvolleyball/video/7473906733878873387"
                size="sm"
              />
            </Card>

            <Card className="p-4 w-full max-w-[360px]">
              <h3 className="text-sm font-semibold mb-3">TikTok: one of my favorite digs from nationals</h3>
              <TikTokEmbed
                url="https://www.tiktok.com/@libbysvolleyball/video/7524527806261349687"
                size="sm"
              />
            </Card>
          </div>
        </div>
      </section>


      {/* Stats */}
      <section id="stats" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Key Stats (sample)</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'SR Avg', value: '2.35' },
            { label: 'Dig/Set', value: '3.1' },
            { label: 'Aces/Set', value: '0.6' },
            { label: 'Serve %', value: '93%' },
          ].map((s) => (
            <Card key={s.label} className="p-6 text-center">
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="text-xs text-slate-600 mt-1">{s.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm text-slate-600">For coaches and program inquiries.</p>
          <form className="mt-6 grid gap-3 max-w-xl">
            <input className="border border-slate-300 rounded-xl px-3 py-2" placeholder="Your name" />
            <input className="border border-slate-300 rounded-xl px-3 py-2" placeholder="Email" type="email" />
            <textarea className="border border-slate-300 rounded-xl px-3 py-2" rows="4" placeholder="Message" />
            <button type="button" className="px-4 py-2 rounded-xl bg-slate-900 text-white w-fit">Send</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-xs text-slate-500 py-8">
        © {new Date().getFullYear()} Libby Askevich Volleyball
      </footer>
    </div>
  )
}
