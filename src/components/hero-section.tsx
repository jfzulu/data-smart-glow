import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Database } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
            <Brain className="w-4 h-4 mr-2" />
            ANÁLISIS DE DATOS Y AUTOMATIZACIÓN
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Transformamos tus{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                datos
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              en decisiones{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                inteligentes
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Ofrecemos soluciones personalizadas de análisis de datos y automatización adaptadas a tu negocio, 
            ayudándote a optimizar procesos, reducir costos y mejorar la toma de decisiones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 hover:bg-primary/5 transition-all duration-300"
            >
              Hablemos
            </Button>
          </div>

          {/* Floating icons */}
          <div className="relative mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-center space-x-8 opacity-60">
              <div className="p-4 rounded-full bg-primary/10 animate-float">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '0.5s' }}>
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <div className="p-4 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '1s' }}>
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}