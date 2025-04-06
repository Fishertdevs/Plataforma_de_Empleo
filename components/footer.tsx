import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-blue-700">
            © {new Date().getFullYear()} EmpleoYa. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <span>Desarrollado por Harry Fishert</span>
            <Link
              href="https://github.com/Fishertdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Fishertdevs</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

