import logo from './logo.svg';
import './App.css';


function App() {





  return (

    
    <div className="App">

      
      <header className="App-header">



        <h2 id = "contactHere">
Feel Free to Contact Us!
        </h2>

        </header>
        <body className = "App-body">
        


        
        <h3 id = "contactInfo1">Phone: (403) 289-9050 </h3>
        <h3 id = "contactInfo2">Email: team@hackharvard.io</h3>
        <h3 id = "contactInfo3">Instagram: 
        <a
          className = "instaLink"
          href = "https://www.instagram.com/hackharvardcollege/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >@hackharvardcollege</a>
        </h3>


        <h3 id = "contactInfo4">Twitter: 
        <a
          className = "twitterLink"
          href = "https://twitter.com/hack_harvard?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >@hack_harvard</a>
        </h3>
        <img src = "assests/socialmedias.jpg" alt="an image of a green-3D-message-logo" id = "picture"></img>
        </body>
    </div>
  );
}

export default App;
