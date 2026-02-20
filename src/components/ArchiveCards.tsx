interface ArchiveCardsProps{
  image:string
  title:string
  description:string
}

export default function ArchiveCards({image, title, description}: ArchiveCardsProps) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <img src={image} alt="" className="mb-4 w-35" />
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}
