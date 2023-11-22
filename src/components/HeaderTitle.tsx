import Link from "next/link"

const HeaderTitle: React.FC = () => {
  return (
    <h2 className="font-semibold text-[2rem] text-primary">
      <Link href="/">MyAnimeChan</Link>
    </h2>
  )
}

export default HeaderTitle