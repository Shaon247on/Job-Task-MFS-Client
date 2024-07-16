
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/1.png';
import useAuth from '../../Hooks/useAuth';
import Button1 from '../Button/Button1';
const SideNav = () => {
    const { user } = useAuth()
    return (
        <div className='flex justify-between items-center px-3 py-6'>
            {
                user ?
                    <div>

                    </div>
                    :
                    <div className='flex items-center gap-4'>
                        <div>
                            <Link to={'/login'}>
                                <Button1 className="px-4 text-sm md:px-7 py-3 rounded-xl bg-[#e91e63] text-white outline-none"
                                    text={"Login"}
                                ></Button1>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/register'}>
                                <Button1 className="px-4 text-sm md:px-7 py-3 rounded-xl bg-[#e91e63] text-white outline-none"
                                    text={"Register Now"}
                                ></Button1>
                            </Link>
                        </div>
                    </div>
            }

            <img src={Logo1} alt="" className='w-12 rounded-full' />
        </div>
    );
};

export default SideNav;