import title from '../assets/LegalTitle.png'

export default function Legal() {
  return (
    <div className="m-8 flex flex-col justify-center text-[#fda963]">
      <div className="flex justify-center">
        <img src={title} alt="" className="w-120" />
      </div>
      <div className="flex justify-center">
        <p className="mt-10 w-[80%] text-justify">
          <b>Intellectual Property & Fair Use</b> <i>The Women Who Made Us</i>  is a creative tribute and
          educational project. This production and its digital platforms may include brief
          audiovisual excerpts, archival materials, and iconic imagery. These are used for purposes
          of commentary, education, and artistic transformation, in accordance with applicable Fair
          Use and copyright exceptions. <br /><br /> <b>Our Intent</b>  All musical performances and visual tributes are
          created in honor of the original artists and their enduring legacies. We are here to
          celebrate the voices that shaped us, ensuring their stories continue to inspire new
          generations. <br /><br /> <b>Copyright</b> All original content, branding, and production concepts are the
          property of Sandra Salcedo Miller and <i>The Women Who Made Us</i> collective © 2024-2026.
        </p>
      </div>
    </div>
  )
}
