import logo from '../assets/react-icon-small.png';
function Navbar() {
  return (
    <nav>
      <img className='nav--icon' src={logo} alt='logo' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar;
