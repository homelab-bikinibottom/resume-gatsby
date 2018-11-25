import React, { Component } from 'react';

class ListItem extends Component {
  handleOnClick(e, keys) {
    e.preventDefault()
    this.props.handleSetFilters(keys)
  }

  render() {
    return (
      <div className="list-group">
        <div className="list-group-item list-group-item-action active">
          <h5 className="list-group-item-heading">{this.props.data.title}</h5>
          <p className="list-group-item-text">{this.props.data.description}</p>
        </div>
        {
          this.props.data.items.map(function(item, key) {
            return (
              <a href="#"
                key={key}
                className="list-group-item list-group-item-action"
                onClick={(event) => this.handleOnClick(event, item.keys)}>
                { item.names.join(", ") }
              </a>
            )
          }.bind(this))
        }
      </div>
    )
  }
}

export default ListItem