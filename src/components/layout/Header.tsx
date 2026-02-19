import logo from '../../assets/Heart.png'


export default function Header() {
  return (
    <header className="w-full">
      
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex justify-center md:justify-start m-8">
            <img src={logo} alt="The Women Who Made Us" className="w-28 md:w-40 lg:w-80" />
          </div>
          <div>
          </div>
        </div>
      </div>
    </header>
  )
}
