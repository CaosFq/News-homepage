



export const Article = ({img, number, title, description}) => {
  return (
   <article className="flex h-[162px] md:w-[343px] md:flex-grow">

        <div className='w-[100px] flex-none'>
<img src={img} alt="Image of retro PCs" />
        </div>
 
        <div className='pl-6'>
   <p className='text-grayish-blue text-3xl mb-[18px] font-bold'>
{number}
    </p>
    <h2 className='font-bold mb-[18px]
     hover:text-soft-orange cursor-pointer'>
{title}
    </h2>
    <p className='text-very-dark-grayish-blue text-[16px]'>
{description}
    </p>
        </div>
       

    </article>
  )
}


