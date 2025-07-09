import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "75%",
    label: "Reducción de tiempo en procesos manuales"
  },
  {
    number: "98%",
    label: "Precisión en análisis predictivos"
  },
  {
    number: "40%",
    label: "Incremento en ROI por decisiones data-driven"
  },
  {
    number: "100+",
    label: "Proyectos exitosos completados"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestro Impacto en Números
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estos son los resultados que conseguimos para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}