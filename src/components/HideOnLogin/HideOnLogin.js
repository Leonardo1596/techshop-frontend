import { useSelector } from 'react-redux';


const HideOnLogin = ({ children }) => {
  const stateAuth = useSelector((state) => state.handleAuth);

    if (stateAuth) {
        return null;
    }
    return children;
}

export default HideOnLogin