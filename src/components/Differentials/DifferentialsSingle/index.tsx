import Image from "next/image";

interface Props {
  icon: string;
  wIcon: number;
  hIcon: number;
  title: string;
  content: string;
}

export function DifferentialSingle({ icon, title, content, wIcon, hIcon }: Props) {
  return (
    <div className="flex flex-col gap-5 w-96">
      <Image
        src={icon}
        width={wIcon}
        height={hIcon}
        alt="icon"
      />
      <h2 className="text-2xl text-custom-green font-medium">{title}</h2>
      <span>{content}</span>
    </div>
  )
}