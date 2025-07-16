import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Calendar,
  ThumbsUp,
  Reply,
  Pin,
  Award,
  Clock,
  Eye,
  MessageCircle
} from 'lucide-react'

const forumStats = {
  totalMembers: 12847,
  activeToday: 1247,
  totalPosts: 45632,
  totalTopics: 8934
}

const featuredDiscussions = [
  {
    id: 1,
    title: 'Best practices for secure code review in enterprise environments',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      rank: 'Security Expert',
      points: 2847
    },
    category: 'Secure Development',
    replies: 23,
    views: 1247,
    lastActivity: '2 hours ago',
    isPinned: true,
    tags: ['Code Review', 'Enterprise', 'Best Practices']
  },
  {
    id: 2,
    title: 'Understanding memory corruption vulnerabilities in modern C++',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      rank: 'Memory Security Specialist',
      points: 3156
    },
    category: 'Memory Security',
    replies: 45,
    views: 2834,
    lastActivity: '4 hours ago',
    isPinned: false,
    tags: ['C++', 'Memory Corruption', 'Vulnerabilities']
  },
  {
    id: 3,
    title: 'Cryptographic protocol analysis: Common pitfalls and how to avoid them',
    author: {
      name: 'Dr. Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      rank: 'Cryptography Professor',
      points: 4523
    },
    category: 'Cryptography',
    replies: 67,
    views: 3921,
    lastActivity: '6 hours ago',
    isPinned: true,
    tags: ['Cryptography', 'Protocol Analysis', 'Security Research']
  }
]

const recentPosts = [
  {
    id: 1,
    title: 'Help with buffer overflow exploitation lab',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      rank: 'Student'
    },
    category: 'Help & Support',
    replies: 8,
    lastActivity: '15 minutes ago',
    excerpt: 'I\'m stuck on the buffer overflow lab. The exploit seems correct but I\'m not getting shell access...'
  },
  {
    id: 2,
    title: 'New research paper on side-channel attacks',
    author: {
      name: 'Dr. Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face',
      rank: 'Researcher'
    },
    category: 'Research & Papers',
    replies: 12,
    lastActivity: '1 hour ago',
    excerpt: 'Sharing an interesting paper on timing attacks against modern cryptographic implementations...'
  },
  {
    id: 3,
    title: 'Career advice: Transitioning from CS to cybersecurity',
    author: {
      name: 'Marcus Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      rank: 'Industry Professional'
    },
    category: 'Career & Jobs',
    replies: 34,
    lastActivity: '3 hours ago',
    excerpt: 'Looking for advice on making the transition from software development to cybersecurity...'
  }
]

const topContributors = [
  {
    name: 'Dr. Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    rank: 'Security Expert',
    points: 2847,
    posts: 156,
    helpfulAnswers: 89
  },
  {
    name: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    rank: 'Memory Security Specialist',
    points: 3156,
    posts: 203,
    helpfulAnswers: 124
  },
  {
    name: 'Dr. Emily Watson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    rank: 'Cryptography Professor',
    points: 4523,
    posts: 298,
    helpfulAnswers: 187
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Weekly Security Challenge',
    description: 'Solve this week\'s cryptography puzzle',
    date: 'Tomorrow, 2:00 PM',
    participants: 234,
    type: 'Challenge'
  },
  {
    id: 2,
    title: 'Live Q&A: Web Application Security',
    description: 'Ask experts about OWASP Top 10 and modern web threats',
    date: 'Friday, 6:00 PM',
    participants: 156,
    type: 'Live Session'
  },
  {
    id: 3,
    title: 'Study Group: Network Protocol Analysis',
    description: 'Collaborative learning session on Wireshark and packet analysis',
    date: 'Saturday, 10:00 AM',
    participants: 89,
    type: 'Study Group'
  }
]

const categories = [
  { name: 'General Discussion', posts: 1247, color: 'bg-blue-500' },
  { name: 'Help & Support', posts: 2156, color: 'bg-green-500' },
  { name: 'Secure Development', posts: 892, color: 'bg-purple-500' },
  { name: 'Research & Papers', posts: 634, color: 'bg-orange-500' },
  { name: 'Career & Jobs', posts: 756, color: 'bg-pink-500' },
  { name: 'Tools & Resources', posts: 423, color: 'bg-indigo-500' }
]

export function Community() {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow learners, security professionals, and researchers. 
            Share knowledge, get help, and stay updated with the latest in cybersecurity.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{forumStats.totalMembers.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{forumStats.activeToday.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Active Today</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageSquare className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{forumStats.totalPosts.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{forumStats.totalTopics.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Topics</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured Discussions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pin className="h-5 w-5 text-accent" />
                    <span>Featured Discussions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {featuredDiscussions.map((discussion) => (
                      <div key={discussion.id} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={discussion.author.avatar} />
                            <AvatarFallback>{discussion.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              {discussion.isPinned && (
                                <Pin className="h-4 w-4 text-accent" />
                              )}
                              <h3 className="font-medium text-primary hover:text-accent cursor-pointer transition-colors">
                                {discussion.title}
                              </h3>
                            </div>
                            
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {discussion.category}
                              </Badge>
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>by <span className="font-medium">{discussion.author.name}</span></span>
                              <div className="flex items-center space-x-1">
                                <Reply className="h-4 w-4" />
                                <span>{discussion.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{discussion.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{discussion.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    <span>Recent Posts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-primary hover:text-accent cursor-pointer transition-colors mb-1">
                              {post.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>by <span className="font-medium">{post.author.name}</span></span>
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                              <span>{post.replies} replies</span>
                              <span>{post.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline">View All Posts</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <div className="flex-1">
                          <h4 className="font-medium">{category.name}</h4>
                          <p className="text-sm text-muted-foreground">{category.posts} posts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>Top Contributors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={contributor.name} className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                          {index + 1}
                        </div>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={contributor.avatar} />
                          <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{contributor.name}</h4>
                          <p className="text-xs text-muted-foreground">{contributor.points} points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>Upcoming Events</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-accent font-medium">{event.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.participants} joining
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Events
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start New Discussion
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Find Study Partners
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Join Study Group
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}