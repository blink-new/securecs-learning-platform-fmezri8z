import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Terminal, 
  Shield, 
  Bug, 
  Lock, 
  Database, 
  Network,
  Play,
  Clock,
  Trophy
} from 'lucide-react'

const labs = [
  {
    id: 1,
    title: 'Buffer Overflow Exploitation',
    description: 'Learn how memory management vulnerabilities work by exploiting a simple C program.',
    icon: Terminal,
    difficulty: 'Intermediate',
    duration: '45 min',
    category: 'Memory Security',
    completed: false,
    points: 150,
    technologies: ['C', 'GDB', 'Assembly'],
    preview: 'Exploit a stack-based buffer overflow to gain control of program execution...'
  },
  {
    id: 2,
    title: 'SQL Injection Deep Dive',
    description: 'Understand database security by exploiting and then securing a vulnerable web application.',
    icon: Database,
    difficulty: 'Beginner',
    duration: '30 min',
    category: 'Web Security',
    completed: false,
    points: 100,
    technologies: ['SQL', 'PHP', 'MySQL'],
    preview: 'Discover how improper input validation leads to database compromise...'
  },
  {
    id: 3,
    title: 'Cryptographic Protocol Analysis',
    description: 'Analyze and break weak cryptographic implementations using mathematical principles.',
    icon: Lock,
    difficulty: 'Advanced',
    duration: '60 min',
    category: 'Cryptography',
    completed: false,
    points: 200,
    technologies: ['Python', 'OpenSSL', 'Mathematics'],
    preview: 'Break RSA encryption with small key sizes and poor random number generation...'
  },
  {
    id: 4,
    title: 'Network Protocol Fuzzing',
    description: 'Build a network fuzzer to discover vulnerabilities in custom protocols.',
    icon: Network,
    difficulty: 'Advanced',
    duration: '90 min',
    category: 'Network Security',
    completed: false,
    points: 250,
    technologies: ['Python', 'Scapy', 'Wireshark'],
    preview: 'Create automated tools to find bugs in network protocol implementations...'
  },
  {
    id: 5,
    title: 'Race Condition Exploitation',
    description: 'Exploit timing vulnerabilities in multi-threaded applications.',
    icon: Bug,
    difficulty: 'Expert',
    duration: '75 min',
    category: 'System Security',
    completed: false,
    points: 300,
    technologies: ['C++', 'Threading', 'Linux'],
    preview: 'Understand how concurrent programming bugs lead to security vulnerabilities...'
  },
  {
    id: 6,
    title: 'Secure Code Review',
    description: 'Learn to identify security vulnerabilities through systematic code analysis.',
    icon: Shield,
    difficulty: 'Intermediate',
    duration: '50 min',
    category: 'Secure Development',
    completed: false,
    points: 175,
    technologies: ['Java', 'Static Analysis', 'OWASP'],
    preview: 'Master the art of finding security bugs before they reach production...'
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-500/10 text-green-700 border-green-500/20'
    case 'Intermediate': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
    case 'Advanced': return 'bg-orange-500/10 text-orange-700 border-orange-500/20'
    case 'Expert': return 'bg-red-500/10 text-red-700 border-red-500/20'
    default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20'
  }
}

export function InteractiveLabs() {
  return (
    <section id="labs" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Interactive Security Labs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on coding environments where you'll exploit vulnerabilities, build security tools, 
            and learn defensive techniques through practical experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {labs.map((lab) => {
            const IconComponent = lab.icon
            return (
              <Card key={lab.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(lab.difficulty)}`}
                    >
                      {lab.difficulty}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">
                    {lab.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed">
                    {lab.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col space-y-4">
                  {/* Preview */}
                  <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground font-mono">
                    {lab.preview}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {lab.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{lab.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="h-4 w-4" />
                      <span>{lab.points} pts</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="text-sm">
                    <span className="text-muted-foreground">Category: </span>
                    <span className="font-medium text-accent">{lab.category}</span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full mt-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Play className="mr-2 h-4 w-4" />
                    {lab.completed ? 'Retry Lab' : 'Start Lab'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
            View All Labs
          </Button>
        </div>
      </div>
    </section>
  )
}