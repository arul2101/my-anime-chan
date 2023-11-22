import ImageTest from '@/img/test.png'
import Image from 'next/image'
import TitleSection from './TitleSection'

const TopAnime: React.FC = () => {
  return (
    <div className="w-[33%] bg-section text-white py-4 px-6 rounded-md">
      <TitleSection title='Top Anime' />
      <div className='w-full my-4 flex px-2 py-3 rounded-md hover:bg-dark gap-4 hover:cursor-pointer'>
        <Image src={ImageTest} alt='test-image' className='w-[15%] h-[70px] object-cover' />

        <h2 className='font-light text-[1.2rem]'>Spy x Family season 1</h2>
      </div>
    </div>
  )
}

export default TopAnime