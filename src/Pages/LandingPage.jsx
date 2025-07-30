import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const concepts = [
    {
      icon: "📚",
      title: "useState Hook",
      description: "Manage component state with React's fundamental hook",
      link: "/useState"
    },
    {
      icon: "⚡",
      title: "useEffect Hook", 
      description: "Handle side effects and lifecycle events",
      link: "/useEffect"
    },
    {
      icon: "🧩",
      title: "Props & Components",
      description: "Master component composition techniques",
      link: "/props"
    },
    {
      icon: "🔗",
      title: "Context API",
      description: "Share state without prop drilling",
      link: "/context"
    },
    {
      icon: "🎨",
      title: "Custom Hooks",
      description: "Create reusable logic patterns",
      link: "/customhooks"
    },
    {
      icon: "📊",
      title: "Performance",
      description: "Optimize React applications",
      link: "/performance"
    },
    {
      icon: "🛣️",
      title: "Routing",
      description: "Implement client-side routing",
      link: "/routing"
    },
    {
      icon: "⚙️",
      title: "State Management",
      description: "Advanced state patterns",
      link: "/statemanagement"
    },
    {
      icon: "🧪",
      title: "Testing",
      description: "Write component tests",
      link: "/testing"
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50 w-full'>
      {/* Hero Section */}
      <div className='flex flex-col justify-center items-center py-16 px-6'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight'>
            Master React
            <span className='block font-normal text-blue-600'>with Interactive Examples</span>
          </h1>
          <p className='text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto font-light'>
            A clean, visual guide to React hooks, components, and modern patterns
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <Link to="/dashboard" className='px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all duration-200 hover:shadow-lg'>
              Start Learning
            </Link>
            <button className='px-6 py-2.5 border border-gray-300 text-gray-600 text-sm font-medium rounded-full hover:bg-white hover:shadow-sm transition-all duration-200'>
              View on GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Concepts Grid */}
      <div className='py-12 px-6'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-xl md:text-2xl font-light text-center mb-10 text-gray-800'>
            Essential Concepts
          </h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {concepts.map((concept, index) => (
              <div 
                key={index} 
                className='group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-pointer'
              >
                <div className='text-2xl mb-3 group-hover:scale-110 transition-transform duration-200'>{concept.icon}</div>
                <h3 className='text-lg font-medium mb-2 text-gray-900 group-hover:text-blue-600 transition-colors'>{concept.title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed mb-3'>{concept.description}</p>
                <div className='text-blue-500 text-xs font-medium group-hover:text-blue-600 transition-colors'>
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-12 px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='p-4'>
              <div className='text-2xl mb-3'>💻</div>
              <h3 className='text-base font-medium mb-2 text-gray-900'>Interactive</h3>
              <p className='text-gray-500 text-sm'>Live code examples with instant feedback</p>
            </div>
            <div className='p-4'>
              <div className='text-2xl mb-3'>⭐</div>
              <h3 className='text-base font-medium mb-2 text-gray-900'>Best Practices</h3>
              <p className='text-gray-500 text-sm'>Industry standards and conventions</p>
            </div>
            <div className='p-4'>
              <div className='text-2xl mb-3'>🌍</div>
              <h3 className='text-base font-medium mb-2 text-gray-900'>Real-world</h3>
              <p className='text-gray-500 text-sm'>Apply to actual project scenarios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section
      <div className='py-12 px-6 bg-white'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-xl md:text-2xl font-light mb-3 text-gray-900'>Join the Community</h2>
          <p className='text-gray-500 mb-6 text-sm max-w-lg mx-auto'>
            Connect with developers and share knowledge
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <button className='px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-all duration-200 flex items-center gap-2'>
              💬 Discord
            </button>
            <button className='px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all duration-200 flex items-center gap-2'>
              🐦 Twitter
            </button>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-6 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <p className='text-gray-400 text-xs'>Created by Rachit Dhaka • React Learning Guide</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage