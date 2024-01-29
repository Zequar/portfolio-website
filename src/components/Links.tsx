import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const ExternalLink = ({
  label,
  url,
  icon,
}: {
  label: string
  url: string
  icon?: IconProp
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="poppins hover:underline text-sm"
    >
      {icon && <FontAwesomeIcon icon={icon} size="lg" className="pr-2" />}
      {label}
    </a>
  )
}

export const InnerLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link to={url} className="text-sm poppins hover:underline">
      {label}
    </Link>
  )
}

export const DownloadLink = ({
  label,
  filename,
  url,
}: {
  label: string
  filename: string
  url: string
}) => {
  return (
    <a
      href={url}
      download={filename}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline poppins text-sm"
    >
      {label}
    </a>
  )
}
