import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            "Stronger Every Day, Fitter for Life!"
          </p>
          <p> @ EVO-GYM All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Youtube</p>
          <p className="my-5">X</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact US</h4>
          <p className="my-5">For Any Queries contact the below numbers</p>
          <p>(+91) 1234567890</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
