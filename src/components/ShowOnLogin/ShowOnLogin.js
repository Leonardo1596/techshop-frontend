import { useSelector } from 'react-redux';

const ShowOnLogin = ({ children }) => {
  const stateAuth = useSelector((state) => state.handleAuth);

  if (stateAuth) {
    return children;
  }
  return null;
}

export default ShowOnLogin