import React from 'react'

const NewsItem=(props) =>{

    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/05/31/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1685498396418.jpeg"} className="card-img-top" alt=""/>
            <div className="card-body">
              <div style={{
                display:`flex`,
                justifyContent:`flex-end`,
                // position:`absolute`,
                right:`0`
              }}
              >
                <h5 className="card-title">{!title?"Daily News":title}<span className=" badge rounded-pill bg-danger" >{source}
                </span>
                </h5>
              </div>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }


export default NewsItem
