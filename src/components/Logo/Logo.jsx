import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <h1 className={s.logoPrimary}>FJ</h1>
      </Link>
    </div>
  );
};

export default Logo;
