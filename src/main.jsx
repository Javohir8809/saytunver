import React from 'react'; // Add this import
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Nimadir xato bo'ldi...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
