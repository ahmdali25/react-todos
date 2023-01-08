import plus from '../assets/plus.svg';
import '../App.css';

function Header() {
    return(
        <header className='App-header'>
        <h3 className='header-text'>Product Roadmap</h3>
        <button className='btn-add'> <img src={plus} alt="icon plus"></img>Add New Group</button>
      </header>
    );
}

export default Header;