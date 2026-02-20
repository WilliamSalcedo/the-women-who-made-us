import title from '../assets/TheVoicesTitle.png'

export default function TheVoices(){
    return(
        <div className="m-8 flex flex-col justify-center text-[#fda963]">
          <div className="flex justify-center">
            <img src={title} alt="" className="w-120"/>
          </div>
        </div>
    )
}