import React, { useState, useEffect } from 'react'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Widget Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: '2px solid red', padding: '10px', backgroundColor: '#ffeeee' }}>
          <h3>Widget Error Caught!</h3>
          <p>Error: {this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  console.log('🔄 App component rendering')
  const [showWidget, setShowWidget] = useState(false)
  const [date, setDate] = useState('2025-07-13')

  useEffect(() => {
    console.log('App mounted')
    return () => console.log('App unmounting')
  }, [])

  const toggleWidget = () => {
    console.log('Toggle widget:', !showWidget)
    setShowWidget(!showWidget)
  }
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '32px' }}>Tamil Calendar - TEST</h1>
      
      <div style={{ backgroundColor: 'yellow', padding: '20px', margin: '20px 0' }}>
        <h2>Widget Test</h2>
        <button onClick={toggleWidget} style={{ padding: '10px', fontSize: '16px' }}>
          {showWidget ? 'Hide Widget' : 'Show Widget'}
        </button>
        
        {showWidget && (
          <ErrorBoundary>
            <div style={{ border: '5px solid red', padding: '20px', backgroundColor: 'white', marginTop: '10px' }}>
              <p>Widget should appear below:</p>
              <WidgetLoader date={date} />
              <p>Widget should appear above this text</p>
            </div>
          </ErrorBoundary>
        )}
      </div>

      <div style={{ backgroundColor: 'green', padding: '20px', margin: '20px 0' }}>
        <h2>Direct Image Test</h2>
        <img 
          src="http://localhost:8082/api/calendar/daily-sheet/2025-07-13"
          alt="Direct Tamil Calendar"
          width={400}
          onLoad={() => console.log('✅ Direct image loaded')}
          onError={(e) => console.log('❌ Direct image error:', e)}
        />
      </div>
    </div>
  )
}

function WidgetLoader({ date }) {
  const [TamilCalendarWidget, setTamilCalendarWidget] = useState(null)
  
  useEffect(() => {
    const loadWidget = async () => {
      try {
        console.log('Loading widget...')
        const module = await import('@kanaksan/tamil-calendar-widget')
        console.log('Widget module loaded:', module)
        setTamilCalendarWidget(() => module.TamilCalendarWidget)
      } catch (error) {
        console.error('Failed to load widget:', error)
      }
    }
    
    loadWidget()
  }, [])

  if (!TamilCalendarWidget) {
    return <p>Loading widget...</p>
  }

  return (
    <TamilCalendarWidget 
      apiUrl="http://localhost:8082/api/calendar/daily-sheet"
      date={date}
      width={400}
      onLoad={() => console.log('✅ Widget loaded successfully')}
      onError={(error) => console.error('❌ Widget error:', error.message)}
    />
  )
}

export default App