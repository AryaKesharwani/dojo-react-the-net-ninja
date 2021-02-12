// root component's
import NavBar from './NavBar'
import Home from './Home'
//  https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-11/dojo-blog/src

function App() {
  // const title="Welcome to the new blog"
  // const likes=60
  // const link="http://www.google.com"
  
  // error
  // const person={name:'arya',age:60}
  // true or false

  return (
    <div className="App">
        <NavBar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;


/* <h1>{title}</h1>
<p>Liked {likes} times</p>
<p>{50}</p>
<p>{"hello world "}</p>
<p>{[1,2,3,,4,5]}</p>
<p>{Math.random()*100}</p>
<a href={link}>Google site</a> */
