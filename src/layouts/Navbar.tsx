import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="w-full h-[5vw] bg-slate-100 flex items-center justify-between px-10">
      <div className="w-8 h-8 shadow-md">img</div>
      <div>
        <ul className="flex w-full justify-between items-center gap-2">
          <li>c1</li>
          <li>c2</li>
          <li>c3</li>
        </ul>
      </div>
      <div>
        <ul className="flex w-full justify-between items-center gap-2">
          <li className='w-full relative'>
            <AiOutlineShoppingCart className="text-3xl w-full"/>
            <span className="absolute top-[-5px] right-[-2px] bg-red-400 rounded-full w-4 h-4 flex items-center justify-center text-slate-100">8</span>
          </li>
          <li>img</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar