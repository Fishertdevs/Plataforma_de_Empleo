"use client"

import type React from "react"

// Datos simulados ampliados
const mockCompany = {
  name: "TechCorp",
  industry: "Tecnología",
  size: "50-200 empleados",
  location: "Bogotá, Colombia",
  website: "https://techcorp.ejemplo.com",
  about:
    "TechCorp es una empresa líder en tecnología especializada en soluciones de software innovadoras para empresas de todos los tamaños.",
  founded: "2015",
  logo: "/placeholder.svg?height=100&width=100",
  email: "empresa@ejemplo.com",
  phone: "(+57) 312 345 678",
  socialMedia: {
    linkedin: "https://linkedin.com/company/techcorp",
    twitter: "https://twitter.com/techcorp",
    facebook: "https://facebook.com/techcorp",
  },
}

const mockJobs = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    location: "Remoto",
    salary: "$3,000,000 - $4,500,000",
    type: "Tiempo completo",
    posted: "hace 2 días",
    applicants: 12,
    status: "Activa",
    requirements: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Estamos buscando un Desarrollador Frontend con experiencia para unirse a nuestro equipo y ayudar a crear experiencias de usuario increíbles.",
    category: "Desarrollo",
  },
  {
    id: 2,
    title: "Diseñador UX",
    location: "Bogotá, Colombia",
    salary: "$3,500,000 - $5,000,000",
    type: "Tiempo completo",
    posted: "hace 1 semana",
    applicants: 8,
    status: "Activa",
    requirements: ["Figma", "Investigación de usuarios", "Prototipado"],
    description:
      "Únete a nuestro equipo de diseño para crear experiencias de usuario intuitivas y atractivas para nuestros productos.",
    category: "Diseño",
  },
  {
    id: 3,
    title: "Ingeniero Backend",
    location: "Medellín, Colombia",
    salary: "$4,000,000 - $6,000,000",
    type: "Tiempo completo",
    posted: "hace 3 días",
    applicants: 5,
    status: "Activa",
    requirements: ["Node.js", "PostgreSQL", "AWS"],
    description:
      "Necesitamos un Ingeniero Backend talentoso para ayudar a escalar nuestra infraestructura y construir APIs robustas.",
    category: "Desarrollo",
  },
  {
    id: 4,
    title: "Especialista en DevOps",
    location: "Remoto",
    salary: "$4,500,000 - $6,500,000",
    type: "Contrato",
    posted: "hace 5 días",
    applicants: 3,
    status: "Activa",
    requirements: ["Docker", "Kubernetes", "CI/CD"],
    description:
      "Buscamos un especialista en DevOps para mejorar nuestros procesos de implementación e infraestructura.",
    category: "Infraestructura",
  },
  {
    id: 5,
    title: "Analista de Marketing Digital",
    location: "Cali, Colombia",
    salary: "$2,800,000 - $4,000,000",
    type: "Tiempo completo",
    posted: "hace 1 día",
    applicants: 7,
    status: "Activa",
    requirements: ["Google Analytics", "SEO", "Publicidad en redes sociales"],
    description:
      "Únete a nuestro equipo de marketing para impulsar el crecimiento de nuestros clientes a través de estrategias digitales innovadoras.",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Representante de Ventas",
    location: "Bogotá, Colombia",
    salary: "$3,000,000 - $5,000,000 + comisiones",
    type: "Tiempo completo",
    posted: "hace 4 días",
    applicants: 9,
    status: "Activa",
    requirements: ["Experiencia en ventas B2B", "CRM", "Negociación"],
    description:
      "Buscamos un representante de ventas entusiasta para expandir nuestra cartera de clientes y alcanzar nuevos mercados.",
    category: "Ventas",
  },
  {
    id: 7,
    title: "Diseñador Gráfico",
    location: "Medellín, Colombia",
    salary: "$2,500,000 - $3,500,000",
    type: "Tiempo completo",
    posted: "hace 2 semanas",
    applicants: 15,
    status: "Activa",
    requirements: ["Adobe Creative Suite", "Diseño de marca", "Ilustración"],
    description: "Únete a nuestro estudio creativo para trabajar en proyectos emocionantes para clientes de renombre.",
    category: "Diseño",
  },
  {
    id: 8,
    title: "Analista Financiero",
    location: "Bogotá, Colombia",
    salary: "$3,500,000 - $5,500,000",
    type: "Tiempo completo",
    posted: "hace 6 días",
    applicants: 4,
    status: "Activa",
    requirements: ["Excel avanzado", "Modelado financiero", "Contabilidad"],
    description:
      "Buscamos un analista financiero detallista para unirse a nuestro equipo y ayudar en la toma de decisiones estratégicas.",
    category: "Finanzas",
  },
  {
    id: 9,
    title: "Profesor de Inglés",
    location: "Barranquilla, Colombia",
    salary: "$2,000,000 - $3,000,000",
    type: "Tiempo parcial",
    posted: "hace 1 semana",
    applicants: 6,
    status: "Activa",
    requirements: ["Nativo o bilingüe en inglés", "TEFL/CELTA", "Experiencia docente"],
    description:
      "Únete a nuestra academia de idiomas y ayuda a estudiantes de todas las edades a mejorar sus habilidades en inglés.",
    category: "Educación",
  },
  {
    id: 10,
    title: "Enfermero/a",
    location: "Cali, Colombia",
    salary: "$2,500,000 - $3,500,000",
    type: "Tiempo completo",
    posted: "hace 3 días",
    applicants: 2,
    status: "Activa",
    requirements: ["Grado en Enfermería", "Colegiación", "Experiencia en atención primaria"],
    description:
      "Buscamos enfermeros/as comprometidos para brindar atención de calidad a nuestros pacientes en el centro de salud.",
    category: "Salud",
  },
  {
    id: 11,
    title: "Desarrollador Full Stack",
    location: "Remoto",
    salary: "$4,000,000 - $6,000,000",
    type: "Tiempo completo",
    posted: "hace 5 días",
    applicants: 10,
    status: "Activa",
    requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
    description: "Únete a nuestro equipo de desarrollo para crear aplicaciones web innovadoras y escalables.",
    category: "Desarrollo",
  },
  {
    id: 12,
    title: "Especialista en SEO",
    location: "Medellín, Colombia",
    salary: "$3,000,000 - $4,500,000",
    type: "Tiempo completo",
    posted: "hace 1 semana",
    applicants: 5,
    status: "Activa",
    requirements: ["SEO técnico", "Análisis de palabras clave", "Content Marketing"],
    description:
      "Buscamos un especialista en SEO para mejorar la visibilidad online de nuestros clientes y aumentar el tráfico orgánico.",
    category: "Marketing",
  },
  {
    id: 13,
    title: "Arquitecto de Software",
    location: "Bogotá, Colombia",
    salary: "$6,000,000 - $8,000,000",
    type: "Tiempo completo",
    posted: "hace 2 días",
    applicants: 3,
    status: "Activa",
    requirements: ["Diseño de sistemas", "Microservicios", "Cloud Architecture"],
    description:
      "Buscamos un arquitecto de software experimentado para liderar el diseño y la implementación de soluciones escalables.",
    category: "Desarrollo",
  },
  {
    id: 14,
    title: "Gerente de Proyectos",
    location: "Cali, Colombia",
    salary: "$4,500,000 - $6,500,000",
    type: "Tiempo completo",
    posted: "hace 4 días",
    applicants: 7,
    status: "Activa",
    requirements: ["Certificación PMP", "Metodologías ágiles", "Liderazgo de equipos"],
    description: "Únete a nuestro equipo de gestión de proyectos para liderar iniciativas clave y garantizar su éxito.",
    category: "Gestión",
  },
  {
    id: 15,
    title: "Científico de Datos",
    location: "Remoto",
    salary: "$5,000,000 - $7,000,000",
    type: "Tiempo completo",
    posted: "hace 3 días",
    applicants: 6,
    status: "Activa",
    requirements: ["Python", "Machine Learning", "Visualización de datos"],
    description:
      "Buscamos un científico de datos apasionado para descubrir insights valiosos y desarrollar modelos predictivos.",
    category: "Datos",
  },
]

const mockApplicants = [
  {
    id: 1,
    name: "Alejandro Jiménez",
    jobTitle: "Desarrollador Frontend",
    appliedFor: "Desarrollador Frontend",
    appliedDate: "hace 2 días",
    status: "Nuevo",
    experience: "5 años",
    skills: ["React", "TypeScript", "CSS"],
    email: "alejandro@ejemplo.com",
    phone: "(+57) 312 345 678",
    location: "Bogotá, Colombia",
    education: "Grado en Ingeniería Informática, Universidad Nacional de Colombia",
    about: "Desarrollador frontend con experiencia en la creación de aplicaciones web responsivas y atractivas.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Me entusiasma la oportunidad de unirme a TechCorp como Desarrollador Frontend. Con mi experiencia en React y TypeScript, puedo contribuir significativamente a sus proyectos.",
  },
  {
    id: 2,
    name: "Sara Martínez",
    jobTitle: "Diseñadora UX Senior",
    appliedFor: "Diseñador UX",
    appliedDate: "hace 3 días",
    status: "Revisado",
    experience: "7 años",
    skills: ["Figma", "Investigación de usuarios", "Diseño UI"],
    email: "sara@ejemplo.com",
    phone: "(+57) 323 456 789",
    location: "Medellín, Colombia",
    education: "Máster en Diseño de Interacción, Universidad de los Andes",
    about: "Diseñadora UX/UI con amplia experiencia en la creación de experiencias digitales centradas en el usuario.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Como diseñadora UX con 7 años de experiencia, estoy emocionada por la posibilidad de unirme a TechCorp y aportar mi experiencia en investigación de usuarios y diseño de interfaces.",
  },
  {
    id: 3,
    name: "Miguel Blanco",
    jobTitle: "Desarrollador Frontend",
    appliedFor: "Desarrollador Frontend",
    appliedDate: "hace 1 semana",
    status: "Entrevistando",
    experience: "3 años",
    skills: ["JavaScript", "React", "HTML/CSS"],
    email: "miguel@ejemplo.com",
    phone: "(+57) 334 567 890",
    location: "Cali, Colombia",
    education: "Grado en Desarrollo de Aplicaciones Web, SENA",
    about: "Desarrollador frontend apasionado por crear interfaces de usuario intuitivas y atractivas.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Me gustaría expresar mi interés en la posición de Desarrollador Frontend en TechCorp. Con mi experiencia en React y JavaScript, puedo contribuir al desarrollo de productos innovadores.",
  },
  {
    id: 4,
    name: "Laura Sánchez",
    jobTitle: "Ingeniera Backend",
    appliedFor: "Ingeniero Backend",
    appliedDate: "hace 4 días",
    status: "Nuevo",
    experience: "4 años",
    skills: ["Node.js", "PostgreSQL", "AWS"],
    email: "laura@ejemplo.com",
    phone: "(+57) 345 678 901",
    location: "Bogotá, Colombia",
    education: "Máster en Ingeniería de Software, Universidad de los Andes",
    about: "Ingeniera de software especializada en desarrollo backend y arquitecturas cloud.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Con mi experiencia en desarrollo backend y cloud computing, estoy interesada en unirme a TechCorp para contribuir al desarrollo de infraestructuras robustas y escalables.",
  },
  {
    id: 5,
    name: "Carlos Rodríguez",
    jobTitle: "DevOps Engineer",
    appliedFor: "Especialista en DevOps",
    appliedDate: "hace 2 días",
    status: "Nuevo",
    experience: "6 años",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    email: "carlos@ejemplo.com",
    phone: "(+57) 356 789 012",
    location: "Remoto",
    education: "Grado en Ingeniería Informática, Universidad del Valle",
    about: "Ingeniero DevOps con experiencia en automatización, CI/CD y gestión de infraestructuras cloud.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Me interesa la posición de Especialista en DevOps en TechCorp. Con mi experiencia en Docker, Kubernetes y CI/CD, puedo ayudar a optimizar los procesos de desarrollo y despliegue.",
  },
  {
    id: 6,
    name: "Ana López",
    jobTitle: "Marketing Digital Specialist",
    appliedFor: "Analista de Marketing Digital",
    appliedDate: "hace 1 día",
    status: "Nuevo",
    experience: "3 años",
    skills: ["Google Analytics", "SEO", "SEM", "Social Media"],
    email: "ana@ejemplo.com",
    phone: "(+57) 367 890 123",
    location: "Cali, Colombia",
    education: "Grado en Marketing, Universidad Javeriana",
    about: "Especialista en marketing digital con experiencia en estrategias de SEO, SEM y análisis de datos.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Estoy interesada en la posición de Analista de Marketing Digital en TechCorp. Con mi experiencia en SEO y análisis de datos, puedo contribuir a aumentar la visibilidad online de la empresa.",
  },
  {
    id: 7,
    name: "Javier Fernández",
    jobTitle: "Sales Representative",
    appliedFor: "Representante de Ventas",
    appliedDate: "hace 3 días",
    status: "Revisado",
    experience: "5 años",
    skills: ["Ventas B2B", "CRM", "Negociación", "Presentaciones"],
    email: "javier@ejemplo.com",
    phone: "(+57) 378 901 234",
    location: "Bogotá, Colombia",
    education: "Grado en Administración de Empresas, Universidad Externado",
    about: "Profesional de ventas con experiencia en la captación y gestión de clientes B2B en el sector tecnológico.",
    photo: "/placeholder.svg?height=100&width=100",
    cvUrl: "#",
    coverLetter:
      "Me gustaría expresar mi interés en la posición de Representante de Ventas en TechCorp. Con mi experiencia en ventas B2B, puedo ayudar a expandir la cartera de clientes de la empresa.",
  },
]

// Add the missing imports and component implementation at the end of the file

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Bell,
  Briefcase,
  LogOut,
  Search,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  Plus,
  Trash,
  Building,
  Filter,
  MoreHorizontal,
  Eye,
  Download,
  ThumbsUp,
  ThumbsDown,
  Users,
  BarChart2,
  CalendarIcon,
  PieChart,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("jobs")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todas")
  const [categoryFilter, setCategoryFilter] = useState("Todas")
  const [locationFilter, setLocationFilter] = useState("Todas")
  const [jobs, setJobs] = useState(mockJobs)
  const [applicants, setApplicants] = useState(mockApplicants)
  const [company, setCompany] = useState(mockCompany)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editedCompany, setEditedCompany] = useState(mockCompany)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [isAddingJob, setIsAddingJob] = useState(false)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [selectedApplicant, setSelectedApplicant] = useState<number | null>(null)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nuevo aplicante",
      message: "Alejandro Jiménez ha aplicado para el puesto de Desarrollador Frontend.",
      time: "Hace 2 horas",
      read: false,
    },
    {
      id: 2,
      title: "Entrevista programada",
      message: "Entrevista con Miguel Blanco para Desarrollador Frontend a las 10:00 AM mañana.",
      time: "Hace 1 día",
      read: false,
    },
    {
      id: 3,
      title: "Oferta aceptada",
      message: "Sara Martínez ha aceptado la oferta para el puesto de Diseñador UX.",
      time: "Hace 3 días",
      read: true,
    },
  ])
  const [unreadCount, setUnreadCount] = useState(notifications.filter((n) => !n.read).length)
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    salary: "",
    type: "Tiempo completo",
    requirements: "",
    description: "",
    category: "Desarrollo",
  })

  const [isSchedulingInterview, setIsSchedulingInterview] = useState(false)
  const [selectedApplicantForInterview, setSelectedApplicantForInterview] = useState<number | null>(null)
  const [interviewDate, setInterviewDate] = useState<Date | undefined>(undefined)

  // Función para filtrar trabajos
  const filteredJobs = jobs.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "Todas" || job.status === statusFilter) &&
      (categoryFilter === "Todas" || job.category === categoryFilter) &&
      (locationFilter === "Todas" || job.location.includes(locationFilter)),
  )

  // Función para filtrar aplicantes
  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.appliedFor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Categorías únicas para filtros
  const categories = ["Todas", ...Array.from(new Set(jobs.map((job) => job.category)))]
  const locations = ["Todas", ...Array.from(new Set(jobs.map((job) => job.location.split(",")[0])))]
  const statuses = ["Todas", "Activa", "Pausada", "Cerrada"]

  // Funciones para manejar notificaciones
  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    setUnreadCount(0)
  }

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  // Funciones para manejar trabajos
  const handleAddJob = () => {
    setIsAddingJob(true)
    setSelectedJob(null)
    setNewJob({
      title: "",
      location: "",
      salary: "",
      type: "Tiempo completo",
      requirements: "",
      description: "",
      category: "Desarrollo",
    })
  }

  const handleEditJob = (jobId: number) => {
    const jobToEdit = jobs.find((job) => job.id === jobId)
    if (jobToEdit) {
      setSelectedJob(jobId)
      setNewJob({
        title: jobToEdit.title,
        location: jobToEdit.location,
        salary: jobToEdit.salary,
        type: jobToEdit.type,
        requirements: jobToEdit.requirements.join(", "),
        description: jobToEdit.description,
        category: jobToEdit.category,
      })
      setIsAddingJob(true)
    }
  }

  const handleSaveJob = () => {
    if (selectedJob) {
      // Editar trabajo existente
      setJobs((prev) =>
        prev.map((job) =>
          job.id === selectedJob
            ? {
                ...job,
                title: newJob.title,
                location: newJob.location,
                salary: newJob.salary,
                type: newJob.type,
                requirements: newJob.requirements.split(",").map((req) => req.trim()),
                description: newJob.description,
                category: newJob.category,
              }
            : job,
        ),
      )
      showToast("Trabajo actualizado correctamente")
    } else {
      // Añadir nuevo trabajo
      const id = Math.max(0, ...jobs.map((job) => job.id)) + 1
      const newJobEntry = {
        id,
        title: newJob.title,
        location: newJob.location,
        salary: newJob.salary,
        type: newJob.type,
        requirements: newJob.requirements.split(",").map((req) => req.trim()),
        description: newJob.description,
        category: newJob.category,
        posted: "hoy",
        applicants: 0,
        status: "Activa",
      }
      setJobs((prev) => [...prev, newJobEntry])
      showToast("Trabajo publicado correctamente")
    }
    setIsAddingJob(false)
  }

  const handleDeleteJob = (jobId: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId))
    showToast("Trabajo eliminado correctamente")
  }

  const handleChangeJobStatus = (jobId: number, status: string) => {
    setJobs((prev) => prev.map((job) => (job.id === jobId ? { ...job, status } : job)))
    showToast(`Estado del trabajo cambiado a ${status}`)
  }

  // Funciones para manejar aplicantes
  const handleViewApplicant = (applicantId: number) => {
    setSelectedApplicant(applicantId)
  }

  const handleChangeApplicantStatus = (applicantId: number, status: string) => {
    setApplicants((prev) =>
      prev.map((applicant) => (applicant.id === applicantId ? { ...applicant, status } : applicant)),
    )
    showToast(`Estado del aplicante cambiado a ${status}`)
  }

  const handleScheduleInterview = (applicantId: number) => {
    setSelectedApplicantForInterview(applicantId)
    setInterviewDate(undefined)
    setIsSchedulingInterview(true)
  }

  const confirmScheduleInterview = () => {
    if (selectedApplicantForInterview && interviewDate) {
      // Actualizar el estado del aplicante
      setApplicants((prev) =>
        prev.map((applicant) =>
          applicant.id === selectedApplicantForInterview
            ? {
                ...applicant,
                status: "Entrevistando",
                interviewDate: format(interviewDate, "PPP 'a las' p", { locale: es }),
              }
            : applicant,
        ),
      )

      // Añadir notificación
      const applicant = applicants.find((a) => a.id === selectedApplicantForInterview)
      if (applicant) {
        const newNotification = {
          id: notifications.length + 1,
          title: "Entrevista programada",
          message: `Has programado una entrevista con ${applicant.name} para el ${format(
            interviewDate,
            "PPP 'a las' p",
            { locale: es },
          )}`,
          time: "Ahora",
          read: false,
        }
        setNotifications((prev) => [newNotification, ...prev])
        setUnreadCount((prev) => prev + 1)
      }

      setIsSchedulingInterview(false)
      showToast("Entrevista programada correctamente")
    }
  }

  // Funciones para manejar el perfil de la empresa
  const handleEditProfile = () => {
    setEditedCompany(company)
    setIsEditingProfile(true)
  }

  const handleSaveProfile = () => {
    setCompany(editedCompany)
    setIsEditingProfile(false)
    showToast("Perfil actualizado correctamente")
  }

  const handleCancelEdit = () => {
    setIsEditingProfile(false)
    setEditedCompany(company)
  }

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedCompany((prev) => ({ ...prev, [name]: value }))
  }

  // Función para mostrar toast de éxito
  const showToast = (message: string) => {
    setSuccessMessage(message)
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 3000)
  }

  // Añadir esta función después de la función showToast
  const exportApplicantsToCSV = () => {
    // Crear datos CSV
    const headers = ["Nombre", "Puesto", "Aplicó para", "Fecha", "Estado", "Email", "Teléfono"]
    const csvRows = [headers]

    applicants.forEach((applicant) => {
      const row = [
        applicant.name,
        applicant.jobTitle,
        applicant.appliedFor,
        applicant.appliedDate,
        applicant.status,
        applicant.email,
        applicant.phone,
      ]
      csvRows.push(row)
    })

    // Convertir a string CSV
    const csvContent = csvRows.map((row) => row.join(",")).join("\n")

    // Descargar archivo
    const element = document.createElement("a")
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent))
    element.setAttribute("download", `aplicantes_${new Date().toISOString().split("T")[0]}.csv`)
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    showToast("Datos de aplicantes exportados correctamente")
  }

  // Efecto para manejar la navegación por pestañas con hash URLs
  useEffect(() => {
    // Función para manejar cambios en el hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["jobs", "applicants", "profile", "analytics"].includes(hash)) {
        setActiveTab(hash)
      }
    }

    // Verificar el hash inicial
    handleHashChange()

    // Agregar listener para cambios futuros
    window.addEventListener("hashchange", handleHashChange)

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Reemplazar el useEffect para actualizar el hash
  useEffect(() => {
    if (activeTab && typeof window !== "undefined") {
      const newHash = `#${activeTab}`
      if (window.location.hash !== newHash) {
        // Usar history.replaceState para evitar ciclos infinitos
        window.history.replaceState(null, "", newHash)
      }
    }
  }, [activeTab])

  return (
    <div className="flex-grow bg-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-900">EmpleoYa</h1>
          </div>

          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="flex items-center justify-between border-b p-3">
                  <h3 className="font-medium">Notificaciones</h3>
                  <Button variant="ghost" size="sm" onClick={markAllNotificationsAsRead} disabled={unreadCount === 0}>
                    Marcar todas como leídas
                  </Button>
                </div>
                <div className="max-h-80 overflow-auto">
                  {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-gray-500">
                      <Bell className="mb-2 h-8 w-8 text-gray-400" />
                      <p>No tienes notificaciones</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`border-b p-3 transition-colors hover:bg-gray-50 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-blue-100 p-1.5 text-blue-600">
                            <Bell className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{notification.title}</p>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                            <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                          </div>
                          {!notification.read && <div className="h-2 w-2 rounded-full bg-blue-600"></div>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              {company.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Toast de éxito */}
      {showSuccessToast && (
        <div className="fixed right-4 top-20 z-50 flex items-center gap-2 rounded-lg bg-green-100 px-4 py-2 text-green-800 shadow-md animate-bounce-in">
          <CheckCircle className="h-5 w-5" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Main content */}
      <main className="container mx-auto p-4 py-8">
        <Tabs defaultValue="jobs" onValueChange={setActiveTab} value={activeTab}>
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <TabsList className="bg-white">
              <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                <Briefcase className="mr-2 h-4 w-4" />
                Ofertas de Empleo
              </TabsTrigger>
              <TabsTrigger
                value="applicants"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
              >
                <Users className="mr-2 h-4 w-4" />
                Aplicantes
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
              >
                <BarChart2 className="mr-2 h-4 w-4" />
                Analíticas
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
              >
                <Building className="mr-2 h-4 w-4" />
                Perfil de Empresa
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="jobs" className="mt-0">
            {activeTab === "jobs" && (
              <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white shadow-md animate-fade-in">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Bienvenido, {company.name}</h2>
                    <p className="mt-1 text-blue-100">
                      Gestiona tus ofertas de empleo y encuentra el talento perfecto para tu equipo.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-white text-blue-800 hover:bg-blue-50" onClick={handleAddJob}>
                      <Plus className="mr-2 h-4 w-4" />
                      Publicar Nueva Oferta
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "jobs" && (
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-4 shadow-sm transform transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Ofertas Activas</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {jobs.filter((job) => job.status === "Activa").length}
                      </p>
                    </div>
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm transform transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Aplicantes</p>
                      <p className="text-2xl font-bold text-blue-900">{applicants.length}</p>
                    </div>
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm transform transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Entrevistas Pendientes</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {applicants.filter((a) => a.status === "Entrevistando").length}
                      </p>
                    </div>
                    <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                      <CalendarIcon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm transform transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Tasa de Conversión</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {applicants.length > 0
                          ? `${Math.round((applicants.filter((a) => a.status === "Seleccionado").length / applicants.length) * 100)}%`
                          : "0%"}
                      </p>
                    </div>
                    <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                      <PieChart className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por título o descripción"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-[180px]">
                    <MapPin className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6 flex justify-end">
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:translate-y-[-2px]"
                onClick={handleAddJob}
              >
                <Plus className="mr-2 h-4 w-4" />
                Publicar Oferta
              </Button>
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="border-blue-100 transition-all hover:shadow-md transform hover:scale-102 duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-900">{job.title}</CardTitle>
                        <CardDescription className="text-blue-700">
                          {job.location} • {job.type}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleEditJob(job.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteJob(job.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            Eliminar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Cambiar estado</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleChangeJobStatus(job.id, "Activa")}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Activa
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleChangeJobStatus(job.id, "Pausada")}>
                            <Clock className="mr-2 h-4 w-4" />
                            Pausada
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleChangeJobStatus(job.id, "Cerrada")}>
                            <XCircle className="mr-2 h-4 w-4" />
                            Cerrada
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className={
                          job.status === "Activa"
                            ? "bg-green-50 text-green-700"
                            : job.status === "Pausada"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }
                      >
                        {job.status}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50">
                        {job.salary}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50">
                        {job.category}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50">
                        Publicado {job.posted}
                      </Badge>
                    </div>

                    <p className="mb-3 text-sm text-gray-600">{job.description}</p>

                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-blue-900">Requisitos:</h4>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {job.requirements.map((req) => (
                          <Badge key={req} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-blue-50 pt-4">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-700">
                          {job.applicants} {job.applicants === 1 ? "aplicante" : "aplicantes"}
                        </span>
                      </div>
                      <Button variant="outline" className="text-blue-600" onClick={() => setActiveTab("applicants")}>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Aplicantes
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              {filteredJobs.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
                  <Briefcase className="mb-2 h-12 w-12 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900">No se encontraron ofertas</h3>
                  <p className="text-gray-600">
                    {searchTerm || statusFilter !== "Todas" || categoryFilter !== "Todas" || locationFilter !== "Todas"
                      ? "Intenta con diferentes términos de búsqueda o ajusta los filtros."
                      : "Comienza publicando tu primera oferta de empleo."}
                  </p>
                  {!searchTerm &&
                    statusFilter === "Todas" &&
                    categoryFilter === "Todas" &&
                    locationFilter === "Todas" && (
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={handleAddJob}>
                        <Plus className="mr-2 h-4 w-4" />
                        Publicar Oferta
                      </Button>
                    )}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="applicants" className="mt-0">
            {activeTab === "applicants" && (
              <div className="mb-6 rounded-lg bg-gradient-to-r from-green-600 to-green-800 p-6 text-white shadow-md animate-fade-in">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Gestión de Aplicantes</h2>
                    <p className="mt-1 text-green-100">
                      Revisa y gestiona las aplicaciones para tus ofertas de empleo.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-white text-green-800" onClick={exportApplicantsToCSV}>
                      <Download className="mr-2 h-4 w-4" />
                      Exportar Datos
                    </Button>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px] bg-white text-green-800">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Filtrar por estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Todas">Todos los estados</SelectItem>
                        <SelectItem value="Nuevo">Nuevos</SelectItem>
                        <SelectItem value="Revisado">Revisados</SelectItem>
                        <SelectItem value="Entrevistando">Entrevistando</SelectItem>
                        <SelectItem value="Seleccionado">Seleccionados</SelectItem>
                        <SelectItem value="Rechazado">Rechazados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nombre o puesto"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredApplicants.map((applicant) => (
                <Card
                  key={applicant.id}
                  className="border-blue-100 transition-all hover:shadow-md transform hover:scale-102 duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full">
                          <img
                            src={applicant.photo || "/placeholder.svg"}
                            alt={applicant.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-blue-900">{applicant.name}</CardTitle>
                          <CardDescription className="text-blue-700">
                            {applicant.jobTitle} • {applicant.location}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge
                        className={
                          applicant.status === "Nuevo"
                            ? "bg-blue-100 text-blue-800"
                            : applicant.status === "Revisado"
                              ? "bg-purple-100 text-purple-800"
                              : applicant.status === "Entrevistando"
                                ? "bg-yellow-100 text-yellow-800"
                                : applicant.status === "Seleccionado"
                                  ? "bg-green-100 text-green-800"
                                  : applicant.status === "Rechazado"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                        }
                      >
                        {applicant.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 grid gap-2 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500">Aplicó para</p>
                        <p className="text-sm text-blue-900">{applicant.appliedFor}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500">Fecha de aplicación</p>
                        <p className="text-sm text-blue-900">{applicant.appliedDate}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500">Experiencia</p>
                        <p className="text-sm text-blue-900">{applicant.experience}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-500">Habilidades</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {applicant.skills.map((skill) => (
                          <Badge key={skill} className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-blue-50 pt-4">
                    <div className="flex w-full flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600"
                          onClick={() => handleViewApplicant(applicant.id)}
                        >
                          <Eye className="mr-2 h-3 w-3" />
                          Ver Perfil
                        </Button>
                        <Button variant="outline" size="sm" className="text-blue-600">
                          <Download className="mr-2 h-3 w-3" />
                          Descargar CV
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Cambiar estado</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleChangeApplicantStatus(applicant.id, "Nuevo")}>
                              Nuevo
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeApplicantStatus(applicant.id, "Revisado")}>
                              Revisado
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleChangeApplicantStatus(applicant.id, "Entrevistando")}
                            >
                              Entrevistando
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeApplicantStatus(applicant.id, "Seleccionado")}>
                              Seleccionado
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeApplicantStatus(applicant.id, "Rechazado")}>
                              Rechazado
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-purple-600"
                          onClick={() => handleScheduleInterview(applicant.id)}
                        >
                          <CalendarIcon className="mr-2 h-3 w-3" />
                          Programar Entrevista
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600"
                          onClick={() => handleChangeApplicantStatus(applicant.id, "Seleccionado")}
                        >
                          <ThumbsUp className="mr-2 h-3 w-3" />
                          Seleccionar
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600"
                          onClick={() => handleChangeApplicantStatus(applicant.id, "Rechazado")}
                        >
                          <ThumbsDown className="mr-2 h-3 w-3" />
                          Rechazar
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              {filteredApplicants.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
                  <Users className="mb-2 h-12 w-12 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900">No se encontraron aplicantes</h3>
                  <p className="text-gray-600">
                    {searchTerm
                      ? "Intenta con diferentes términos de búsqueda."
                      : "Aún no hay aplicantes para tus ofertas de empleo."}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Summary Cards with animations */}
              <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">Resumen de Reclutamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-2">
                    <div className="rounded-lg bg-blue-50 p-4 text-center">
                      <div className="flex flex-col items-center">
                        <Briefcase className="h-8 w-8 text-blue-600 mb-2 animate-pulse" />
                        <p className="text-sm text-blue-700">Ofertas Activas</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {jobs.filter((job) => job.status === "Activa").length}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <div className="flex flex-col items-center">
                        <Users className="h-8 w-8 text-green-600 mb-2 animate-pulse" />
                        <p className="text-sm text-green-700">Aplicantes</p>
                        <p className="text-2xl font-bold text-green-900">{applicants.length}</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CalendarIcon className="h-8 w-8 text-purple-600 mb-2 animate-pulse" />
                        <p className="text-sm text-purple-700">Entrevistas</p>
                        <p className="text-2xl font-bold text-purple-900">
                          {applicants.filter((a) => a.status === "Entrevistando").length}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle className="h-8 w-8 text-yellow-600 mb-2 animate-pulse" />
                        <p className="text-sm text-yellow-700">Seleccionados</p>
                        <p className="text-2xl font-bold text-yellow-900">
                          {applicants.filter((a) => a.status === "Seleccionado").length}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Positions Widget */}
              <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">Posiciones Más Solicitadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs
                      .sort((a, b) => b.applicants - a.applicants)
                      .slice(0, 5)
                      .map((job, index) => (
                        <div key={job.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                index === 0
                                  ? "bg-yellow-100 text-yellow-700"
                                  : index === 1
                                    ? "bg-gray-100 text-gray-700"
                                    : index === 2
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-blue-900">{job.title}</p>
                              <p className="text-xs text-blue-700">{job.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-blue-600 mr-1" />
                            <span className="text-blue-900">{job.applicants}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recruitment Funnel */}
              <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">Embudo de Reclutamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-900">Aplicaciones</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-900">{applicants.length}</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 animate-pulse"
                        ></div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-900">Revisados</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-900">
                            {
                              applicants.filter(
                                (a) =>
                                  a.status === "Revisado" ||
                                  a.status === "Entrevistando" ||
                                  a.status === "Seleccionado",
                              ).length
                            }
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: "75%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 animate-pulse"
                        ></div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-900">Entrevistas</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-900">
                            {
                              applicants.filter((a) => a.status === "Entrevistando" || a.status === "Seleccionado")
                                .length
                            }
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: "50%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 animate-pulse"
                        ></div>
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-900">Seleccionados</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-900">
                            {applicants.filter((a) => a.status === "Seleccionado").length}
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: "25%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-300 animate-pulse"
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-blue-100 md:col-span-2 lg:col-span-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...applicants]
                      .sort(() => Math.random() - 0.5)
                      .slice(0, 5)
                      .map((applicant) => (
                        <div key={applicant.id} className="flex items-start space-x-4 border-b border-blue-50 pb-4">
                          <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={applicant.photo || "/placeholder.svg"}
                              alt={applicant.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-blue-900">{applicant.name}</p>
                            <p className="text-sm text-blue-700">
                              {Math.random() > 0.5
                                ? `Aplicó para ${applicant.appliedFor}`
                                : `Cambió estado a ${applicant.status}`}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{applicant.appliedDate}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-blue-50 pt-4">
                  <Button variant="outline" className="w-full text-blue-600">
                    Ver Toda la Actividad
                  </Button>
                </CardFooter>
              </Card>

              {/* Recruitment Calendar */}
              <Card className="border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">Próximas Entrevistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[...applicants]
                      .filter((a) => a.status === "Entrevistando")
                      .slice(0, 3)
                      .map((applicant, index) => (
                        <div key={applicant.id} className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <CalendarIcon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-blue-900">{applicant.name}</p>
                            <p className="text-sm text-blue-700">{applicant.appliedFor}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString("es-ES", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-blue-50 pt-4">
                  <Button variant="outline" className="w-full text-blue-600">
                    Ver Calendario Completo
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Perfil de la Empresa</CardTitle>
                <CardDescription>Aquí puedes editar la información de tu empresa.</CardDescription>
              </CardHeader>
              <CardContent>
                {isEditingProfile ? (
                  <div className="grid gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre de la Empresa
                      </label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={editedCompany.name}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                        Industria
                      </label>
                      <Input
                        type="text"
                        name="industry"
                        id="industry"
                        value={editedCompany.industry}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                        Tamaño de la Empresa
                      </label>
                      <Input
                        type="text"
                        name="size"
                        id="size"
                        value={editedCompany.size}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Ubicación
                      </label>
                      <Input
                        type="text"
                        name="location"
                        id="location"
                        value={editedCompany.location}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Sitio Web
                      </label>
                      <Input
                        type="text"
                        name="website"
                        id="website"
                        value={editedCompany.website}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={editedCompany.email}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={editedCompany.phone}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Acerca de
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        value={editedCompany.about}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" onClick={handleCancelEdit}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSaveProfile}>Guardar</Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Nombre de la Empresa</p>
                      <p className="text-blue-900">{company.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Industria</p>
                      <p className="text-blue-900">{company.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Tamaño de la Empresa</p>
                      <p className="text-blue-900">{company.size}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Ubicación</p>
                      <p className="text-blue-900">{company.location}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Sitio Web</p>
                      <Link href={company.website} target="_blank" className="text-blue-600 hover:underline">
                        {company.website}
                      </Link>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-blue-900">{company.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Teléfono</p>
                      <p className="text-blue-900">{company.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Acerca de</p>
                      <p className="text-blue-900">{company.about}</p>
                    </div>
                    <Button onClick={handleEditProfile}>Editar Perfil</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {/* Diálogo para programar entrevista */}
        <Dialog open={isSchedulingInterview} onOpenChange={setIsSchedulingInterview}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Programar Entrevista</DialogTitle>
              <DialogDescription>Selecciona la fecha y hora para la entrevista con el candidato.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Fecha y hora</Label>
                <Calendar
                  mode="single"
                  selected={interviewDate}
                  onSelect={setInterviewDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSchedulingInterview(false)}>
                Cancelar
              </Button>
              <Button onClick={confirmScheduleInterview} disabled={!interviewDate}>
                Confirmar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="fixed bottom-8 right-8 z-10">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-transform duration-300 hover:scale-110">
                <Plus className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="end" side="top">
              <div className="grid gap-2">
                <Button className="justify-start" variant="ghost" onClick={handleAddJob}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  Nueva Oferta
                </Button>
                <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("applicants")}>
                  <Users className="mr-2 h-4 w-4" />
                  Ver Aplicantes
                </Button>
                <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("analytics")}>
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Ver Analíticas
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </main>
    </div>
  )
}

