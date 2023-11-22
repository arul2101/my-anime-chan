import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnimeList = ({ animes }) => {
  // const { data: animes, isLoading } = await getAnimeSchedules(`filter=${day}`);
  // const [data, setData] = useState([]);



  // const render = animes?.map(anime => {
  //   return (
  //     <Link key={anime.mal_id} href="/belom" className="w-full flex gap-4 mb-5 py-2 px-4 rounded-md hover:bg-dark hover:cursor-pointer">
  //       <Image src={anime.images.webp.image_url} alt="image-test" className="w-[20%] h-[200px] object-cover rounded-sm" />

  //       <div>
  //         <h2 className="mb-5">Spy X Family Season 2</h2>
  //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste dolorum tenetur sed aspernatur id facere vel porro labore sapiente. Velit sequi molestias quidem, in vero voluptates quam officiis non..</p>
  //       </div>
  //     </Link>
  //   )
  // })

  return (
    <>
      {/* {animes?.map(anime => {
        <Link key={anime.mal_id} href="/belom" className="w-full flex gap-4 mb-5 py-2 px-4 rounded-md hover:bg-dark hover:cursor-pointer">
          <Image src={anime.images.webp.image_url} alt="image-test" className="w-[20%] h-[200px] object-cover rounded-sm" />

          <div>
            <h2 className="mb-5">Spy X Family Season 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste dolorum tenetur sed aspernatur id facere vel porro labore sapiente. Velit sequi molestias quidem, in vero voluptates quam officiis non..</p>
          </div>
        </Link>
      })} */}
    </>
  )
}

export default AnimeList