import React, {Component} from 'react';
import './post-list-item.css'

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    }
  }

  addImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  addLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  render() {
    const {label, onDelete} = this.props
    const {important, like} = this.state

    let classNames = 'app-list-item d-flex justify-content-between'
    if (important) {
      classNames += ' important'
    }

    if (like) {
      classNames += ' like'
    }

    return (
        <div className={classNames}>
        <span className="app-list-item-label" onClick={this.addLike}>
          {label}
        </span>
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={this.addImportant} className="btn-star btn-sm">
              <i className="fa fa-star"></i>
            </button>
            <button className="btn-trash btn-sm" onClick={onDelete}>
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
    )
  }
}
export default PostListItem
