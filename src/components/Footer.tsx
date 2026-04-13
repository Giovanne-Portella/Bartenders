import { Wine, Globe, Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Wine className="w-5 h-5 text-amber-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Bartender's Choice
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#bartenders" className="hover:text-amber-400 transition-colors">
              Bartenders
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Termos
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacidade
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@bartenderschoice.com.br"
              className="text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-600">
          &copy; {year} Bartender's Choice. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
