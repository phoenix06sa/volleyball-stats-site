import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import { Mail } from 'lucide-react'
import TikTokEmbed from './components/TikTokEmbed.jsx'
import InstagramEmbed from './components/InstagramEmbed.jsx'

export default function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Libby Askevich Volleyball
            </h1>
            <p className="mt-4 text-lg">
              <span className="font-semibold">Libby Askevich</span>
              <br />Austin Skyline Volleyball, #4
              <br />13u National Champions, National Division
              <br />Position: <span className="font-medium">Libero</span> · Class of 2030
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#highlights" className="px-4 py-2 rounded-xl bg-slate-900 text-white">
                Watch Highlights
              </a>
              <a href="#contact" className="px-4 py-2 rounded-xl border border-slate-300">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/libby-placeholder.jpg"
              alt="Libby Askevich playing volleyball"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] bg-slate-200"
            />
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
