import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div> 
      <h3 className='pb-4'>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())} className="p-3 text-white bg-blue-400 hover:bg-blue-400 dark:bg-orange-400 dark:hover:bg-orange-500">
        New Greeting
      </button>
    </div>
  );
}