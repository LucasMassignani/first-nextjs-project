import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <Link href="/wilho">
        <a>Fala Wilho</a>
      </Link>
    </div>
  )
}

export default Home