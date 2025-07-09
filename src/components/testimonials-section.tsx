import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Automatizamos nuestros informes financieros, reduciendo en un 75% el tiempo de preparación y mejorando la toma de decisiones.",
    author: "María González",
    position: "CEO, Consultoría Financiera",
    initials: "MG"
  },
  {
    quote: "Los dashboards interactivos nos permitieron identificar tendencias de venta que no habíamos detectado, aumentando nuestros ingresos un 22%.",
    author: "Carlos Rodríguez",
    position: "Director Comercial, E-commerce",
    initials: "CR"
  },
  {
    quote: "El análisis de sentimiento en redes sociales nos ayudó a mejorar nuestra estrategia de comunicación y aumentar el engagement con nuestros clientes.",
    author: "Laura Martínez",
    position: "CMO, Startup Tecnológica",
    initials: "LM"
  }
]

export function TestimonialsSection() {
  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que han transformado su operación y mejorado sus resultados gracias a nuestras soluciones de análisis de datos y automatización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                
                <p className="text-muted-foreground italic text-center mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}