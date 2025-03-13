import React, { useEffect, useState } from "react";
import { isbot } from "isbot";
// import { Helmet } from 'react-helmet';
// import MetaIcon from '../resources/favicon2.ico';


function Iframe() {
  let[IframeUrl, SetIframeUrl] = useState('https://znews.vn/');

  //function showIframe(file,title,favicon) {
    function showIframe(file) {
    const html = (
      <>
      {/* <Helmet>
          <title>{title}</title>
          {favicon == true ? 
          <link rel="icon" type="image/svg+xml" href={MetaIcon}/>
           :
           null
          }
      </Helmet> */}
      <iframe src={file} style={{
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        right: '0px',
        width: '100%',
        border: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        zIndex: '999999',
        height: '100%',
      }}></iframe>
      </>
    );
    return html;
  }

  const userAgent = navigator.userAgent.toLowerCase();
  if(
    !isbot(userAgent)){
    return(showIframe(IframeUrl));
  }else{
    return(showIframe("/id/home.html"));
  }
}
export default Iframe;
