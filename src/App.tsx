import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-4">Baxton Lodge</h1>
        <p className="text-xl text-gray-300 mb-8">Welcome to your luxury destination</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-700 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">🏨 Rooms</h2>
            <p>Experience luxury accommodations with premium amenities</p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">🍽️ Dining</h2>
            <p>Fine dining experiences crafted by our expert chefs</p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">✨ Amenities</h2>
            <p>World-class facilities for your comfort and relaxation</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
