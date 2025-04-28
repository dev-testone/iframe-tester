import { useEffect, useState } from 'react';
import GMMotorsPage from './homepage';

const IframeSubApp = () => {
  const [message, setMessage] = useState<any>({});
  const whitelistedDomains = ['http://localhost','https://dealerlink-stage.dr.aecloud.io']
  useEffect(() => {
    // Listen for postMessage events from the parent window
    const messageHandler = (event:any) => {
      console.log(event)
      // Check the origin for security reasons
      if (whitelistedDomains.includes(event.origin)) {
        setMessage(event.data); // Set the message received
        console.log(`Message received from whitelisted domain`,event)
        
      }
    };
    window.parent.postMessage('{"event":"LOADED"}','http://localhost')
    window.parent.postMessage('{"event":"LOADED"}','https://dealerlink-stage.dr.aecloud.io')
    window.addEventListener('message', messageHandler);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  return (
    <div>
      <p>{message ? `Message received: ${message?.data?.samlToken}` : 'Waiting for message from parent...'}</p>

      <GMMotorsPage />
    </div>
  );
};

export default IframeSubApp;
