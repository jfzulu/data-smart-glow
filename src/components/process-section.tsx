import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Cog, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Analizamos tu situación actual, identificamos oportunidades y definimos objetivos claros.",
    icon: Search
  },
  {
    number: "2", 
    title: "Diseño",
    description: "Desarrollamos una estrategia personalizada y planificamos la solución óptima para tus necesidades.",
    icon: Lightbulb
  },
  {
    number: "3",
    title: "Implementación", 
    description: "Ejecutamos la solución con un enfoque ágil, permitiendo ajustes durante el proceso.",
    icon: Cog
  },
  {
    number: "4",
    title: "Optimización",
    description: "Monitorizamos resultados, refinamos la solución y garantizamos la transferencia de conocimiento.",
    icon: TrendingUp
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            NUESTRA METODOLOGÍA
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Proceso de Trabajo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguimos un enfoque estructurado pero flexible que garantiza resultados óptimos en cada proyecto.
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-accent transform -translate-y-1/2 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Step number circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {step.number}
                  </div>
                  
                  <Card className="pt-12 mt-8 hover:shadow-elegant transition-all duration-300 border-border">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary/80 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="hover:shadow-elegant transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}