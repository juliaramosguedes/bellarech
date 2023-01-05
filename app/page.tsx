import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <main className="text-center h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-heading">Welcome to Bella's Portfolio</h1>
      <div className="text-1xl font-body mt-8">
        <p>This website is under development.</p>
        <p>You can reach me out at:</p>
        <nav className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/bellarech.art"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2xl" />
          </a>
          <a
            href="https://www.behance.net/isabellrechech2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "behance"]} size="2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/isabellarech-art"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2xl" />
          </a>
          <a href="mailto:ibellarech@gmail.com">
            <FontAwesomeIcon icon={["far", "envelope"]} size="2xl" />
          </a>
        </nav>
      </div>
    </main>
  )
}
