import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Shield, 
  Code, 
  Database, 
  Network, 
  Lock, 
  Bug, 
  ArrowRight,
  Clock,
  Users
} from 'lucide-react'

const learningPaths = [
  {
    id: 1,
    title: 'Foundations: CS Meets Security',
    description: 'Start with core computer science concepts and see how they relate to cybersecurity fundamentals.',
    icon: Shield,
    level: 'Beginner',
    duration: '6 weeks',
    students: 1247,
    progress: 0,
    modules: [
      'Data Structures & Security Implications',
      'Algorithm Analysis for Cryptography',
      'Memory Management & Buffer Overflows',
      'Network Protocols & Attack Vectors'
    ],
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Secure Software Development',
    description: 'Learn to write secure code by understanding common vulnerabilities and defensive programming techniques.',
    icon: Code,
    level: 'Intermediate',
    duration: '8 weeks',
    students: 892,
    progress: 0,
    modules: [
      'Secure Coding Principles',
      'Input Validation & Sanitization',
      'Authentication & Authorization',
      'Code Review & Static Analysis'
    ],
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Systems Security & Architecture',
    description: 'Dive deep into operating systems, databases, and distributed systems security.',
    icon: Database,
    level: 'Advanced',
    duration: '10 weeks',
    students: 634,
    progress: 0,
    modules: [
      'OS Security Mechanisms',
      'Database Security & Injection Attacks',
      'Distributed Systems Security',
      'Container & Cloud Security'
    ],
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Network Security Engineering',
    description: 'Master network protocols, security architectures, and defensive strategies.',
    icon: Network,
    level: 'Intermediate',
    duration: '7 weeks',
    students: 756,
    progress: 0,
    modules: [
      'Network Protocol Security',
      'Firewall & IDS Design',
      'VPN & Encryption Protocols',
      'Network Forensics'
    ],
    color: 'bg-orange-500'
  },
  {
    id: 5,
    title: 'Cryptography & Applied Math',
    description: 'Understand the mathematical foundations of modern cryptography and implement secure protocols.',
    icon: Lock,
    level: 'Advanced',
    duration: '12 weeks',
    students: 423,
    progress: 0,
    modules: [
      'Mathematical Foundations',
      'Symmetric & Asymmetric Cryptography',
      'Digital Signatures & PKI',
      'Cryptographic Protocol Design'
    ],
    color: 'bg-red-500'
  },
  {
    id: 6,
    title: 'Vulnerability Research & Analysis',
    description: 'Learn to find, analyze, and responsibly disclose security vulnerabilities.',
    icon: Bug,
    level: 'Expert',
    duration: '14 weeks',
    students: 289,
    progress: 0,
    modules: [
      'Reverse Engineering Fundamentals',
      'Binary Analysis & Exploitation',
      'Fuzzing & Automated Testing',
      'Responsible Disclosure'
    ],
    color: 'bg-pink-500'
  }
]

export function LearningPaths() {
  return (
    <section id="paths" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured curricula that bridge computer science theory with practical cybersecurity skills. 
            Each path builds upon core CS concepts to develop deep security expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {learningPaths.map((path) => {
            const IconComponent = path.icon
            return (
              <Card key={path.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${path.color}/10`}>
                        <IconComponent className={`h-6 w-6 ${path.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          {path.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {path.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-3">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{path.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Modules:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {path.modules.slice(0, 3).map((module, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {module}
                        </div>
                      ))}
                      {path.modules.length > 3 && (
                        <div className="text-sm text-muted-foreground">
                          +{path.modules.length - 3} more modules
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {path.progress > 0 ? 'Continue Learning' : 'Start Path'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}