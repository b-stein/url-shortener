import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map((url, i) => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <p>SHORTENED: <a href={url.short_url} target="blank">{url.short_url}</a></p>
        <p>ORIGINAL: {url.long_url}</p>
				<button type='button' onClick={() => props.deleteUrl(url.id)}>Delete</button>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
