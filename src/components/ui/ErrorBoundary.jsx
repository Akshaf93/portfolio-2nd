import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Model Crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 text-red-600 p-4 text-center border border-red-200 rounded-lg">
          <div className="font-bold mb-2">Model Load Failed</div>
          <div className="font-mono text-xs text-red-400 mb-4">
             {this.state.error?.message || "File not found or corrupt"}
          </div>
          <div className="text-xs text-gray-500 border border-gray-300 px-3 py-1 rounded bg-white">
             Check public/models/rover.glb
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;