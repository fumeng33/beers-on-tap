import {component} from "react";

export default class Beer extends Component {
  //props - what we receive 
  constructor(props) {
    super(props);

    //state - local storage
    this.state = { }; // has to be an object 
  }

  componentDidMount(){
    //call axios get to recieve beers array
    axios.get('https://api.punkapi.com/v2/beers')
    .then (response => response.date)
    then(data => this.setState({beers: data}));
  }


  //render - what get display 
  //JSX 
  //who translate JSX - babel to React elements
  render() {
  const{ beers } = this.state;
      return (
      <div> 
        {beers.map(beer =>{
          return (
            <ul>
             <li>{beer.name}</li>
             <li>{beer.description}</li>
             <li>IBU:{beer.ibu}</li>
            </ul>
          )
        })}
      </div>
    );
  )
}