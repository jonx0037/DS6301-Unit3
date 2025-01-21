import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { PositionComparison } from './components/PositionComparison'
import { PlayerDevelopment } from './components/PlayerDevelopment'
import { RCodeAnalysis } from './components/RCodeAnalysis'
import { HypothesisTest } from './components/HypothesisTest'
import { About } from './components/About'

function App() {
  const [activeTab, setActiveTab] = useState('position')

  const navItems = [
    { id: 'position', path: '/', label: 'Position Analysis', Component: PositionComparison },
    { id: 'hypothesis', path: '/hypothesis', label: 'Hypothesis Test', Component: HypothesisTest },
    { id: 'development', path: '/development', label: 'Development Analysis', Component: PlayerDevelopment },
    { id: 'code', path: '/code', label: 'R Code Analysis', Component: RCodeAnalysis },
    { id: 'about', path: '/about', label: 'About', Component: About }
  ];

  return (
    <Router basename="/DS6306-Unit3">
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <span className="text-xl font-bold text-blue-600">FIFA Player Analysis</span>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map(({ id, path, label }) => (
                    <Link 
                      key={id}
                      to={path} 
                      className={`py-4 px-3 ${
                        activeTab === id 
                          ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' 
                          : 'text-gray-500 hover:text-blue-600'
                      }`}
                      onClick={() => setActiveTab(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Routes>
              {navItems.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </main>

        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                FIFA Player Analysis - Unit 3 Project
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/jonx0037" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:jonathanr@smu.edu"
                  className="text-gray-500 hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
