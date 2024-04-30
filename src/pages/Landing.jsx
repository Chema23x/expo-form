import Image from "next/image";
import InputForm from "@/components/InputForm";
import UserInfo from "@/utils/UserInfo";
import UserAddress from "@/utils/UserAddress";
import SelectOptionInput from "@/components/SelectOptionInput";
import { useMediaQuery } from 'react-responsive'

const Landing = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    return(
      <>  
        <section className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center w-4/6 h-full bg-[#D9D9D9] z-10 absolute overflow-y-scroll mt-10">
                <div className="flex flex-col lg:flex-row w-11/12 items-center justify-evenly gap-4 lg:gap-0 h-24 mb-28 md:mb-40 lg:mb-10 mt-10">
                  <span className="text-[#E2282B] text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold slide-in-right ">
                    Road to
                  </span>
                    <Image 
                        src="/logo.png"
                        width={isMobile ? 150 : 250}
                        height={50}
                        alt="Logo de página"
                        className="slide-in-right"
                    />
                  <span className="text-[#E2282B] text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold slide-in-right">
                    2024
                  </span>
                </div>
                <h2 className="mb-6 text-3xl w-10/12 text-center">Te invitamos a la <span className="text-[#E2282B] font-medium">expo</span> de <span className="text-[#E2282B] font-medium">publicidad y marketing más grande</span> de LATAM.</h2>
                <h2 className="text-[#E2282B] font-bold text-4xl mb-16 text-center">¡Registrate para obtener tu acceso!</h2>
                <div className="grid lg:grid-flow-row grid-cols-1 lg:grid-cols-3 w-10/12 gap-20 mb-10 ">
                  {UserInfo.map(user => (
                    <InputForm tag={user.tag} labelValue={user.labelValue} type={user.type} name={user.name} />
                  ))}
                </div>
                <div className="w-full border-t-2 border-[#E2282B]"></div>
                <h2 className="w-11/12 p-10 ml-8 text-2xl font-bold">Dirección</h2>
                <div className="grid lg:grid-flow-row grid-cols-1 lg:grid-cols-3 w-10/12 gap-20 mb-10 ">
                {UserAddress.map(info => (
                    <InputForm tag={info.tag} labelValue={info.labelValue} type={info.type} name={info.name} />
                  ))}
                </div>
                <div className="grid lg:grid-flow-row grid-cols-1 lg:grid-cols-3 w-10/12 gap-20 mb-10 mt-10">
                  <SelectOptionInput tag={"guests"} title={"Invitados:*"} value1={"SI"} value2={"NO"} id={"guests"} name={"guests"} />
                  <InputForm tag={"nguests"} labelValue={"N. invitados:"} type={"text"} name={"nguests"} />
                  <SelectOptionInput tag={"access"} title={"Tipo de Acceso:"} value1={"TRADICIONAL"} value2={"VIP"} id={"access"} name={"access"} />
                </div>
                <Image 
                  src="/bannerBh.png"
                  width={1500}
                  height={300}
                  alt="Page background"
                  className="mb-6 scale-x-110"
                />
                <button className="bg-red-500 text-white border-2 px-12 py-1 rounded-md mb-4 font-bold hover:bg-slate-50 hover:text-black hover:border-black">ENVIAR</button>
            </div>
        </section>
      </>
    )
}

export default Landing;