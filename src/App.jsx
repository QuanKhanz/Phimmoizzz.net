import './App.css'
import AuthButtons from './components/AuthButtons'
import Nav from './components/Navigation'
import Header from './components/Header'
import Trending from './components/Trending'


function App() {
  return (
    <div className='grid md:grid-cols-5'>
      <Nav />
      <main className='md:col-span-4 bg-cyan-50 px-12 py-6'>
        <AuthButtons/>
        <Header/>
        <Trending/>
      </main>
    </div>
  )
}

export default App
