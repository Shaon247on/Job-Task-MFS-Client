import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const ContextAuth = useContext(AuthContext)    
    return ContextAuth
    
};

export default useAuth;