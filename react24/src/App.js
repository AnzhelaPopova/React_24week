import React from 'react' 
import './App.css'; 
import Rate from './components/Rate'; 
import './components/Rate.css'; 
 
const rates = [ 
  { 
    "key": "1", 
    "color": "blue", 
    "name": "Безлимитный 300", 
    "price": "300", 
    "speed": "до 10 Мбит/сек", 
  }, 
  { 
    "key": "2", 
    "color": "green", 
    "name": "Безлимитный 450",  
    "price": "450", 
    "speed": "до 50 Мбит/сек", 
  }, 
  { 
    "key": "3", 
    "color": "red", 
    "name": "Безлимитный 550", 
    "price": "550", 
    "speed": "до 100 Мбит/сек", 
  }, 
  { 
    "key": "4", 
    "color": "black", 
    "name": "Безлимитный 1000", 
    "price": "1000", 
    "speed": "до 200 Мбит/сек", 
  }, 
   
]; 
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRate: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(key) {
    this.setState({ selectedRate: key });
  }
  
  render () { 
    return ( 
      <div className="App"> 
        { 
          rates.map ((rate) => 
            <Rate  
              key={rate.key}
              name={rate.name}  
              price={rate.price}  
              speed={rate.speed}  
              color={rate.color}
              selected={rate.key === this.state.selectedRate}
              onClick={() => this.handleClick(rate.key)}
            />
          ) 
        } 
      </div> 
    ); 
  } 
} 

export default App;