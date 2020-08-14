import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';


// properties and behavior of components: Theory
// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 18
//     }
//     // this.nextYear = this.nextYear.bind(this)
//   }
//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
//   render() {
//     const {name, surname, link} = this.props
//     const {years} = this.state
//
//     return (
//       <>
//         <button onClick={this.nextYear}>years++</button>
//         <h1>My name is {name}, surname - {surname}, years - {years}</h1>
//         <a href={link}>My Profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//       <>
//         <WhoAmI name="John" surname="Smith" link="#"/>
//         <WhoAmI name="das" surname="das" link="#"/>
//         <WhoAmI name="eqw" surname="eqw" link="#"/>
//       </>
//   )
// }

ReactDOM.render(
    <App />,
    // <All/>,
  document.getElementById('root')
);
