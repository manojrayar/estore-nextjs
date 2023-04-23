import Link from "next/link";

const Navbar =()=>{
    return (
        
  <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">e-Store</a>
    <ul id="nav-mobile" className="right ">
      <li> <Link href='/login'> Login</Link> </li>
      <li><Link href='/signup'> Signup </Link></li>
      <li><Link href='/create'> Create </Link></li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;