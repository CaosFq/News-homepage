import burgerMenu from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm: place-content-around sm:text-[16px] sm:items-center">
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#popular">Popular</a>
        </li>
        <li>
            <a href="#trending">Trending</a>
        </li>
        <li>
            <a href="#categories">Categories</a>
        </li>

    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu Hamburguesa" />
    </>
  )
}

 
