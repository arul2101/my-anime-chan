'use client'

import { useRouter } from "next/navigation"

const HeaderTitle: React.FC = () => {
  const router = useRouter();
  return (
    <h2
      className="font-semibold text-[2rem] text-primary cursor-pointer"
      onClick={() => router.push("/")}
    >
      MyAnimeChan
    </h2>
  )
}

export default HeaderTitle