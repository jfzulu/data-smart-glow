import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$500",
    period: "/proyecto",
    description: "Soluciones iniciales para pequeñas empresas que buscan comenzar a aprovechar sus datos.",
    features: [
      "Automatización de informes básicos",
      "Dashboard de visualización simple", 
      "Limpieza y estructuración de datos",
      "1 fuente de datos",
      "Soporte por email"
    ],
    popular: false
  },
  {
    name: "Estándar",
    price: "$1,500",
    period: "/proyecto", 
    description: "La opción más popular para empresas en crecimiento con necesidades más complejas.",
    features: [
      "Automatización de procesos complejos",
      "Dashboards interactivos personalizados",
      "Análisis predictivo básico",
      "Hasta 3 fuentes de datos",
      "Soporte prioritario"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$5,000+",
    period: "/proyecto",
    description: "Para empresas que requieren soluciones avanzadas y personalizadas a medida.",
    features: [
      "Automatización de procesos complejos",
      "Plataforma completa de visualización",
      "Análisis predictivo avanzado con IA",
      "Integración con múltiples fuentes",
      "Soporte dedicado 24/7"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            PLANES ADAPTADOS A TUS NECESIDADES
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestros Precios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos diferentes niveles de servicio para adaptarnos a las necesidades y presupuestos específicos de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-primary-glow/5 scale-105' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-glow text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105' 
                      : 'hover:bg-primary/90'
                  }`}
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}