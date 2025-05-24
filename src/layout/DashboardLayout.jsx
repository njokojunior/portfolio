import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styles from './Dashboard.module.css';

function DashboardLayout() {
    return (
      <div className={styles.dashboard}>
        <Nav />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    );
}

export default DashboardLayout;