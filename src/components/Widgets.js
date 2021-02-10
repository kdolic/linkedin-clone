import React from 'react'
import '../css/Widgets.css'
import InfoIcon from '@material-ui/icons/Info'


const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
          <div className="widgets_articleRight">
            <h4> {heading}</h4>
            <p> {subtitle}</p>
          </div>
        </div>
      );
      return (
        <div className="widgets">
          <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
          </div>
            {newsArticle('Sparking conversations for change', 'Top news • 10,126 readers')}
            {newsArticle('Another layer to the hidden economy', '6h ago • 11,510 readers')}
            {newsArticle('Who let the Dogecoin out?', '22h ago • 30,534 readers')}
            {newsArticle('Value of Reddit shoots up', '11h ago • 11,508 readers')}
            {newsArticle('Mega real estate project goes quiet', '1d ago • 67,336 readers')}
        </div>
    )
}

export default Widgets
