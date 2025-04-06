"use client"

import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building2,
  Users,
  Search,
  Award,
  TrendingUp,
  ChevronRight,
  BarChart2,
  Globe,
  Zap,
  Clock,
  Star,
  BookOpen,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex-grow bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="animate-bounce-slow inline-block mb-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            Plataforma de Empleo #1 en Colombia
          </div>
          <h1 className="animate-fade-in mb-4 text-4xl font-bold text-blue-900 md:text-5xl lg:text-6xl">
            <span className="relative">
              <span className="animate-slide-up-fade-in">Bolsa de Empleo</span>
              <span className="absolute -bottom-2 left-0 h-1 w-full animate-grow-x bg-blue-600"></span>
            </span>
          </h1>
          <h2 className="animate-fade-in mb-6 text-2xl font-semibold text-blue-700 md:text-3xl">
            Proyecto Ingeniería de Software
          </h2>
          <p className="animate-fade-in-delay-1 mx-auto max-w-2xl text-lg text-blue-700">
            Conectando el talento adecuado con las mejores oportunidades
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-2 mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 animate-pulse-slow">
              <Link href="/dashboard/candidate">Acceder como Candidato</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/dashboard/company">Acceder como Empresa</Link>
            </Button>
          </div>

          {/* Estadísticas animadas */}
          <div className="animate-fade-in-delay-2 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="transform transition-all duration-300 hover:scale-105 flex flex-col items-center rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="counter text-3xl font-bold text-blue-900" data-target="15000">
                15.000
              </div>
              <p className="text-blue-700">Candidatos Activos</p>
            </div>

            <div className="transform transition-all duration-300 hover:scale-105 flex flex-col items-center rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="counter text-3xl font-bold text-blue-900" data-target="2500">
                2.500
              </div>
              <p className="text-blue-700">Empresas Registradas</p>
            </div>

            <div className="transform transition-all duration-300 hover:scale-105 flex flex-col items-center rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="counter text-3xl font-bold text-blue-900" data-target="8700">
                8.700
              </div>
              <p className="text-blue-700">Ofertas de Empleo</p>
            </div>
          </div>
        </div>

        {/* Características destacadas */}
        <div className="animate-fade-in-delay-3 mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-blue-900">Características Destacadas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="transform transition-all duration-300 hover:scale-105 rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-900">Búsqueda Inteligente</h3>
              <p className="text-gray-600">Encuentra el trabajo perfecto con nuestro sistema de búsqueda avanzado.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-900">Aplicación Rápida</h3>
              <p className="text-gray-600">Postúlate a ofertas de empleo con solo unos clics.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-900">Perfiles Destacados</h3>
              <p className="text-gray-600">Destaca tu perfil para aumentar tus posibilidades de ser contratado.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 rounded-lg bg-white p-6 shadow-sm hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-900">Ofertas Globales</h3>
              <p className="text-gray-600">Accede a oportunidades de empleo en todo el mundo.</p>
            </div>
          </div>
        </div>

        {/* Opciones de Usuario */}
        <div className="animate-fade-in-delay-3 mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card className="group border-2 border-blue-100 transition-all hover:border-blue-300 hover:shadow-md transform hover:scale-105 duration-300">
            <CardHeader className="bg-blue-50 pb-4">
              <CardTitle className="text-2xl text-blue-900">Para Candidatos</CardTitle>
              <CardDescription>Encuentra tu trabajo ideal</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Crea y gestiona tu perfil profesional</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Explora y postúlate a ofertas de empleo</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Recibe notificaciones sobre oportunidades relevantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Seguimiento de tus postulaciones</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 group-hover:animate-pulse">
                <Link href="/dashboard/candidate">Acceder al Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="group border-2 border-blue-100 transition-all hover:border-blue-300 hover:shadow-md transform hover:scale-105 duration-300">
            <CardHeader className="bg-blue-50 pb-4">
              <CardTitle className="text-2xl text-blue-900">Para Empresas</CardTitle>
              <CardDescription>Encuentra el talento perfecto</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Crea y gestiona el perfil de tu empresa</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Publica y administra ofertas de empleo</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Revisa y gestiona postulaciones</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 animate-bounce-x" />
                  <span>Contacta directamente con los candidatos</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 group-hover:animate-pulse">
                <Link href="/dashboard/company">Acceder al Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Widgets adicionales */}
        <div className="animate-fade-in-delay-4 mt-16 grid gap-8 md:grid-cols-3">
          {/* Widget de Búsqueda Rápida */}
          <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-xl text-blue-900">
                <Search className="mr-2 h-5 w-5" />
                Búsqueda Rápida
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // Usar Link en lugar de window.location para navegación del lado del cliente
                  const searchTerm = e.currentTarget.querySelector('input[name="search"]')?.value || ""
                  window.location.href = `/dashboard/candidate?search=${encodeURIComponent(searchTerm)}`
                }}
              >
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      name="search"
                      placeholder="Puesto, habilidad o empresa"
                      className="w-full rounded-md border border-blue-200 p-2 pl-10 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-blue-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="rounded-md border border-blue-200 p-2 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300">
                      <option value="">Ubicación</option>
                      <option value="bogota">Bogotá</option>
                      <option value="medellin">Medellín</option>
                      <option value="cali">Cali</option>
                      <option value="barranquilla">Barranquilla</option>
                      <option value="remoto">Remoto</option>
                    </select>
                    <select className="rounded-md border border-blue-200 p-2 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300">
                      <option value="">Tipo de empleo</option>
                      <option value="fulltime">Tiempo completo</option>
                      <option value="parttime">Medio tiempo</option>
                      <option value="contract">Contrato</option>
                      <option value="internship">Prácticas</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:translate-y-[-2px]"
                  >
                    Buscar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Widget de Categorías Populares */}
          <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-xl text-blue-900">
                <Award className="mr-2 h-5 w-5" />
                Categorías Populares
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Tecnología",
                  "Marketing",
                  "Ventas",
                  "Diseño",
                  "Finanzas",
                  "Educación",
                  "Salud",
                  "Ingeniería",
                  "Recursos Humanos",
                  "Atención al Cliente",
                ].map((category) => (
                  <Link key={category} href={`/dashboard/candidate?category=${category}`}>
                    <Badge className="cursor-pointer rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 transition-all hover:bg-blue-200 hover:scale-105 duration-300">
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard/candidate"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                >
                  <span>Ver todas las categorías</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Widget de Tendencias */}
          <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-xl text-blue-900">
                <TrendingUp className="mr-2 h-5 w-5" />
                Tendencias Laborales
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-blue-800">Desarrollo Web</span>
                  <div className="flex items-center">
                    <span className="text-green-600">↑ 24%</span>
                    <BarChart2 className="ml-1 h-4 w-4 text-green-600" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-blue-800">Inteligencia Artificial</span>
                  <div className="flex items-center">
                    <span className="text-green-600">↑ 42%</span>
                    <BarChart2 className="ml-1 h-4 w-4 text-green-600" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-blue-800">Marketing Digital</span>
                  <div className="flex items-center">
                    <span className="text-green-600">↑ 18%</span>
                    <BarChart2 className="ml-1 h-4 w-4 text-green-600" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-blue-800">Atención al Cliente</span>
                  <div className="flex items-center">
                    <span className="text-green-600">↑ 7%</span>
                    <BarChart2 className="ml-1 h-4 w-4 text-green-600" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-blue-800">Ciberseguridad</span>
                  <div className="flex items-center">
                    <span className="text-green-600">↑ 35%</span>
                    <BarChart2 className="ml-1 h-4 w-4 text-green-600" />
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/dashboard/candidate"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                >
                  <span>Ver más tendencias</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nuevos widgets */}
        <div className="animate-fade-in-delay-5 mt-16 grid gap-8 md:grid-cols-2">
          {/* Widget de Consejos para CV */}
          <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-xl text-blue-900">
                <BookOpen className="mr-2 h-5 w-5" />
                Consejos para tu CV
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Destaca tus logros</h3>
                  <p className="text-sm text-gray-600">
                    Incluye resultados medibles y cuantificables en lugar de solo listar responsabilidades.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Personaliza para cada oferta</h3>
                  <p className="text-sm text-gray-600">
                    Adapta tu CV para destacar las habilidades relevantes para cada puesto al que aplicas.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Mantén la claridad</h3>
                  <p className="text-sm text-gray-600">
                    Usa un formato limpio y organizado que facilite la lectura rápida.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard/candidate"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                >
                  <span>Ver más consejos</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Widget de Recursos para Empresas */}
          <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-xl text-blue-900">
                <Lightbulb className="mr-2 h-5 w-5" />
                Recursos para Empresas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Cómo redactar ofertas efectivas</h3>
                  <p className="text-sm text-gray-600">
                    Aprende a crear descripciones de trabajo que atraigan a los mejores candidatos.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Estrategias de entrevista</h3>
                  <p className="text-sm text-gray-600">
                    Técnicas para evaluar efectivamente a los candidatos durante el proceso de selección.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="mb-1 font-medium text-blue-900">Retención de talento</h3>
                  <p className="text-sm text-gray-600">
                    Consejos para mantener motivados y comprometidos a tus empleados.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard/company"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
                >
                  <span>Explorar recursos</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credenciales de prueba */}
        <div className="animate-fade-in-delay-5 mt-12 rounded-lg bg-blue-50 p-6 transform transition-all duration-300 hover:shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-blue-900">Credenciales de Prueba</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 font-medium text-blue-900">Candidato</h3>
              <p className="text-sm text-gray-600">
                Email: <span className="font-medium text-blue-700">candidato@ejemplo.com</span>
              </p>
              <p className="text-sm text-gray-600">
                Contraseña: <span className="font-medium text-blue-700">candidato123</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">Código 2FA para pruebas: 123456</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 font-medium text-blue-900">Empresa</h3>
              <p className="text-sm text-gray-600">
                Email: <span className="font-medium text-blue-700">empresa@ejemplo.com</span>
              </p>
              <p className="text-sm text-gray-600">
                Contraseña: <span className="font-medium text-blue-700">empresa123</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">Código 2FA para pruebas: 123456</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-700">¿Listo para comenzar?</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <Link href="/dashboard/candidate">Acceder como Candidato</Link>
            </Button>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <Link href="/dashboard/company">Acceder como Empresa</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

