interface Icon {
  className?: string
}

export const VideoIcon = ({ className }: Icon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M15 8v8H5V8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V7a1 1 0 0 0-1-1" /></svg>
  )
}
