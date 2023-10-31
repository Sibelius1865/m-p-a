import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.scss';

const randomiseStr = str => str.repeat(10).substr(Math.floor(Math.random() * str.length));
const PageContainer = ({children}) => {
  const text = 'METAPHILOSOPHY-PHILOSOPHOLOGY-APHILOSOPHY/';
  const navigate =  useNavigate();
  const handleClick = () => navigate('../');
  const frame = (
    <div className='frame' onClick={handleClick}>
      <div className='header'>{randomiseStr(text)}</div>
      <div className='footer'>{randomiseStr(text)}</div>
    </div>
  )
  const menuList = ['home', 'articles', 'papers', 'keywords', 'community', 'links'];
  const pathname = useLocation().pathname.substring(1);
  const pageMenu = (
    <div className='page-menu'>
      <div className='menu-list'>
        /{menuList.map((m, i) => <span key={i}> <Link to={`../${m}`} className={pathname === m ? 'is-present' : ''}>{m.toUpperCase()}</Link> /</span>)}
      </div>
    </div>
  )
  const accountMenu = (
    <div className='account-menu'>
      SIGN-IN
    </div>
  )
  return (
    <div className='container'>
      {frame}
      <div className='body'>
        {pageMenu}
        <div className='content'>{children}</div>
        {/* {accountMenu} */}
      </div>
    </div>
  )
}

export default PageContainer;