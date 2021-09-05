import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <div></div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
