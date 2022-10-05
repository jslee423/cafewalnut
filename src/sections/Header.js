import Logo from '../components/Logo';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <Logo />
            <h1 className='HeaderTitle'>Café Walnut</h1>
        </div>
    );
};

export default Header;