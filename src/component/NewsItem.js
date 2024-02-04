import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
  let {title, description, imageUrl, newsUrl,author, date,source} = this.props;
    return (
      <div className="my-3">
      <div className="card">
        <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x4p6NLbNFxUg8bfrKeWL9yMoJQRHaeT79w&usqp=CAU":imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span class="badge text-bg-success">{source}</span></h5>
    <p className="card-text">{description} </p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className=" btn btn-sm btn btn-dark">Read More</a>
    </div>
  </div>
     </div>
    )
  }
}

export default NewsItem
