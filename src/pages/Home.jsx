import '../App.css';


const randomiseStr = str => str.repeat(10).substr(Math.floor(Math.random() * str.length));
const PageContainer = ({children}) => {
  const text = 'METAPHILOSOPHY-PHILOSOPHOLOGY-APHILOSOPHY/';
  const frame = (
    <div className='frame'>
      <div className='header'>{randomiseStr(text)}</div>
      <div className='footer'>{randomiseStr(text)}</div>
    </div>
  )
  const sidemenu = (
    <div className='sidemenu'>
      <div className='menu-list'>
        <div>{randomiseStr('HOME/')}</div>
        <div>{randomiseStr('ARTICLES/')}</div>
        <div>{randomiseStr('PAPERS/')}</div>
        <div>{randomiseStr('KEYWORDS/')}</div>
        <div>{randomiseStr('COMMUNITY/')}</div>
        <div>{randomiseStr('LINKS/')}</div>
      </div>
      <div className='account'>
        <div>{randomiseStr('SIGN-IN\\')}</div>
      </div>
    </div>
  )
  return (
    <>
      {frame}
      <div className='content'>
        {sidemenu}
        <div className='children'>{children}</div>
      </div>
    </>
  )
}


const Home = () => {
  return (
    <PageContainer>
      <p>The meaning of philosophy itself has been sought by various philosophers in its long history.</p>
    </PageContainer>
  )  
}

export default Home;