interface HeaderProps {
  title: string
  description?: string
}
const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className='text-center mt-5'>
      <h1 className='text-white font-semibold text-2xl'>{title}</h1>
      <p className='text-muted-foreground text-sm mb-2'>{description}</p>
      <span className='text-muted-foreground'>
        Powered by <span className='cursor-pointer text-white'>ChatGPT</span>{' '}
      </span>
    </div>
  )
}

export default Header
