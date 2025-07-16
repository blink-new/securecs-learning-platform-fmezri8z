import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { LearningPaths } from '@/components/sections/LearningPaths'
import { InteractiveLabs } from '@/components/sections/InteractiveLabs'
import { blink } from '@/blink/client'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      <main>
        <Hero />
        <LearningPaths />
        <InteractiveLabs />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Bridge CS & Security?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join thousands of students learning cybersecurity through deep computer science fundamentals. 
              Start your journey today.
            </p>
            {!user && (
              <button 
                onClick={() => blink.auth.login()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started Free
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App