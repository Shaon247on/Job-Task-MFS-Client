
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/1.png';
import useAuth from '../../Hooks/useAuth';
const SideNav = () => {
    const { user } = useAuth()
    return (
        <div className='flex justify-between items-center px-3 py-6'>
            <Link to={'/login'}>
                <button className="px-7 py-3 rounded-xl bg-[#e91e63] text-white outline-none">Login</button>
            </Link>
            <img src={Logo1} alt="" className='w-12 rounded-full' />
        </div>
    );
};

export default SideNav;