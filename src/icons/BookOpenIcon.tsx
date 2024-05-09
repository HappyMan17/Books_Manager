

const BookOpenIcon = ({ width, height }: { width: string, height: string }) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width={ width }  height={ height }  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6l0 13" /><path d="M12 6l0 13" />
      <path d="M21 6l0 13" />
    </svg>
  )
}

export default BookOpenIcon;