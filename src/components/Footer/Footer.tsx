import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="flex justify-center items-center"
      style={{ backgroundColor: "#6cc5b2" }}
    >
      <div className="footer py-8">
        <a href="">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Logo"
          />
        </a>
      </div>
    </footer>
  )
}