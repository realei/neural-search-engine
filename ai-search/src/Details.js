import { NoteTwoTone } from '@material-ui/icons';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carosel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

class Details extends Component {
    constructor () {
      super();

      this.state = { loading: true, otherThing: "Hi There!" }
    }

    async componentDidMount () {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
      )

      const json = await res.json()

    //   this.setState({
    //     loading: false,
    //     name: json.pets[0].name
    //   })
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
    }
    
    render () {
      if (this.state.loading) {
        return <h2>Loading...</h2>
      }

      const { animal, breed, city, state, description, name, images } = this.state;
      return (
        <div className="details">
          <Carousel images={images}/>
          <div>
            <h1>{name}</h1>
            {/* the way of template string  */}
            <h2>{`${animal} - ${breed} -${city}, ${state}`}</h2>
            {/* The native JSX way */}
            <h2>{animal} - {breed} - {city}, {state}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>        
        </div>
      )
    }
}

const DetailsWithRouter = withRouter(Details);

// export default withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  )
}

// In theory, now if thre was something  wrong  with router, 
// we can acteually catch with func `export default function DetailsWithErrorBoundary()`
// But if there is something wrong  with  router you'r gonna  have bigger problems than just an error boundary.