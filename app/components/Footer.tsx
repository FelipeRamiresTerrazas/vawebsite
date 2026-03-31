export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-lg">Veritas</span>
          <span className="text-white font-bold text-lg">Analytics</span>
        </div>
        <p className="text-sm text-center sm:text-right">
          © {new Date().getFullYear()} Veritas Analytics. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
