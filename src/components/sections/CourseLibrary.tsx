import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Filter, 
  BookOpen, 
  Video, 
  FileText, 
  Code, 
  Clock,
  Users,
  Star,
  Play,
  Download
} from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Memory Safety in C/C++',
    description: 'Deep dive into memory management, buffer overflows, and defensive programming techniques.',
    instructor: 'Dr. Sarah Chen',
    duration: '4 hours',
    students: 1247,
    rating: 4.8,
    level: 'Intermediate',
    category: 'Memory Security',
    type: 'video',
    modules: 12,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    tags: ['C/C++', 'Buffer Overflow', 'Memory Management', 'Secure Coding']
  },
  {
    id: 2,
    title: 'Cryptographic Protocols Design',
    description: 'Learn to design and analyze secure cryptographic protocols from mathematical foundations.',
    instructor: 'Prof. Michael Rodriguez',
    duration: '6 hours',
    students: 892,
    rating: 4.9,
    level: 'Advanced',
    category: 'Cryptography',
    type: 'interactive',
    modules: 18,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    tags: ['Cryptography', 'Protocol Design', 'Mathematics', 'Security Analysis']
  },
  {
    id: 3,
    title: 'Web Application Security Fundamentals',
    description: 'Comprehensive guide to securing web applications against common vulnerabilities.',
    instructor: 'Alex Thompson',
    duration: '5 hours',
    students: 2156,
    rating: 4.7,
    level: 'Beginner',
    category: 'Web Security',
    type: 'video',
    modules: 15,
    thumbnail: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=225&fit=crop',
    tags: ['Web Security', 'OWASP', 'SQL Injection', 'XSS', 'CSRF']
  },
  {
    id: 4,
    title: 'Network Protocol Analysis',
    description: 'Master network security through protocol analysis and traffic inspection techniques.',
    instructor: 'Dr. Emily Watson',
    duration: '7 hours',
    students: 634,
    rating: 4.6,
    level: 'Advanced',
    category: 'Network Security',
    type: 'hands-on',
    modules: 20,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    tags: ['Network Security', 'Wireshark', 'Protocol Analysis', 'Traffic Inspection']
  },
  {
    id: 5,
    title: 'Reverse Engineering Basics',
    description: 'Introduction to reverse engineering techniques for security analysis and vulnerability research.',
    instructor: 'Marcus Kim',
    duration: '8 hours',
    students: 423,
    rating: 4.5,
    level: 'Expert',
    category: 'Reverse Engineering',
    type: 'hands-on',
    modules: 22,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    tags: ['Reverse Engineering', 'Assembly', 'Debugging', 'Binary Analysis']
  },
  {
    id: 6,
    title: 'Secure Software Architecture',
    description: 'Design principles and patterns for building secure, scalable software systems.',
    instructor: 'Dr. Lisa Park',
    duration: '6 hours',
    students: 756,
    rating: 4.8,
    level: 'Intermediate',
    category: 'Secure Development',
    type: 'interactive',
    modules: 16,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
    tags: ['Software Architecture', 'Design Patterns', 'Security by Design', 'Threat Modeling']
  }
]

const categories = [
  'All',
  'Memory Security',
  'Web Security', 
  'Network Security',
  'Cryptography',
  'Reverse Engineering',
  'Secure Development'
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert']
const types = ['All', 'Video', 'Interactive', 'Hands-on']

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video': return Video
    case 'interactive': return Code
    case 'hands-on': return BookOpen
    default: return FileText
  }
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner': return 'bg-green-500/10 text-green-700 border-green-500/20'
    case 'Intermediate': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
    case 'Advanced': return 'bg-orange-500/10 text-orange-700 border-orange-500/20'
    case 'Expert': return 'bg-red-500/10 text-red-700 border-red-500/20'
    default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20'
  }
}

export function CourseLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    const matchesType = selectedType === 'All' || course.type === selectedType.toLowerCase()

    return matchesSearch && matchesCategory && matchesLevel && matchesType
  })

  return (
    <section id="library" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Course Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of courses covering every aspect of cybersecurity and computer science. 
            Learn from industry experts and academic leaders.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Tabs */}
            <Tabs defaultValue="category" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="category">Category</TabsTrigger>
                <TabsTrigger value="level">Level</TabsTrigger>
                <TabsTrigger value="type">Type</TabsTrigger>
              </TabsList>
              
              <TabsContent value="category" className="mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="level" className="mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="type" className="mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {types.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const TypeIcon = getTypeIcon(course.type)
              return (
                <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50 flex flex-col">
                  {/* Course Thumbnail */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className={`${getLevelColor(course.level)} backdrop-blur-sm`}
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-black/50 rounded-lg backdrop-blur-sm">
                        <TypeIcon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-accent/90 hover:bg-accent">
                        <Play className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                        {course.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col space-y-4">
                    {/* Instructor */}
                    <div className="text-sm">
                      <span className="text-muted-foreground">Instructor: </span>
                      <span className="font-medium">{course.instructor}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {course.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {course.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Modules Count */}
                    <div className="text-sm text-muted-foreground">
                      {course.modules} modules
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-auto">
                      <Button className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Play className="h-4 w-4 mr-2" />
                        Start Course
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredCourses.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Courses
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}