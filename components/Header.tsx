import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header flex items-center justify-between px-4", className)}>
      <Link href='/' className="flex-shrink-0">
        <Image 
          src="/assets/t.png"
          alt="Logo with name"
          width={50}
          height={32}
          className="hidden md:block rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
        <Image 
          src="/assets/t.png"
          alt="Logo"
          width={40}
          height={32}
          className="md:hidden rounded-xl"
        />
      </Link>
      {children}
    </div>
  )
}

export default Header