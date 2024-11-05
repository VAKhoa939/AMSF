import DropdownLanguage from './DropdownLanguage'
import '../../css/Header.css'
import ute from '../../assets/header/ute.png'


function Header() {
  return (
    <header>
      <div className='blue-section'>
        <DropdownLanguage />
        <div className='login-btn'>
          <a href='/login'>Login</a>
        </div>
      </div>
      <div className='white-section'>
        <img className='ute-img' src={ute}/>
      </div>
    </header>
  )
}

export default Header