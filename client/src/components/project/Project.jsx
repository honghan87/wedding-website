import React, {useState} from 'react';
import './project.scss';

function Project(props) {

    const [mouseIn, setMouseIn] = useState(false);

    return (
        <div className="project"
            onMouseEnter={()=>{setMouseIn(true)}}
            onMouseLeave={()=>{setMouseIn(false)}}>
            <img src="https://www.moments.my/data/uploads/srscover.jpg" alt="wedding"/>
            <div className={mouseIn ? "clientText active" : "clientText"}>
            </div>
            <div className={mouseIn ? "text active motion" : "text"}>
                {props.client}
            </div>
        </div>
  )
}

export default Project