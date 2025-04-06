import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 150, height = 150 }: LogoProps) {
  return (
    <Image
      src="/misjudged3dLogo.gif"
      alt={process.env.SITE_NAME || "Logo"}
      width={width}
      height={height}
      priority
    />
  );
}
  