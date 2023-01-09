import plus from '../assets/plus.svg';
import '../App.css';
import Auth from '../utils/Auth';

function Header() {
    return(
     <div>
       <header className='App-header'>
        <h3 className='header-text'>Product Roadmap</h3>
        {!!Auth.isAuthorization() && (
					<button className='btn-add'> <img src={plus} alt="icon plus"></img>Add New Group</button>
				)}
      </header>
      <hr className='divider'></hr>
     </div>
    );
}

export default Header;