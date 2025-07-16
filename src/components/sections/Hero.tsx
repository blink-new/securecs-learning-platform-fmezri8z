import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Shield, Code, Lock, Zap, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233B82F6" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Bridge CS & Cybersecurity</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Master Security Through
              <span className="text-accent block">Computer Science</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn cybersecurity by understanding the deep computer science concepts that make systems secure or vulnerable. Build real security skills through hands-on coding and practical exercises.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Explore Curriculum
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">CS Fundamentals</h3>
                <p className="text-muted-foreground">
                  Deep dive into algorithms, data structures, and system design that form the foundation of secure systems.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Lock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Security Engineering</h3>
                <p className="text-muted-foreground">
                  Apply CS concepts to real security challenges through cryptography, secure coding, and vulnerability analysis.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Hands-on Labs</h3>
                <p className="text-muted-foreground">
                  Practice with interactive coding environments, real security tools, and simulated attack scenarios.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}