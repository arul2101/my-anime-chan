import HeaderTitle from "./HeaderTitle"

const Footer: React.FC = () => {
  return (
    <footer className="bg-section py-8 text-center text-white mt-[30%]">
      <HeaderTitle />
      <p className="mb-2">This app created using <a href="https://jikan.moe/" target="_blank" className="text-primary underline">JIKAN API</a> (Unofficial MyAnimeList API)</p>
      <p>Created with 💖 - &copy; <a href="https://www.instagram.com/anwar.production_/" target="_blank" className="text-primary underline">Anwar Production</a> 2024</p>
    </footer>
  )
}

export default Footer