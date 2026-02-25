interface VideoCardsProps {
  URL: string
  title: string
  description: string
}

export default function VideoCards({ URL, title, description }: VideoCardsProps) {
  return (
      <div className="m-4 flex flex-col items-center p-4 text-center text-[#fda963] ">
        <iframe
          className="w-[100%]  sm:w-[340px] sm:h-[340px]"
          src={URL}
          title="YouTube video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p className="pt-2 font-bold">{title}</p>
        <p className="text-center">{description}</p>
      </div>
    
  )
}
