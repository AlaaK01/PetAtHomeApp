import React, {useState} from 'react'
import Aside from './Aside';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import NavBarCats from '../ui-components/NavBarCats';

const Home = () => {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(1);
   
    const contents =[
      {
        id: 1,
        title: "Pet World",
        indicator: './',
        image:"https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 2,
        title: "Cats",
        indicator: './cats',
        image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"

    },
    {
        id: 3,
        title: "Dogs",
        indicator: './dogs',
        image: "https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80",
    },
    {
        id: 4,
        title: "Birds",
        indicator: './birds',
        image: "https://images.unsplash.com/photo-1583667133593-7639f2f03bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 5,
        title: "Other Pets",
        indicator: './otherpets',
        image: "https://images.unsplash.com/photo-1658938821244-b2f28b7756eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
    },
    {
        id: 6,
        title: "Our Friends",
        indicator: './owners',
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    }
    ];

    const handleGoLeft = () => {
       if(contents.length <= 2) return;
        setIndex1(index1 -1);
        setIndex2(index2 -1);
        if(index1 === 0) setIndex1(contents.length -1);
        if(index2 === 0) setIndex2(contents.length -1);
        
        
      };

      const handleGoRight = () => {
        if(contents.length <= 2) return;
        setIndex1(index1 +1);
        setIndex2(index2 +1);
        if (index1 === contents.length -1) setIndex1(0);
        if (index2 === contents.length -1) setIndex2(0);
      };

      const content1 = contents.filter((content) => content.id -1 === index1);
      const content2 = contents.filter((content) => content.id -1 === index2);

  return (

    
    <div>
        <Aside />
        
        <div className='contents'>
          <h1>Descuver Pets Worlds</h1>
          <div className="box">
             <button onClick={handleGoLeft} className="go-left"></button>
            {contents.length ? (
              <div className="content">
                {content1.map((content) => (
                  <div className="content">
                    <NavLink className="nav-link" exact to={content.indicator}>
                      <img src={content.image} className="content-image" />
                    </NavLink>
                    
                    <h2>{content.title}</h2>
                    <p>{index1 + 1}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ marginTop: "2rem", color: "red" }}>
                Your List products is empty
              </p>
            )}
            {contents.length > 1 ? (
              <div className="content">
                {content2.map((content) => (
                  <div className="content">
                   
                   <NavLink className="nav-link" exact to={content.indicator}>
                      <img src={content.image} className="content-image" />
                    </NavLink>
                    <h2>{content.title}</h2>
                    <p>{index2 + 1}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ marginTop: "2rem", color: "red" }}>
                Your List products is empty
              </p>
            )}
       
             <button onClick={handleGoRight} className="go-right"></button>
          </div>
        </div>
    </div>
  )
}

export default Home
