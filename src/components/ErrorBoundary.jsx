import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можете додати код для логування помилки
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Щось пішло не так. Будь ласка, спробуйте оновити сторінку.</h1>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
