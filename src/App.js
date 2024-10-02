import logo from './logo.svg';
import './App.css';
//사용자 정의 태그는 function으로 만듦, 대문자로 시작해야함
function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1>
      <a herf="/">{props.title}</a>
    </h1>
  </header>
}
function Nav() {
  return <nav>
    <ol>
      <li>
        <a href="/read/1">html</a>
      </li>
      <li>
        <a href="/read/2">css</a>
      </li>
      <li>
        <a href="/read/3">js</a>
      </li>
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
