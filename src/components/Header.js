import signature from '../assets/signature.png';

const Header = ({title}) => {
    return ( 
        <nav className="nav">
            <a href='#!' className='brand-logo'>{title}</a>
            <div className='right-align'>
                <img id='signature' alt='signature' src= {signature}/>
            </div>
        </nav>
    );
}
 
export default Header;