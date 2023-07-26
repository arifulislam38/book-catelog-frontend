import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
const MainLayout = () => {
  return (
    <main className='max-w-[1260px] w-full mx-auto border border-red-400 bg-slate-50'>
        <Navbar />
        <section>
            <Outlet />
        </section>
        <Footer/>
    </main>
  )
}

export default MainLayout