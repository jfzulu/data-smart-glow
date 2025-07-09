import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Cog, 
  BarChart3, 
  Download, 
  FileText, 
  GraduationCap, 
  FileSearch 
} from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Optimizamos tareas repetitivas y manuales para liberar tiempo valioso de tu equipo, reducir errores y mejorar la eficiencia operativa."
  },
  {
    icon: BarChart3,
    title: "Visualización de Datos",
    description: "Transformamos datos complejos en visualizaciones interactivas y dashboards que facilitan la comprensión y toma de decisiones efectivas."
  },
  {
    icon: Download,
    title: "Extracción y Procesamiento",
    description: "Extraemos, transformamos y limpiamos datos de múltiples fuentes para convertirlos en información valiosa y accionable para tu negocio."
  },
  {
    icon: FileText,
    title: "Consultoría en Análisis",
    description: "Asesoramos y desarrollamos estrategias para implementar una cultura data-driven en tu organización, identificando KPIs clave y oportunidades de mejora."
  },
  {
    icon: GraduationCap,
    title: "Formación y Capacitación",
    description: "Programas de formación personalizados para que tu equipo desarrolle habilidades analíticas y aproveche al máximo las herramientas disponibles."
  },
  {
    icon: FileSearch,
    title: "Análisis de Datos No Estructurados",
    description: "Extraemos insights valiosos de textos, imágenes y comunicaciones mediante técnicas avanzadas de procesamiento y análisis inteligente."
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            QUE OFRECEMOS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos soluciones a medida que permiten aprovechar al máximo el valor de tus datos, 
            desde la automatización de procesos hasta la visualización avanzada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-border hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}