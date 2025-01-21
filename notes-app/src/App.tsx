import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename="/DS6301-Unit3">
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <Link to="/" className="text-lg font-semibold">Notes App</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to Notes App</h1>
            <p className="mb-4">This is a simple notes application.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Count is {count}
              </button>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
