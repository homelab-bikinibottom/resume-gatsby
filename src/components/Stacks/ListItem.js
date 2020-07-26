import React from 'react';

export default function ListItem({ data, ...props }) {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-primary">
        <h5 className="mb-1">{data.title}</h5>
        <p className="mb-1">{data.description}</p>
      </div>
      {
        data.items.map((item, key) => (
          <div
            key={key}
            className={`list-group-item list-group-item-action ${props.filters === item.keys ? 'active' : ''}`}
            onClick={() => props.handleSetFilters(item.keys)}>
            <p className="mb-1">{item.stack}</p>
            <small>{ item.names.join(", ") }</small>
          </div>
        ))
      }
    </div>
  )
}
