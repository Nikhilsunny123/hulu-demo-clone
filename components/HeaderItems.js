

function HeaderItems({title,Icon}) {
  return (
    <div className= "flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-amber-100">
        <Icon className="h-8 mb-1 group-hover:animate-ping"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItems