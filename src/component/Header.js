
import logo from '../images/react.png'

export default function Header()
{
    return(
       <header >
                <img src={logo} alt=""></img>
                <h3 >React JS</h3>
                <nav >
                   <ul >

                    <li > <a href="">About </a></li>
                    <li > <a href="">Pracing</a></li>
                    <li > <a href="">Contact</a> </li>

                   </ul>
                </nav>


       </header>
    );
}
