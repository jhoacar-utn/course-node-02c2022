import { getToken } from '../../../utils/token';

export default function AuthorizeToken({ children }) {
  const token = getToken();
  if (!token) {
    return (
      <div>
        Ud no esta autorizado
      </div>
    );
  }

  return children;
}
