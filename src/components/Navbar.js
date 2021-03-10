import { NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <ul>
            <NavLink to= '/'>Home</NavLink>
            <NavLink to='/articles'>Articles</NavLink>
            <NavLink to='/articles'>Article: hello</NavLink>
        </ul>
    );
};

export default Navbar;