import { useEffect, useState } from 'react';
import GMMotorsPage from './homepage';

const IframeSubApp = () => {
  const [message, setMessage] = useState<any>({});
  const whitelistedDomains = ['http://localhost:3000']
  useEffect(() => {
    // Listen for postMessage events from the parent window
    const messageHandler = (event) => {
      console.log(event)
      // Check the origin for security reasons
      if (whitelistedDomains.includes(event.origin)) {
        setMessage(event.data); // Set the message received
        console.log(`Message received from whitelisted domain`,event)
        window.postMessage('MESSAGE','http://localhost:3000')
      }
    };

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
