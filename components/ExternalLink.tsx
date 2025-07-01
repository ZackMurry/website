import { Link } from '@radix-ui/themes'
import { FC, ReactNode } from 'react'

interface Props {
  href: string
  className?: string
  children: ReactNode
}

const ExternalLink: FC<Props> = ({ href, children, className }) => (
  <Link href={href} underline='always' target='_blank' rel='noreferrer noopener' className={`!cursor-pointer ${className}`}>
    {children}
  </Link>
)

export default ExternalLink
