import Link from "next/link"
import Image from "next/future/image"
import img from "../public/logo_blue.png"

const Logo = () => (
  <section>
    <Link className="ga" href="https://rentplan.com/" passHref>
      <a>
        <Image className="img-fluid" src={img} alt="logo" priority={true} />
      </a>
    </Link>
  </section>
)

export default Logo
