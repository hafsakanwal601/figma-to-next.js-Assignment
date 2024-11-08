import Link from "next/link";



// export default function Header(data:any)
// {
//     return(
//         <div className={ ` ${data.font.className} parent-link`}>
//             <ul className="links">
//                 <li className="link"><Link href="">Work</Link></li>
//                 <li className="link"><Link href="">Blog</Link></li>
//                 <li className="link"><Link href="">Contact</Link></li>

//             </ul>
//         </div>
//     )
// }
interface HeaderProps {
  font: { className: string }; 
}

export default function Header({ font }:HeaderProps) {
    return (
      <div className={`${font.className} parent-link`}>
        <ul className="links">
          <li className="link">
            <Link href="/work" aria-label="Go to Work page">Work</Link>
          </li>
          <li className="link">
            <Link href="/blog" aria-label="Go to Blog page">Blog</Link>
          </li>
          <li className="link">
            <Link href="/contact" aria-label="Go to Contact page">Contact</Link>
          </li>
        </ul>
      </div>
    );
}