# Tamil Calendar Widget Demo App

A simple React application demonstrating the usage of [`@kanaksan/tamil-calendar-widget`](https://www.npmjs.com/package/@kanaksan/tamil-calendar-widget) npm package. This app displays Tamil daily calendar sheets (Panchangam) with auspicious timings, festivals, and traditional Tamil calendar information.

## 🎯 Purpose

This demo app showcases how to:
- Integrate the Tamil Calendar Widget into React applications
- Display Tamil daily calendar sheets for any selected date
- Connect with backend APIs that serve Tamil calendar images
- Handle date selection and widget interactions

## ✨ Features

- **Interactive Date Selection**: Choose any date using the date picker
- **Tamil Calendar Display**: Shows traditional Tamil Panchangam with daily information
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Smooth loading indicators while fetching calendar data

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Backend API serving Tamil calendar images (optional for testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tamil-calendar-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
tamil-calendar-app/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Configuration

### Backend API Setup

The widget expects a backend API that serves Tamil calendar images. Update the `apiUrl` in `App.jsx`:

```javascript
// For local development
<TamilCalendarWidget 
  apiUrl="http://localhost:8082/api/calendar/daily-sheet"
  date={date}
  width={400}
/>

// For production
<TamilCalendarWidget 
  apiUrl="https://your-api-domain.com/api/calendar/daily-sheet"
  date={date}
  width={400}
/>
```

### Proxy Configuration

For local development with CORS, the Vite proxy is configured in `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8082',
      changeOrigin: true,
      secure: false
    }
  }
}
```

## 📦 Widget Usage

Basic usage of the Tamil Calendar Widget:

```javascript
import React, { useState } from 'react'
import { TamilCalendarWidget } from '@kanaksan/tamil-calendar-widget'

function MyApp() {
  const [date, setDate] = useState('2025-07-13')

  return (
    <TamilCalendarWidget 
      apiUrl="/api/calendar/daily-sheet"
      date={date}
      width={400}
      onLoad={() => console.log('Calendar loaded')}
      onError={(error) => console.error('Error:', error)}
    />
  )
}
```

### Widget Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | string | **required** | Backend API URL for calendar images |
| `date` | string | **required** | Date in YYYY-MM-DD format |
| `width` | number | `400` | Widget width in pixels |
| `height` | number | `auto` | Widget height in pixels |
| `onLoad` | function | - | Callback when calendar loads successfully |
| `onError` | function | - | Callback when calendar fails to load |
| `showLoader` | boolean | `true` | Show loading indicator |
| `className` | string | - | Additional CSS class name |
| `style` | object | - | Inline styles for container |

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean node_modules and cache |

## 🔗 API Requirements

The backend API should:

1. **Accept date parameter**: `GET /api/calendar/daily-sheet/{date}`
2. **Return image data**: JPEG/PNG format
3. **Include CORS headers**: For browser compatibility
4. **Handle errors gracefully**: Return appropriate HTTP status codes

Example API response headers:
```
Content-Type: image/jpeg
Content-Length: 117447
Cache-Control: public, max-age=86400
Access-Control-Allow-Origin: *
```

## 🌟 Tamil Calendar Information

The widget displays traditional Tamil calendar information including:
- **Panchangam**: Daily astrological calendar
- **Tithi**: Lunar day
- **Nakshatra**: Star constellation
- **Yoga**: Auspicious combinations
- **Karana**: Half lunar day
- **Subha Muhurtham**: Auspicious timings
- **Rahukalam**: Inauspicious time periods
- **Festival Days**: Hindu festivals and events
- **Auspicious Days**: Pradosham, Ekadasi, Amavasai, etc.

## 🤝 Related Packages

- **[@kanaksan/tamil-calendar-widget](https://www.npmjs.com/package/@kanaksan/tamil-calendar-widget)**: The main widget package
- **[Tamil Calendar Widget Documentation](https://github.com/kanaksan/tamil-calendar-widget)**: Detailed widget documentation

## 🐛 Troubleshooting

### Common Issues

1. **Widget not displaying**: Check API URL and CORS configuration
2. **Blank page**: Verify React version compatibility (18.x recommended)
3. **Network errors**: Ensure backend API is running and accessible
4. **Date format errors**: Use YYYY-MM-DD format for dates

### Debug Steps

1. Check browser console for errors
2. Verify API response in Network tab
3. Ensure widget callbacks are triggered
4. Test with direct image URL

## 📄 License

MIT License - feel free to use this demo app as a starting point for your own Tamil calendar applications.

## 🙏 Acknowledgments

- Tamil calendar data and formatting
- Traditional Panchangam calculations
- Tamil cultural calendar systems

---

**Note**: This is a demo application. For production use, ensure proper error handling, security measures, and performance optimizations.