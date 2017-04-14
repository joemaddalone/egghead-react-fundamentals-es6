import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pages: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'Contact' }
      ],
      index: 0
    }
  }
  changePage(index){
    this.setState({index})
  }
  render(){
    let title = this.state.pages[this.state.index].title;
    return (
      <div className="container">
        <Nav
          click={this.changePage.bind(this)}
          items={this.state.pages}
          active={this.state.index} />
        <Header title={title} />
        <Content title={title} />
      </div>
    );
  }
}

const Header = (props) =>  {
  return (
    <header render="not rendered" data-render="rendered">
      The {props.title.toUpperCase()} Page
    </header>
  );
}

const Nav = (props) => {
  let items = props.items.map((item, i) => {
    return <NavItem key={i} {...props} index={i} />
  })
  return <ul>{items}</ul>
}

const NavItem = (props) => {
  return (
      <li className={props.active === props.index && 'active'}>
        <a
          onClick={props.click.bind(null, props.index)}
          href="#">
          {props.items[props.index].title}
        </a>
      </li>
  )
}

const Content = (props) => <h1>{props.title}</h1>

export default App


// tests go here.
