import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { PositionComparison } from './components/PositionComparison'
import { PlayerDevelopment } from './components/PlayerDevelopment'

const UnitTakeaways = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Unit Takeaways</h2>
    
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Key Concepts Learned</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Data Transformation & dplyr</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Essential dplyr verbs</li>
            <li>Data manipulation techniques</li>
            <li>Workflow optimization</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Factor Variables</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Creation and manipulation</li>
            <li>Level ordering</li>
            <li>Categorical data handling</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Data Quality & Cleaning</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>NA handling strategies</li>
          <li>Outlier investigation methods</li>
          <li>Data transformation techniques</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Visualization Best Practices</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Plot type selection criteria</li>
          <li>Visual analysis techniques</li>
          <li>Effective data presentation</li>
        </ul>
      </div>
    </section>
  </div>
)

function App() {
  const [activeTab, setActiveTab] = useState('position')

  return (
    <Router basename="/DS6306-Unit3">
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <span className="text-xl font-bold text-blue-600">FIFA Player Analysis</span>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link 
                    to="/" 
                    className={`py-4 px-3 ${activeTab === 'position' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('position')}
                  >
                    Position Analysis
                  </Link>
                  <Link 
                    to="/development" 
                    className={`py-4 px-3 ${activeTab === 'development' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('development')}
                  >
                    Development Analysis
                  </Link>
                  <Link 
                    to="/takeaways" 
                    className={`py-4 px-3 ${activeTab === 'takeaways' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'}`}
                    onClick={() => setActiveTab('takeaways')}
                  >
                    Unit Takeaways
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Routes>
              <Route path="/" element={<PositionComparison />} />
              <Route path="/development" element={<PlayerDevelopment />} />
              <Route path="/takeaways" element={<UnitTakeaways />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <p className="text-center text-gray-600">
              FIFA Player Analysis - Unit 3 Project
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
