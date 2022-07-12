import Link from "next/link";
import Image from "next/image";
import Pokeboll from "../../public/pokeball.png";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image
                    alt={"Logo site"}
                    src={Pokeboll}
                    width={30}
                    height={30}
                />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}