import { FC, ReactNode } from 'react'

interface Props {
  href: string
  className?: string
  children: ReactNode
}

const ExternalLink: FC<Props> = ({ href, children, className }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer noopener'
    className={`underline underline-offset-2 rounded-[3px] py-[3px] -my-[3px] px-[2px] -mx-[2px] hover:bg-stone-300 ${className ?? ''}`}
  >
    {children}
  </a>
)

export default ExternalLink
