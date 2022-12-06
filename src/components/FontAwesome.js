import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faAppleAlt, faMicroscope, faHamburger, faHandRock, faThumbsUp, faThumbsDown,
  faRupeeSign, faRocket, faPlane
} from '@fortawesome/free-solid-svg-icons';

const FontAwesome = () => {

  const myStyle = {
    fontSize: "50px",
    marginTop: "10px",
    marginLeft: "30px"
  };

  return (
    <div>
      <strong className="heading"> Font Awesome </strong> <br />

      <FontAwesomeIcon style={myStyle} icon={faCoffee} />
      <FontAwesomeIcon style={myStyle} icon={faAppleAlt} />
      <FontAwesomeIcon style={myStyle} icon={faMicroscope} />
      <FontAwesomeIcon style={myStyle} icon={faHamburger} />
      <FontAwesomeIcon style={myStyle} icon={faHandRock} />
      <FontAwesomeIcon style={myStyle} icon={faThumbsUp} />
      <FontAwesomeIcon style={myStyle} icon={faThumbsDown} />
      <FontAwesomeIcon style={myStyle} icon={faRocket} />
      <FontAwesomeIcon style={myStyle} icon={faRupeeSign} />
      <FontAwesomeIcon style={myStyle} icon={faPlane} />
    </div>
  )
}

export default FontAwesome; 