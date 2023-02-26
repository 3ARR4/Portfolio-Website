import Link from "next/link"

const ButtonsContent = [
  {
    id: "webinar",
    text: "Train and manage Virtual Assistant's (Replay)",
    iconLeft: "fa-solid fa-people-group",
    link: "https://rentplan.com/learn/webinars/training-virtual-assistants"
  },
  {
    id: "rentplan",
    text: "Learn more about us at RentPlan.com",
    iconLeft: "fa-solid fa-house-building",
    link: "https://www.rentplan.com"
  },
  {
    id: "invest",
    text: "Invest with us!",
    iconLeft: "fa-solid fa-house-chimney",
    link: "http://calendly.com/rentplan"
  },
  {
    id: "call",
    text: "Schedule a call with us!",
    iconLeft: "fa-solid fa-phone",
    link: "http://calendly.com/rentplan"
  },
  {
    id: "pricing",
    text: "Getting started is easy and free!",
    iconLeft: "fa-solid fa-user",
    link: "https://www.rentplan.com/pricing"
  },
  {
    id: "tips",
    text: "Get notifications for webinars!",
    iconLeft: "fa-solid fa-envelope",
    link: "https://rentplan.com/learn/webinars/register"
  },
  {
    id: "launch",
    text: "Watch the Rent Plan launch call",
    iconLeft: "fa-solid fa-rocket-launch",
    link: "https://www.youtube.com/watch?v=G8D6c_nP1Nw"
  },
  {
    id: "grandfather",
    text: "Grandfather Accounts are almost gone",
    iconLeft: "fa-solid fa-sparkles",
    link: "https://www.instagram.com/stories/highlights/17966920507589210/"
  }
]

const Button = ({
  design = "",
  iconLeft = "",
  iconRight = "",
  pencil = false,
  trash = false,
  text = "",
  type = "button",
  handleAction = null,
  disabled = false,
  fetching = false,
  url = null,
  hint = "",
  id = null
}) => {
  const iconPencil = <i style={{ fontSize: "14px" }} className="fal fa-pencil"></i>
  const iconTrash = <i style={{ fontSize: "14px" }} className="fal fa-trash-alt"></i>
  const showPaddingStart = text ? " ps-3" : ""
  const showPaddingEnd = text ? " pe-3" : ""
  return (
    <>
      {url ? (
        <>
          <Link href={url}>
            <a target="_blank">
              <button id={id} type={type} className={design + "ga"} onClick={handleAction} disabled={disabled}>
                {iconLeft && <i className={iconLeft + showPaddingEnd}></i>}
                {text ? text : pencil ? iconPencil : trash ? iconTrash : text}
                {iconRight && <i className={iconRight + showPaddingStart}></i>}
                {fetching && <span className="spinner-border spinner-border-sm ms-3" role="status" aria-hidden="true"></span>}
              </button>
            </a>
          </Link>
          {hint && <span>{hint}</span>}
        </>
      ) : (
        <>
          <button id={id} type={type} className={design + "ga"} onClick={handleAction} disabled={disabled}>
            {iconLeft && <i className={iconLeft + showPaddingEnd}></i>}
            {text ? text : pencil ? iconPencil : trash ? iconTrash : text}
            {iconRight && <i className={iconRight + showPaddingStart}></i>}
            {fetching && <span className="spinner-border spinner-border-sm ms-3" role="status" aria-hidden="true"></span>}
          </button>
          {hint && <div className="pt-3">{hint}</div>}
        </>
      )}
    </>
  )
}

const Buttons = () => (
  <section id="buttons">
    {ButtonsContent &&
      ButtonsContent.map(button => (
        <Button
          id={`${button.id}`}
          key={button.text}
          design="btn btn-primary "
          text={button.text}
          iconLeft={`${button.iconLeft} ps-1`}
          iconRight="fa-solid fa-chevron-right"
          url={button.link}
        />
      ))}
  </section>
)

export default Buttons
