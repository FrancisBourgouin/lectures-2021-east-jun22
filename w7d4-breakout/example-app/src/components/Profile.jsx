import { useEffect } from "react"

// export default function Profile({name, nickname, description, darkMode}) {

export default function Profile(props) {
  const { name, nickname, description, darkMode } = props

  useEffect(() => {
    const logClick = () => {
      console.log("user clicked on the page !")
    }

    document.addEventListener('click', logClick)

    return () => document.removeEventListener('click', logClick)

  }, [])

  return (
    <aside>
      <h1>{name}</h1>
      <h2>{nickname}</h2>
      <p>{description}</p>
    </aside>
  )
}