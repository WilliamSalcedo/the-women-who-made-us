interface VideoCardsProps {
  URL: string
  title: string
  description: string
  iframeClassName?: string
}

export default function VideoCards({ URL, title, description,  iframeClassName }: VideoCardsProps) {

  const defaultStyles = "w-full sm:w-[340px] sm:h-[340px]"
  
  return (
      <div className="m-4 flex flex-col items-center  text-center text-[#fda963] ">
        <iframe
          className={iframeClassName ? iframeClassName : defaultStyles}
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
