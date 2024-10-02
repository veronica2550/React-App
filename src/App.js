import logo from './logo.svg';
import './App.css';
//사용자 정의 태그는 function으로 만듦, 대문자로 시작해야함
function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1>
      {/* 클릭했을 때 page reload가 일어나지 않게 하는 방법
      함수 호출 될 때 onClick 콜백함수로 들어감
      preventDefault를 사용하면 a 태그가 동작하는 기본 동작을 방지함 -> 클릭해도 reload 방지 */}
      <a herf="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a>
    </h1>
  </header>
}
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
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
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' }
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        alert('Header')
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
