import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RejimlarProvider } from "./context/Rejimlar";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n";

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
      return <h1>Nimadir xato bo‘ldi...</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RejimlarProvider>
        <App />
      </RejimlarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
