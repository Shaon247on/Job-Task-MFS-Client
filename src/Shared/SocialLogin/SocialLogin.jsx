import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const { googleLogin} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className='flex gap-10 justify-center items-center'>
            <button onClick={handleGoogleLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FaGoogle className='text-[50px]'></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;