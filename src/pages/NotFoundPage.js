import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../lottie/404.json'

function NotFoundPage() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
<div>
<div className="pt-36 pb-8">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
    )
}

export default NotFoundPage;