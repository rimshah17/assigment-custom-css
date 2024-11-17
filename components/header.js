import Link from 'next/link';
import '../styles/style.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="custom-row">
        <h1 className="logo"> First React Web </h1>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}
