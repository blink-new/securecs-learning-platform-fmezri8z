import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Award,
  BookOpen,
  Code,
  Shield,
  Calendar
} from 'lucide-react'

const userStats = {
  totalPoints: 1250,
  rank: 'Security Apprentice',
  nextRank: 'Security Engineer',
  pointsToNextRank: 750,
  streakDays: 12,
  completedLabs: 8,
  totalLabs: 24,
  completedPaths: 1,
  totalPaths: 6,
  weeklyGoal: 5,
  weeklyProgress: 3
}

const recentAchievements = [
  {
    id: 1,
    title: 'Buffer Overflow Master',
    description: 'Successfully exploited 5 buffer overflow vulnerabilities',
    icon: Trophy,
    date: '2 days ago',
    points: 200,
    rarity: 'Rare'
  },
  {
    id: 2,
    title: 'SQL Injection Detective',
    description: 'Found and fixed 10 SQL injection vulnerabilities',
    icon: Shield,
    date: '1 week ago',
    points: 150,
    rarity: 'Common'
  },
  {
    id: 3,
    title: 'Crypto Analyst',
    description: 'Completed advanced cryptography challenges',
    icon: Code,
    date: '2 weeks ago',
    points: 300,
    rarity: 'Epic'
  }
]

const skillProgress = [
  { skill: 'Memory Security', progress: 85, level: 'Advanced' },
  { skill: 'Web Security', progress: 70, level: 'Intermediate' },
  { skill: 'Cryptography', progress: 45, level: 'Beginner' },
  { skill: 'Network Security', progress: 60, level: 'Intermediate' },
  { skill: 'Reverse Engineering', progress: 30, level: 'Beginner' },
  { skill: 'Secure Coding', progress: 75, level: 'Intermediate' }
]

const recentActivity = [
  {
    id: 1,
    type: 'lab_completed',
    title: 'Completed "Race Condition Exploitation"',
    points: 300,
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'achievement_unlocked',
    title: 'Unlocked "Buffer Overflow Master"',
    points: 200,
    time: '2 days ago'
  },
  {
    id: 3,
    type: 'path_started',
    title: 'Started "Network Security Engineering"',
    points: 0,
    time: '3 days ago'
  },
  {
    id: 4,
    type: 'lab_completed',
    title: 'Completed "SQL Injection Deep Dive"',
    points: 100,
    time: '1 week ago'
  }
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Common': return 'bg-gray-500/10 text-gray-700 border-gray-500/20'
    case 'Rare': return 'bg-blue-500/10 text-blue-700 border-blue-500/20'
    case 'Epic': return 'bg-purple-500/10 text-purple-700 border-purple-500/20'
    case 'Legendary': return 'bg-orange-500/10 text-orange-700 border-orange-500/20'
    default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20'
  }
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'lab_completed': return Code
    case 'achievement_unlocked': return Trophy
    case 'path_started': return BookOpen
    default: return Target
  }
}

export function ProgressDashboard() {
  const overallProgress = Math.round((userStats.completedLabs / userStats.totalLabs) * 100)
  const rankProgress = Math.round((userStats.totalPoints / (userStats.totalPoints + userStats.pointsToNextRank)) * 100)

  return (
    <section id="progress" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Learning Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your journey from CS fundamentals to cybersecurity expertise. 
            Monitor your skills, achievements, and progress across all learning paths.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent">{userStats.totalPoints}</div>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent">{userStats.streakDays}</div>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent">{userStats.completedLabs}</div>
                <p className="text-sm text-muted-foreground">Labs Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent">{userStats.completedPaths}</div>
                <p className="text-sm text-muted-foreground">Paths Completed</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Progress */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overall Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-accent" />
                    <span>Overall Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Learning Path Completion</span>
                      <span className="text-sm text-muted-foreground">{overallProgress}%</span>
                    </div>
                    <Progress value={overallProgress} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {userStats.completedLabs} of {userStats.totalLabs} labs completed
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Rank Progress</span>
                      <span className="text-sm text-muted-foreground">{rankProgress}%</span>
                    </div>
                    <Progress value={rankProgress} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {userStats.pointsToNextRank} points to {userStats.nextRank}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Weekly Goal</span>
                      <span className="text-sm text-muted-foreground">
                        {userStats.weeklyProgress}/{userStats.weeklyGoal} labs
                      </span>
                    </div>
                    <Progress value={(userStats.weeklyProgress / userStats.weeklyGoal) * 100} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Skill Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span>Skill Development</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillProgress.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.skill}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground text-right">
                          {skill.progress}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Rank */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>Current Rank</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">
                    {userStats.rank}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Next: {userStats.nextRank}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {userStats.pointsToNextRank} points needed
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <span>Recent Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAchievements.map((achievement) => {
                      const IconComponent = achievement.icon
                      return (
                        <div key={achievement.id} className="flex items-start space-x-3">
                          <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                            <IconComponent className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-sm font-medium truncate">
                                {achievement.title}
                              </h4>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getRarityColor(achievement.rarity)}`}
                              >
                                {achievement.rarity}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">
                              {achievement.description}
                            </p>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-muted-foreground">{achievement.date}</span>
                              <span className="text-accent font-medium">+{achievement.points} pts</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => {
                      const IconComponent = getActivityIcon(activity.type)
                      return (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="p-1.5 bg-muted rounded-lg flex-shrink-0">
                            <IconComponent className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{activity.title}</p>
                            <div className="flex justify-between items-center text-xs mt-1">
                              <span className="text-muted-foreground">{activity.time}</span>
                              {activity.points > 0 && (
                                <span className="text-accent font-medium">+{activity.points} pts</span>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}