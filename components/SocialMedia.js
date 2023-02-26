import Link from "next/link"
import Image from "next/future/image"

import tiktokImg from "../public/tiktok_logo.png"
import facebookImg from "../public/facebook_logo.png"
import instagramImg from "../public/instagram_logo.png"
import linkedinImg from "../public/linkedin_logo.png"
import twitterImg from "../public/twitter_logo.png"
import youtubeImg from "../public/youtube_logo.png"

const SocialMediaContent = [
  {
    url: "https://www.linkedin.com/company/rentplan/",
    img: linkedinImg,
    alt: "linkedIn"
  },
  {
    url: "https://twitter.com/Rent_Plan",
    img: twitterImg,
    alt: "Twitter"
  },
  {
    url: "https://www.facebook.com/BuildYourRentPlan/",
    img: facebookImg,
    alt: "facebook"
  },
  {
    url: "https://www.instagram.com/rent_plan/",
    img: instagramImg,
    alt: "instagram"
  },
  {
    url: "https://www.youtube.com/channel/UC9HllX3rN5H3vbz2KHrBg6g/featured",
    img: youtubeImg,
    alt: "Youtube"
  },
  {
    url: "https://www.tiktok.com/@rentplan",
    img: tiktokImg,
    alt: "web"
  }
]

const SocialMedia = () => (
  <section id="social" className="pb-4 row">
    {SocialMediaContent &&
      SocialMediaContent.map(icon => (
        <div key={icon.alt} className="col-2 ">
          <Link className="ga" href={icon.url} passHref>
            <a>
              <Image className="img-fluid" src={icon.img} alt={icon.alt} />
            </a>
          </Link>
        </div>
      ))}
  </section>
)

export default SocialMedia
