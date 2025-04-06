"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Bell,
  Briefcase,
  LogOut,
  Search,
  User,
  MapPin,
  DollarSign,
  Clock,
  Star,
  StarOff,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Calendar,
  FileText,
  Edit,
  Save,
  Plus,
  Trash,
  Building,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Datos simulados
const mockUser = {
  name: "Carlos Rodríguez",
  title: "Desarrollador Frontend",
  location: "Bogotá, Colombia",
  email: "carlos@ejemplo.com",
  phone: "(+57) 312 345 678",
  about:
    "Desarrollador frontend con 5 años de experiencia en React, TypeScript y diseño UI/UX. Apasionado por crear experiencias de usuario intuitivas y atractivas.",
  skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "UI/UX", "Figma"],
  experience: [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      company: "TechCorp",
      location: "Bogotá, Colombia",
      startDate: "Enero 2021",
      endDate: "Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React y TypeScript. Implementación de diseños responsivos y accesibles. Colaboración con equipos de diseño y backend.",
    },
    {
      id: 2,
      title: "Desarrollador Frontend",
      company: "WebSolutions",
      location: "Medellín, Colombia",
      startDate: "Marzo 2019",
      endDate: "Diciembre 2020",
      description:
        "Desarrollo de interfaces de usuario para aplicaciones web. Implementación de diseños responsivos utilizando HTML, CSS y JavaScript.",
    },
    {
      id: 3,
      title: "Desarrollador Web Junior",
      company: "DigitalAgency",
      location: "Bogotá, Colombia",
      startDate: "Junio 2018",
      endDate: "Febrero 2019",
      description:
        "Desarrollo de sitios web para clientes utilizando HTML, CSS y JavaScript. Implementación de diseños responsivos y optimización para SEO.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Nacional de Colombia",
      location: "Bogotá, Colombia",
      startDate: "2014",
      endDate: "2018",
      description: "Especialización en desarrollo de software y sistemas de información.",
    },
    {
      id: 2,
      degree: "Bootcamp de Desarrollo Web",
      institution: "Coding Academy",
      location: "Online",
      startDate: "2018",
      endDate: "2018",
      description: "Programa intensivo de 12 semanas enfocado en desarrollo web frontend y backend.",
    },
  ],
  photo: "/placeholder.svg?height=128&width=128",
}

const mockJobs = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    company: "TechCorp",
    location: "Remoto",
    salary: "$3,000,000 - $4,500,000",
    type: "Tiempo completo",
    posted: "hace 2 días",
    description:
      "Estamos buscando un Desarrollador Frontend con experiencia para unirse a nuestro equipo y ayudar a crear experiencias de usuario increíbles.",
    requirements: ["React", "TypeScript", "Tailwind CSS"],
    saved: false,
    applied: false,
  },
  {
    id: 2,
    title: "Diseñador UX",
    company: "DesignStudio",
    location: "Bogotá, Colombia",
    salary: "$3,500,000 - $5,000,000",
    type: "Tiempo completo",
    posted: "hace 1 semana",
    description:
      "Únete a nuestro equipo de diseño para crear experiencias de usuario intuitivas y atractivas para nuestros productos.",
    requirements: ["Figma", "Investigación de usuarios", "Prototipado"],
    saved: true,
    applied: false,
  },
  {
    id: 3,
    title: "Ingeniero Backend",
    company: "SoftwareSolutions",
    location: "Medellín, Colombia",
    salary: "$4,000,000 - $6,000,000",
    type: "Tiempo completo",
    posted: "hace 3 días",
    description:
      "Necesitamos un Ingeniero Backend talentoso para ayudar a escalar nuestra infraestructura y construir APIs robustas.",
    requirements: ["Node.js", "PostgreSQL", "AWS"],
    saved: false,
    applied: true,
  },
  {
    id: 4,
    title: "Especialista en DevOps",
    company: "CloudTech",
    location: "Remoto",
    salary: "$4,500,000 - $6,500,000",
    type: "Contrato",
    posted: "hace 5 días",
    description:
      "Buscamos un especialista en DevOps para mejorar nuestros procesos de implementación e infraestructura.",
    requirements: ["Docker", "Kubernetes", "CI/CD"],
    saved: true,
    applied: true,
  },
  {
    id: 5,
    title: "Analista de Marketing Digital",
    company: "MarketingPro",
    location: "Cali, Colombia",
    salary: "$2,800,000 - $4,000,000",
    type: "Tiempo completo",
    posted: "hace 1 día",
    description:
      "Únete a nuestro equipo de marketing para impulsar el crecimiento de nuestros clientes a través de estrategias digitales innovadoras.",
    requirements: ["Google Analytics", "SEO", "Publicidad en redes sociales"],
    saved: false,
    applied: false,
  },
  {
    id: 6,
    title: "Representante de Ventas",
    company: "SalesMaster",
    location: "Bogotá, Colombia",
    salary: "$3,000,000 - $5,000,000 + comisiones",
    type: "Tiempo completo",
    posted: "hace 4 días",
    description:
      "Buscamos un representante de ventas entusiasta para expandir nuestra cartera de clientes y alcanzar nuevos mercados.",
    requirements: ["Experiencia en ventas B2B", "CRM", "Negociación"],
    saved: false,
    applied: false,
  },
  {
    id: 7,
    title: "Diseñador Gráfico",
    company: "CreativeStudio",
    location: "Medellín, Colombia",
    salary: "$2,500,000 - $3,500,000",
    type: "Tiempo completo",
    posted: "hace 2 semanas",
    description: "Únete a nuestro estudio creativo para trabajar en proyectos emocionantes para clientes de renombre.",
    requirements: ["Adobe Creative Suite", "Diseño de marca", "Ilustración"],
    saved: false,
    applied: false,
  },
  {
    id: 8,
    title: "Analista Financiero",
    company: "FinanceGroup",
    location: "Bogotá, Colombia",
    salary: "$3,500,000 - $5,500,000",
    type: "Tiempo completo",
    posted: "hace 6 días",
    description:
      "Buscamos un analista financiero detallista para unirse a nuestro equipo y ayudar en la toma de decisiones estratégicas.",
    requirements: ["Excel avanzado", "Modelado financiero", "Contabilidad"],
    saved: false,
    applied: false,
  },
  {
    id: 9,
    title: "Profesor de Inglés",
    company: "LanguageAcademy",
    location: "Barranquilla, Colombia",
    salary: "$2,000,000 - $3,000,000",
    type: "Tiempo parcial",
    posted: "hace 1 semana",
    description:
      "Únete a nuestra academia de idiomas y ayuda a estudiantes de todas las edades a mejorar sus habilidades en inglés.",
    requirements: ["Nativo o bilingüe en inglés", "TEFL/CELTA", "Experiencia docente"],
    saved: false,
    applied: false,
  },
  {
    id: 10,
    title: "Enfermero/a",
    company: "HealthCenter",
    location: "Cali, Colombia",
    salary: "$2,500,000 - $3,500,000",
    type: "Tiempo completo",
    posted: "hace 3 días",
    description:
      "Buscamos enfermeros/as comprometidos para brindar atención de calidad a nuestros pacientes en el centro de salud.",
    requirements: ["Grado en Enfermería", "Colegiación", "Experiencia en atención primaria"],
    saved: false,
    applied: false,
  },
  {
    id: 11,
    title: "Desarrollador Full Stack",
    company: "WebTech",
    location: "Remoto",
    salary: "$4,000,000 - $6,000,000",
    type: "Tiempo completo",
    posted: "hace 5 días",
    description: "Únete a nuestro equipo de desarrollo para crear aplicaciones web innovadoras y escalables.",
    requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
    saved: false,
    applied: false,
  },
  {
    id: 12,
    title: "Especialista en SEO",
    company: "DigitalMarketing",
    location: "Medellín, Colombia",
    salary: "$3,000,000 - $4,500,000",
    type: "Tiempo completo",
    posted: "hace 1 semana",
    description:
      "Buscamos un especialista en SEO para mejorar la visibilidad online de nuestros clientes y aumentar el tráfico orgánico.",
    requirements: ["SEO técnico", "Análisis de palabras clave", "Content Marketing"],
    saved: false,
    applied: false,
  },
]

const mockApplications = [
  {
    id: 1,
    jobTitle: "Ingeniero Backend",
    company: "SoftwareSolutions",
    location: "Medellín, Colombia",
    appliedDate: "hace 1 semana",
    status: "En revisión",
    jobType: "Tiempo completo",
    salary: "$4,000,000 - $6,000,000",
  },
  {
    id: 2,
    jobTitle: "Especialista en DevOps",
    company: "CloudTech",
    location: "Remoto",
    appliedDate: "hace 3 días",
    status: "Entrevista programada",
    jobType: "Contrato",
    salary: "$4,500,000 - $6,500,000",
    interviewDate: "15 de mayo, 2023 - 10:00 AM",
  },
  {
    id: 3,
    jobTitle: "Desarrollador Frontend",
    company: "WebDev",
    location: "Bogotá, Colombia",
    appliedDate: "hace 2 semanas",
    status: "Rechazado",
    jobType: "Tiempo completo",
    salary: "$3,500,000 - $4,500,000",
    feedback:
      "Gracias por tu interés. Hemos decidido seguir adelante con otros candidatos que tienen más experiencia en Vue.js.",
  },
  {
    id: 4,
    jobTitle: "Diseñador UI/UX",
    company: "DesignHub",
    location: "Remoto",
    appliedDate: "hace 1 mes",
    status: "Oferta recibida",
    jobType: "Tiempo completo",
    salary: "$3,800,000 - $4,800,000",
    offerDetails: {
      salary: "$4,500,000",
      startDate: "1 de junio, 2023",
      benefits: ["Seguro médico", "Trabajo remoto", "Horario flexible"],
    },
  },
]

// Notificaciones simuladas
const mockNotifications = [
  {
    id: 1,
    title: "Entrevista programada",
    message: "Tienes una entrevista para el puesto de Especialista en DevOps el 15 de mayo a las 10:00 AM.",
    time: "Hace 2 horas",
    read: false,
    type: "interview",
  },
  {
    id: 2,
    title: "Oferta recibida",
    message: "Has recibido una oferta para el puesto de Diseñador UI/UX en DesignHub.",
    time: "Hace 1 día",
    read: false,
    type: "offer",
  },
  {
    id: 3,
    title: "Aplicación vista",
    message: "Tu aplicación para el puesto de Ingeniero Backend ha sido vista por SoftwareSolutions.",
    time: "Hace 3 días",
    read: true,
    type: "application",
  },
  {
    id: 4,
    title: "Nuevas ofertas disponibles",
    message: "Hay 5 nuevas ofertas de trabajo que coinciden con tu perfil.",
    time: "Hace 1 semana",
    read: true,
    type: "job",
  },
]

export default function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState("search")
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("Todas")
  const [typeFilter, setTypeFilter] = useState("Todos")
  const [salaryFilter, setSalaryFilter] = useState("Todos")
  const [jobs, setJobs] = useState(mockJobs)
  const [applications, setApplications] = useState(mockApplications)
  const [savedJobs, setSavedJobs] = useState(mockJobs.filter((job) => job.saved))
  const [notifications, setNotifications] = useState(mockNotifications)
  const [unreadCount, setUnreadCount] = useState(mockNotifications.filter((n) => !n.read).length)
  const [user, setUser] = useState(mockUser)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editedUser, setEditedUser] = useState(mockUser)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [isAddingExperience, setIsAddingExperience] = useState(false)
  const [isAddingEducation, setIsAddingEducation] = useState(false)
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [editingExperienceId, setEditingExperienceId] = useState<number | null>(null)
  const [editingEducationId, setEditingEducationId] = useState<number | null>(null)

  // Función para filtrar trabajos
  const filteredJobs = jobs.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some((req) => req.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (locationFilter === "Todas" || job.location.includes(locationFilter)) &&
      (typeFilter === "Todos" || job.type === typeFilter) &&
      (salaryFilter === "Todos" ||
        (salaryFilter === "Menos de $3M" && Number.parseInt(job.salary.replace(/[^0-9]/g, "")) < 3000000) ||
        (salaryFilter === "$3M - $5M" &&
          Number.parseInt(job.salary.replace(/[^0-9]/g, "")) >= 3000000 &&
          Number.parseInt(job.salary.replace(/[^0-9]/g, "")) <= 5000000) ||
        (salaryFilter === "Más de $5M" && Number.parseInt(job.salary.replace(/[^0-9]/g, "")) > 5000000)),
  )

  // Ubicaciones únicas para filtros
  const locations = ["Todas", ...Array.from(new Set(jobs.map((job) => job.location.split(",")[0])))]
  const jobTypes = ["Todos", ...Array.from(new Set(jobs.map((job) => job.type)))]
  const salaryRanges = ["Todos", "Menos de $3M", "$3M - $5M", "Más de $5M"]

  // Funciones para manejar notificaciones
  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    setUnreadCount(0)
  }

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  // Funciones para manejar trabajos guardados
  const toggleSaveJob = (jobId: number) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          const newSavedState = !job.saved
          // Si estamos guardando un trabajo, añadir notificación
          if (newSavedState) {
            const jobToSave = prev.find((j) => j.id === jobId)
            if (jobToSave) {
              const newNotification = {
                id: notifications.length + 1,
                title: "Trabajo guardado",
                message: `Has guardado la oferta de ${jobToSave.title} en ${jobToSave.company}.`,
                time: "Ahora",
                read: false,
                type: "saved",
              }
              setNotifications((prev) => [newNotification, ...prev])
              setUnreadCount((prev) => prev + 1)
            }
          }
          return { ...job, saved: newSavedState }
        }
        return job
      }),
    )

    // Actualizar la lista de trabajos guardados
    setSavedJobs((prev) => {
      const job = jobs.find((j) => j.id === jobId)
      if (!job) return prev

      if (job.saved) {
        // Si ya estaba guardado, lo quitamos
        return prev.filter((j) => j.id !== jobId)
      } else {
        // Si no estaba guardado, lo añadimos
        return [...prev, { ...job, saved: true }]
      }
    })

    showToast(
      jobs.find((j) => j.id === jobId)?.saved ? "Trabajo eliminado de guardados" : "Trabajo guardado correctamente",
    )
  }

  // Función para aplicar a un trabajo
  const applyToJob = (jobId: number) => {
    // Marcar el trabajo como aplicado
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          // Si estamos aplicando a un trabajo, añadir notificación
          if (!job.applied) {
            const newNotification = {
              id: notifications.length + 1,
              title: "Aplicación enviada",
              message: `Has aplicado al puesto de ${job.title} en ${job.company}.`,
              time: "Ahora",
              read: false,
              type: "application",
            }
            setNotifications((prev) => [newNotification, ...prev])
            setUnreadCount((prev) => prev + 1)
          }
          return { ...job, applied: true }
        }
        return job
      }),
    )

    // Añadir a la lista de aplicaciones
    const jobToApply = jobs.find((j) => j.id === jobId)
    if (jobToApply && !jobToApply.applied) {
      const newApplication = {
        id: applications.length + 1,
        jobTitle: jobToApply.title,
        company: jobToApply.company,
        location: jobToApply.location,
        appliedDate: "hoy",
        status: "Aplicación enviada",
        jobType: jobToApply.type,
        salary: jobToApply.salary,
      }
      setApplications((prev) => [...prev, newApplication])
    }

    showToast("Aplicación enviada correctamente")
  }

  // Funciones para manejar el perfil del usuario
  const handleEditProfile = () => {
    setEditedUser(user)
    setIsEditingProfile(true)
  }

  const handleSaveProfile = () => {
    setUser(editedUser)
    setIsEditingProfile(false)

    // Añadir notificación
    const newNotification = {
      id: notifications.length + 1,
      title: "Perfil actualizado",
      message: "Tu perfil ha sido actualizado correctamente.",
      time: "Ahora",
      read: false,
      type: "profile",
    }
    setNotifications((prev) => [newNotification, ...prev])
    setUnreadCount((prev) => prev + 1)

    showToast("Perfil actualizado correctamente")
  }

  const handleCancelEdit = () => {
    setIsEditingProfile(false)
    setEditedUser(user)
  }

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSkillChange = (skills: string) => {
    setEditedUser((prev) => ({
      ...prev,
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    }))
  }

  // Funciones para manejar experiencia laboral
  const handleAddExperience = () => {
    setIsAddingExperience(true)
    setNewExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    })
  }

  const handleSaveNewExperience = () => {
    const id = Math.max(0, ...user.experience.map((exp) => exp.id)) + 1
    setUser((prev) => ({
      ...prev,
      experience: [...prev.experience, { id, ...newExperience }],
    }))
    setIsAddingExperience(false)
    showToast("Experiencia añadida correctamente")
  }

  const handleEditExperience = (id: number) => {
    const expToEdit = user.experience.find((exp) => exp.id === id)
    if (expToEdit) {
      setNewExperience({
        title: expToEdit.title,
        company: expToEdit.company,
        location: expToEdit.location,
        startDate: expToEdit.startDate,
        endDate: expToEdit.endDate,
        description: expToEdit.description,
      })
      setEditingExperienceId(id)
      setIsAddingExperience(true)
    }
  }

  const handleUpdateExperience = () => {
    if (editingExperienceId !== null) {
      setUser((prev) => ({
        ...prev,
        experience: prev.experience.map((exp) => (exp.id === editingExperienceId ? { ...exp, ...newExperience } : exp)),
      }))
      setIsAddingExperience(false)
      setEditingExperienceId(null)
      showToast("Experiencia actualizada correctamente")
    }
  }

  const handleDeleteExperience = (id: number) => {
    setUser((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }))
    showToast("Experiencia eliminada correctamente")
  }

  // Funciones para manejar educación
  const handleAddEducation = () => {
    setIsAddingEducation(true)
    setNewEducation({
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    })
  }

  const handleSaveNewEducation = () => {
    const id = Math.max(0, ...user.education.map((edu) => edu.id)) + 1
    setUser((prev) => ({
      ...prev,
      education: [...prev.education, { id, ...newEducation }],
    }))
    setIsAddingEducation(false)
    showToast("Educación añadida correctamente")
  }

  const handleEditEducation = (id: number) => {
    const eduToEdit = user.education.find((edu) => edu.id === id)
    if (eduToEdit) {
      setNewEducation({
        degree: eduToEdit.degree,
        institution: eduToEdit.institution,
        location: eduToEdit.location,
        startDate: eduToEdit.startDate,
        endDate: eduToEdit.description,
      })
      setEditingEducationId(id)
      setIsAddingEducation(true)
    }
  }

  const handleUpdateEducation = () => {
    if (editingEducationId !== null) {
      setUser((prev) => ({
        ...prev,
        education: prev.education.map((edu) => (edu.id === editingEducationId ? { ...edu, ...newEducation } : edu)),
      }))
      setIsAddingEducation(false)
      setEditingEducationId(null)
      showToast("Educación actualizada correctamente")
    }
  }

  const handleDeleteEducation = (id: number) => {
    setUser((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
    showToast("Educación eliminada correctamente")
  }

  // Función para mostrar toast de éxito
  const showToast = (message: string) => {
    setSuccessMessage(message)
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 3000)
  }

  // Añadir esta función después de la función showToast
  const downloadCV = () => {
    // En un caso real, esto generaría un PDF con los datos del usuario
    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(user, null, 2)))
    element.setAttribute("download", `CV_${user.name.replace(/\s+/g, "_")}.pdf`)
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    showToast("CV descargado correctamente")
  }

  // Añadir después de la función downloadCV
  const shareProfile = (platform: string) => {
    const profileUrl = `https://empleoya.com/profile/${user.name.replace(/\s+/g, "-").toLowerCase()}`
    let shareUrl = ""

    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent("¡Mira mi perfil profesional en EmpleoYa!")}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`
        break
      default:
        // Copiar al portapapeles
        navigator.clipboard.writeText(profileUrl)
        showToast("Enlace copiado al portapapeles")
        return
    }

    window.open(shareUrl, "_blank")
    showToast(`Perfil compartido en ${platform}`)
  }

  // Efecto para manejar la navegación por pestañas con hash URLs
  useEffect(() => {
    // Función para manejar cambios en el hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["search", "applications", "saved", "profile"].includes(hash)) {
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
                          <div
                            className={`mt-0.5 rounded-full p-1.5 ${
                              notification.type === "interview"
                                ? "bg-purple-100 text-purple-600"
                                : notification.type === "offer"
                                  ? "bg-green-100 text-green-600"
                                  : notification.type === "application"
                                    ? "bg-blue-100 text-blue-600"
                                    : notification.type === "saved"
                                      ? "bg-yellow-100 text-yellow-600"
                                      : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {notification.type === "interview" ? (
                              <Calendar className="h-4 w-4" />
                            ) : notification.type === "offer" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : notification.type === "application" ? (
                              <FileText className="h-4 w-4" />
                            ) : notification.type === "saved" ? (
                              <Star className="h-4 w-4" />
                            ) : (
                              <Bell className="h-4 w-4" />
                            )}
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
              {user.name.charAt(0)}
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
        <Tabs defaultValue="search" onValueChange={setActiveTab} value={activeTab}>
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <TabsList className="bg-white">
              <TabsTrigger value="search" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                <Search className="mr-2 h-4 w-4" />
                Buscar Trabajo
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Mis Postulaciones
              </TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                <Star className="mr-2 h-4 w-4" />
                Guardados
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
              >
                <User className="mr-2 h-4 w-4" />
                Mi Perfil
              </TabsTrigger>
            </TabsList>
          </div>

          {activeTab === "search" && (
            <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white shadow-md animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Bienvenido, {user.name}</h2>
                  <p className="mt-1 text-blue-100">
                    Encuentra el trabajo perfecto para ti entre miles de ofertas disponibles.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button className="bg-white text-blue-800 hover:bg-blue-50">
                    <Star className="mr-2 h-4 w-4" />
                    Ofertas Recomendadas
                  </Button>
                </div>
              </div>
            </div>
          )}

          <TabsContent value="search" className="mt-0">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por título, empresa o habilidades"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
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

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Clock className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Tipo de empleo" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={salaryFilter} onValueChange={setSalaryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <DollarSign className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Rango salarial" />
                  </SelectTrigger>
                  <SelectContent>
                    {salaryRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
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
                          {job.company} • {job.location}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleSaveJob(job.id)}
                        className={job.saved ? "text-yellow-500" : "text-gray-400"}
                      >
                        {job.saved ? <Star className="h-5 w-5 fill-current" /> : <Star className="h-5 w-5" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-blue-50">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50">
                        {job.salary}
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
                    <Button
                      className={`w-full ${
                        job.applied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                      } transition-transform duration-300 hover:translate-y-[-2px]`}
                      onClick={() => applyToJob(job.id)}
                      disabled={job.applied}
                    >
                      {job.applied ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Aplicado
                        </>
                      ) : (
                        <>
                          <Briefcase className="mr-2 h-4 w-4" />
                          Aplicar Ahora
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {filteredJobs.length === 0 && (
                <div className="col-span-2 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
                  <Search className="mb-2 h-12 w-12 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900">No se encontraron resultados</h3>
                  <p className="text-gray-600">Intenta con diferentes términos de búsqueda o ajusta los filtros.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-0">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Mis Postulaciones</CardTitle>
                <CardDescription>
                  Revisa el estado de tus postulaciones y mantente al día con tus procesos de selección
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
                      <Briefcase className="mb-2 h-12 w-12 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900">No tienes postulaciones activas</h3>
                      <p className="text-gray-600">
                        Comienza a aplicar a ofertas de trabajo para ver tu progreso aquí.
                      </p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={() => setActiveTab("search")}>
                        <Search className="mr-2 h-4 w-4" />
                        Buscar Trabajos
                      </Button>
                    </div>
                  ) : (
                    applications.map((application) => (
                      <div
                        key={application.id}
                        className="rounded-lg border border-blue-100 p-4 transition-all hover:shadow-sm"
                      >
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div>
                            <h3 className="font-medium text-blue-900">{application.jobTitle}</h3>
                            <p className="text-sm text-blue-700">
                              {application.company} • {application.location}
                            </p>
                          </div>

                          <div>
                            <Badge
                              className={
                                application.status === "En revisión"
                                  ? "bg-blue-100 text-blue-800"
                                  : application.status === "Entrevista programada"
                                    ? "bg-purple-100 text-purple-800"
                                    : application.status === "Oferta recibida"
                                      ? "bg-green-100 text-green-800"
                                      : application.status === "Rechazado"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-gray-100 text-gray-800"
                              }
                            >
                              {application.status}
                            </Badge>
                          </div>
                        </div>

                        <Separator className="my-3" />

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div>
                            <p className="text-xs font-medium text-gray-500">Tipo de empleo</p>
                            <p className="text-sm text-blue-900">{application.jobType}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500">Rango salarial</p>
                            <p className="text-sm text-blue-900">{application.salary}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500">Fecha de aplicación</p>
                            <p className="text-sm text-blue-900">{application.appliedDate}</p>
                          </div>
                        </div>

                        {application.status === "Entrevista programada" && application.interviewDate && (
                          <div className="mt-3 rounded-md bg-purple-50 p-3">
                            <div className="flex items-center gap-2 text-purple-800">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">Entrevista programada:</span>
                              <span>{application.interviewDate}</span>
                            </div>
                          </div>
                        )}

                        {application.status === "Oferta recibida" && application.offerDetails && (
                          <div className="mt-3 rounded-md bg-green-50 p-3">
                            <h4 className="mb-2 font-medium text-green-800">Detalles de la oferta:</h4>
                            <ul className="space-y-1 text-sm text-green-800">
                              <li>
                                <span className="font-medium">Salario ofrecido:</span> {application.offerDetails.salary}
                              </li>
                              <li>
                                <span className="font-medium">Fecha de inicio:</span>{" "}
                                {application.offerDetails.startDate}
                              </li>
                              <li>
                                <span className="font-medium">Beneficios:</span>{" "}
                                {application.offerDetails.benefits.join(", ")}
                              </li>
                            </ul>
                          </div>
                        )}

                        {application.status === "Rechazado" && application.feedback && (
                          <div className="mt-3 rounded-md bg-red-50 p-3">
                            <div className="flex items-start gap-2 text-red-800">
                              <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Feedback:</span>
                                <p className="text-sm">{application.feedback}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mt-3 flex justify-end">
                          <Button variant="outline" size="sm" className="text-blue-600">
                            <Building className="mr-2 h-3 w-3" />
                            Ver Empresa
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Trabajos Guardados</CardTitle>
                <CardDescription>Revisa las ofertas de trabajo que has guardado para aplicar más tarde</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs.filter((job) => job.saved).length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
                      <Star className="mb-2 h-12 w-12 text-gray-400" />
                      <h3 className="text-lg font-medium text-gray-900">No tienes trabajos guardados</h3>
                      <p className="text-gray-600">Guarda ofertas de trabajo interesantes para revisarlas más tarde.</p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={() => setActiveTab("search")}>
                        <Search className="mr-2 h-4 w-4" />
                        Buscar Trabajos
                      </Button>
                    </div>
                  ) : (
                    jobs
                      .filter((job) => job.saved)
                      .map((job) => (
                        <div
                          key={job.id}
                          className="rounded-lg border border-blue-100 p-4 transition-all hover:shadow-sm"
                        >
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium text-blue-900">{job.title}</h3>
                              <p className="text-sm text-blue-700">
                                {job.company} • {job.location}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleSaveJob(job.id)}
                              className="text-yellow-500"
                            >
                              <StarOff className="h-5 w-5" />
                            </Button>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-blue-50">
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="bg-blue-50">
                              {job.salary}
                            </Badge>
                            <Badge variant="outline" className="bg-blue-50">
                              Publicado {job.posted}
                            </Badge>
                          </div>

                          <p className="mt-3 text-sm text-gray-600">{job.description}</p>

                          <div className="mt-3 flex justify-end">
                            <Button
                              className={`${
                                job.applied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                              }`}
                              onClick={() => applyToJob(job.id)}
                              disabled={job.applied}
                            >
                              {job.applied ? (
                                <>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Aplicado
                                </>
                              ) : (
                                <>
                                  <Briefcase className="mr-2 h-4 w-4" />
                                  Aplicar Ahora
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            <div className="grid gap-6 md:grid-cols-3">
              {/* User Summary */}
              <Card className="border-blue-100 md:col-span-1">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Mi Perfil</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="h-32 w-32 overflow-hidden rounded-full">
                      <img
                        src={user.photo || "/placeholder.svg"}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-medium text-blue-900">{user.name}</h3>
                    <p className="text-blue-700">{user.title}</p>
                    <p className="text-sm text-gray-600">{user.location}</p>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>{user.email}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>{user.phone}</span>
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-medium text-blue-900">Habilidades</h4>
                    <div className="flex flex-wrap gap-1">
                      {user.skills.map((skill) => (
                        <Badge key={skill} className="bg-blue-100 text-blue-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 mb-2" onClick={downloadCV}>
                    <FileText className="mr-2 h-4 w-4" />
                    Descargar CV
                  </Button>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Compartir perfil</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => shareProfile("linkedin")}
                      >
                        <Linkedin className="h-4 w-4 text-blue-700" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => shareProfile("twitter")}>
                        <Twitter className="h-4 w-4 text-blue-400" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => shareProfile("facebook")}
                      >
                        <Facebook className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => shareProfile("copy")}>
                        <Share2 className="h-4 w-4 text-gray-600" />
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleEditProfile}>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              {/* User Details */}
              <Card className="border-blue-100 md:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-900">
                      {isEditingProfile ? "Editar Perfil" : "Detalles del Perfil"}
                    </CardTitle>
                    {isEditingProfile && (
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={handleCancelEdit}>
                          Cancelar
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveProfile}>
                          <Save className="mr-2 h-4 w-4" />
                          Guardar
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditingProfile ? (
                    // Formulario de edición
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input id="name" name="name" value={editedUser.name} onChange={handleUserChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Título profesional</Label>
                          <Input id="title" name="title" value={editedUser.title} onChange={handleUserChange} />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={editedUser.email}
                            onChange={handleUserChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" name="phone" value={editedUser.phone} onChange={handleUserChange} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Ubicación</Label>
                        <Input id="location" name="location" value={editedUser.location} onChange={handleUserChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="about">Acerca de mí</Label>
                        <Textarea
                          id="about"
                          name="about"
                          rows={4}
                          value={editedUser.about}
                          onChange={handleUserChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="skills">Habilidades (separadas por comas)</Label>
                        <Input
                          id="skills"
                          name="skills"
                          value={editedUser.skills.join(", ")}
                          onChange={(e) => handleSkillChange(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photo">URL de foto de perfil</Label>
                        <Input
                          id="photo"
                          name="photo"
                          placeholder="URL de la imagen"
                          value={editedUser.photo}
                          onChange={handleUserChange}
                        />
                        {editedUser.photo && (
                          <div className="mt-2 flex justify-center">
                            <img
                              src={editedUser.photo || "/placeholder.svg"}
                              alt="Vista previa"
                              className="h-20 w-20 rounded-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Vista de perfil
                    <>
                      <div>
                        <h3 className="mb-2 text-lg font-medium text-blue-900">Acerca de mí</h3>
                        <p className="text-gray-600">{user.about}</p>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-medium text-blue-900">Experiencia Laboral</h3>
                          <Button variant="outline" size="sm" className="text-blue-600" onClick={handleAddExperience}>
                            <Plus className="mr-2 h-3 w-3" />
                            Añadir
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {user.experience.map((exp) => (
                            <div key={exp.id} className="rounded-lg border border-blue-100 p-4">
                              <div className="mb-2 flex items-start justify-between">
                                <div>
                                  <h4 className="font-medium text-blue-900">{exp.title}</h4>
                                  <p className="text-blue-700">
                                    {exp.company} • {exp.location}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {exp.startDate} - {exp.endDate}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-blue-600"
                                    onClick={() => handleEditExperience(exp.id)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-600"
                                    onClick={() => handleDeleteExperience(exp.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-medium text-blue-900">Educación</h3>
                          <Button variant="outline" size="sm" className="text-blue-600" onClick={handleAddEducation}>
                            <Plus className="mr-2 h-3 w-3" />
                            Añadir
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {user.education.map((edu) => (
                            <div key={edu.id} className="rounded-lg border border-blue-100 p-4">
                              <div className="mb-2 flex items-start justify-between">
                                <div>
                                  <h4 className="font-medium text-blue-900">{edu.degree}</h4>
                                  <p className="text-blue-700">
                                    {edu.institution} • {edu.location}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {edu.startDate} - {edu.endDate}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-blue-600"
                                    onClick={() => handleEditEducation(edu.id)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-600"
                                    onClick={() => handleDeleteEducation(edu.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{edu.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Diálogo para añadir/editar experiencia */}
            <Dialog open={isAddingExperience} onOpenChange={setIsAddingExperience}>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>
                    {editingExperienceId !== null ? "Editar Experiencia" : "Añadir Experiencia"}
                  </DialogTitle>
                  <DialogDescription>Completa los detalles de tu experiencia laboral a continuación.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="exp-title">Cargo</Label>
                    <Input
                      id="exp-title"
                      value={newExperience.title}
                      onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                      placeholder="ej. Desarrollador Frontend"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="exp-company">Empresa</Label>
                      <Input
                        id="exp-company"
                        value={newExperience.company}
                        onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                        placeholder="ej. TechCorp"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="exp-location">Ubicación</Label>
                      <Input
                        id="exp-location"
                        value={newExperience.location}
                        onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                        placeholder="ej. Bogotá, Colombia"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="exp-start-date">Fecha de inicio</Label>
                      <Input
                        id="exp-start-date"
                        value={newExperience.startDate}
                        onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                        placeholder="ej. Enero 2020"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="exp-end-date">Fecha de fin</Label>
                      <Input
                        id="exp-end-date"
                        value={newExperience.endDate}
                        onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                        placeholder="ej. Presente"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="exp-description">Descripción</Label>
                    <Textarea
                      id="exp-description"
                      value={newExperience.description}
                      onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                      placeholder="Describe tus responsabilidades y logros"
                      rows={4}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingExperience(false)}>
                    Cancelar
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={editingExperienceId !== null ? handleUpdateExperience : handleSaveNewExperience}
                  >
                    {editingExperienceId !== null ? "Actualizar" : "Guardar"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Diálogo para añadir/editar educación */}
            <Dialog open={isAddingEducation} onOpenChange={setIsAddingEducation}>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{editingEducationId !== null ? "Editar Educación" : "Añadir Educación"}</DialogTitle>
                  <DialogDescription>Completa los detalles de tu formación académica a continuación.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="edu-degree">Título o Grado</Label>
                    <Input
                      id="edu-degree"
                      value={newEducation.degree}
                      onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                      placeholder="ej. Ingeniería de Sistemas"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="edu-institution">Institución</Label>
                      <Input
                        id="edu-institution"
                        value={newEducation.institution}
                        onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                        placeholder="ej. Universidad Nacional"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="edu-location">Ubicación</Label>
                      <Input
                        id="edu-location"
                        value={newEducation.location}
                        onChange={(e) => setNewEducation({ ...newEducation, location: e.target.value })}
                        placeholder="ej. Bogotá, Colombia"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="edu-start-date">Fecha de inicio</Label>
                      <Input
                        id="edu-start-date"
                        value={newEducation.startDate}
                        onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                        placeholder="ej. 2016"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="edu-end-date">Fecha de fin</Label>
                      <Input
                        id="edu-end-date"
                        value={newEducation.endDate}
                        onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                        placeholder="ej. 2020"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="edu-description">Descripción</Label>
                    <Textarea
                      id="edu-description"
                      value={newEducation.description}
                      onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                      placeholder="Describe tu formación, especialización o logros académicos"
                      rows={4}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingEducation(false)}>
                    Cancelar
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={editingEducationId !== null ? handleUpdateEducation : handleSaveNewEducation}
                  >
                    {editingEducationId !== null ? "Actualizar" : "Guardar"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>
        </Tabs>
      </main>
      <div className="fixed bottom-8 right-8 z-10">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-transform duration-300 hover:scale-110">
              <Plus className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="end" side="top">
            <div className="grid gap-2">
              <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("search")}>
                <Search className="mr-2 h-4 w-4" />
                Buscar Trabajos
              </Button>
              <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("applications")}>
                <Briefcase className="mr-2 h-4 w-4" />
                Mis Postulaciones
              </Button>
              <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("saved")}>
                <Star className="mr-2 h-4 w-4" />
                Trabajos Guardados
              </Button>
              <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("profile")}>
                <User className="mr-2 h-4 w-4" />
                Mi Perfil
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

