import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     icon: "",
 
 
     description: "",
  
    
     
    }
  };

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({icon: weather.icon.slice(0, -1)});
    this.setState({description: weather.description});
  }

  render() {
    const { icon } = this.state;
    const { description } = this.state;
    const { wind } = this.state;
    return (
      
      <div>
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
        </div>
        
          <div className="description">
          {description}
          </div>
      </div>

       
    );
  }
  
}
if (module.hot) {
	  module.hot.accept();
	  module.hot.dispose(function() {
		      clearInterval(timer);
		    });
}
ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);

