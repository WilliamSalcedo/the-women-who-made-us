interface ArchiveCardsProps{
  image:string
  title?:string
  description?:string
  iframeClassName?: string
}

export default function ArchiveCards({image, title, description, iframeClassName}: ArchiveCardsProps) {

  const defaultStyles = "mb-4 w-35"
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <img src={image} alt="" className={iframeClassName ? iframeClassName : defaultStyles} />
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}
