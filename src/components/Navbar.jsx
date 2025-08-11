import { Volleyball, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <Volleyball className="w-6 h-6" />
          <span>Libby Askevich Volleyball</span>
        </div>
        <button className="md:hidden p-2 rounded-xl border border-slate-300">
          <Menu className="w-5 h-5" />
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#highlights" className="hover:text-slate-900">Highlights</a>
          <a href="#stats" className="hover:text-slate-900">Stats</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
