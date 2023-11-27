import Image from "next/image";

type VoiceActor = {
  person: {
    mal_id: number;
    url: string;
    name?: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  };
  language: string;
}

const VoiceActor: React.FC<{ voiceActors: VoiceActor }> = ({ voiceActors }) => {
  return (
    <div
      key={voiceActors.person.mal_id}
      className="flex gap-2 hover:bg-dark hover:cursor-pointer w-[280px]"
    >
      <Image
        src={voiceActors.person.images.jpg.image_url}
        alt="image-character"
        width={1920}
        height={1080}
        className="w-[80px] h-[100px]"
      />
      <div className="flex flex-col justify-between">
        <p>{voiceActors.person.name}</p>
      </div>
    </div>
  )
}

export default VoiceActor