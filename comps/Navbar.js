import Link from 'next/link';


const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/stories/story1"><a>Anime Man</a></Link>
        </nav>
    );
}
 
export default Navbar;