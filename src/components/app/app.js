import React, {Component} from "react";
import './app.css'

import AppHead from '../app-head/app-head';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn react', important: false, key: 'qweqweq'},
        {label: 'That is so good', important: true, key: 'asdadas'},
        {label: 'I need a break...', important: false, key: 'zxcvzxc'},
      ]
    }
  }

  randomKey = () => {
    return Math.random().toString(36).substr(6)
  }

  deleteItem = (key) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.key === key)
      // const before = data.slice(0, index)
      // const after = data.slice(index + 1)
      const newArr = data.filter(elem => elem.key !== key)
      return {
        data : newArr
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      key: this.randomKey()
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]

      return {
        data: newArr
      }
    })
  }

  render() {
    return (
        <div className="app">
          <AppHead />
          <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
          </div>
          <PostList
              posts={this.state.data}
              onDelete={this.deleteItem}
          />
          <PostAddForm
              onAdd={this.addItem}
          />
        </div>
    )
  }
}

export default App
