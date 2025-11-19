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
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-red-500 p-4 text-center border border-red-900 rounded bg-stripes-red">
          <div className="font-bold mb-2">SYSTEM ALERT: MODEL LOAD FAILED</div>
          <div className="font-mono text-xs text-slate-400 mb-4">
             {this.state.error?.message || "File not found or corrupt"}
          </div>
          <div className="text-xs text-[#00d8ff] border border-[#00d8ff] px-3 py-1 rounded cursor-help">
             Check public/models/rover.glb
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;