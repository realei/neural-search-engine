// mostly took this from the React docs
import { IsoTwoTone } from '@material-ui/icons';
import { Component } from 'react';
import  { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // I log this to Sentry, Azure Monitor, New Relic, TrackJS
    console.error("ErrorBoundary caught an error", error, info)
  }

  // his gets called anytime that the component updates itself
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.seteState({ redirect: true}), 5000)
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to="/" /> 
    } else if (this.state.hasError) {
      return (
        <h1>
          This listing has an error. <Link to="/">Click here</Link> to bo back to the home page or wait for five seconds.
        </h1>
      )
    }
    return this.props.children;
    // There is key and another one of  these reserved props name is children
    // And  the reason for that is if I can do something like this ErrorBoundary.
  }
}

export default ErrorBoundary;

// So this, what ever I  passinside  of ErrorBoundary, this is children
// So what I am sayhing  here  is if I have  some sort of error, 
// do something  about IsoTwoTone, like render the  stuff with <Link></Link>

// If I dont have an error, just render whatever in the middle of below`<h1>Hi There</h1>.
// So basically, be invisible  if  I dont't have  an error, only show up when  I have an error.
{/* <ErrorBoundary>
  <h1>Hi There</h1>
</ErrorBoundary> */}