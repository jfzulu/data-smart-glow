import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    })
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-white/90 font-semibold text-sm tracking-wide uppercase">
            COMENCEMOS
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            ¿Listo para transformar tus datos en valor?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita y descubre cómo podemos ayudarte a optimizar tus procesos y mejorar tus decisiones de negocio.
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              Solicita tu consulta gratuita
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="¿Cómo podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}