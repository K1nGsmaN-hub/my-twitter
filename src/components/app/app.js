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
        {label: 'Going to learn react', important: false, like: false, key: 'qweqweq'},
        {label: 'That is so good', important: false, like: false, key: 'asdadas'},
        {label: 'I need a break...', important: false, like: false, key: 'zxcvzxc'},
      ],
      term: '',
      filter: 'all'
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

  onToggleImportant = (key) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.key === key)

      const newItem = {...data[index], important: !data[index].important}
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newData
      }
    })
  }

  onToggleLiked = (key) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.key === key)

      const newItem = {...data[index], like: !data[index].like}
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newData
      }
    })
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    } else {
      return items.filter(item => item.label.indexOf(term) > -1)
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state

    const liked = this.state.data.filter(elem => elem.like === true).length
    const elemsCount = this.state.data.length

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
        <div className="app">
          <AppHead liked={liked} elemsCount={elemsCount}/>
          <div className="search-panel d-flex">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <PostStatusFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}
            />
          </div>
          <PostList
              posts={visiblePosts}
              onDelete={this.deleteItem}
              onToggleImportant={this.onToggleImportant}
              onToggleLiked={this.onToggleLiked}
          />
          <PostAddForm
              onAdd={this.addItem}
          />
        </div>
    )
  }
}

export default App
