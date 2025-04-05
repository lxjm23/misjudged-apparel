import Image from "next/image"

export default function Logo() {
  return <Image src={"/misjudged3dLogo.gif"} 
  alt={`${process.env.SITE_NAME}`}
   width={150} 
   height={150}
   priority={true}
   />
}