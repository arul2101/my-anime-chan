'use client'

import LoadingSpinner from '@/components/LoadingSpinner';
import { useAnimeCharacter } from '@/hooks/useAnimeCharacter';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Page = () => {
  const pathName = usePathname();
  const id = Number(pathName.split("/")[4]);
  const router = useRouter();

  const { animeCharacter, isFetching } = useAnimeCharacter(id);


  return (
    <>
      <span onClick={() => router.back()} className="text-white text-[1.2rem] cursor-pointer">&laquo; Back</span>
      <m.div
        className="lg:w-[70%] w-[100%] my-4 bg-section text-white py-4 px-6 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "linear" }}
      > {isFetching
        ? <LoadingSpinner />
        : (
          <div className="flex gap-2 md:justify-between md:flex-row flex-col font-extralight">
            <div className="md:w-[30%]">
              <Image
                src={animeCharacter.images?.webp.image_url}
                alt="image-anime-detail"
                width={1920}
                height={1080}
                className="md:w-[100%] md:h-[70%] w-[100%] h-[400px] rounded-md object-cover"
              />
            </div>

            <div className="md:w-[67%]">
              <div className="mb-7">
                <h1 className="font-bold text-primary text-[1.5rem]">{animeCharacter.name}</h1>
                <h1 className="">{animeCharacter.name_kanji}</h1>
              </div>

              <div>
                <p className="md:text-[1rem] text-[.9rem]">{animeCharacter.about}</p>
              </div>
            </div>
          </div>
        )
        }


      </m.div>
    </>
  )
}

export default Page