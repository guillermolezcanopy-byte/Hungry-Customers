export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3333] text-xl">🍽</span>
            <span className="font-black tracking-tight">
              HUNGRY<span className="text-[#FF3333]">CUSTOMERS</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Contacto</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Política de Reembolso</a>
          </div>

          <div className="text-zinc-600 text-xs text-center">
            © {new Date().getFullYear()} Hungry Customers System. Todos los derechos reservados.
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs max-w-2xl mx-auto">
            Los resultados pueden variar. Las cifras de ventas mostradas corresponden a casos reales de nuestros alumnos y no son típicas. Tus resultados dependerán de tu ubicación, tipo de local, base de clientes existente y la aplicación del sistema.
          </p>
        </div>
      </div>
    </footer>
  );
}
