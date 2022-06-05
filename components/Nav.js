import requests from '../util/requests';
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  return (
    <nav className='overflow-x-scroll scrollbar-hide'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap 
            space-x-10 sm:scpace-x-20 overflow-x-scroll scrollbar-hide relative'>
             {Object.entries(requests).map(([key, { title, url}]) => {
                <h2
                    key={key}
                    onClick={() => router.push(`/genres=${key}`)}
                    className='cursor-pointer hover:text-white
                        transition duration-100 transform hover:scale-125
                        active:text-red-500 last:pr-24'
                >
                    {title}
                </h2>
             })}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
    </nav>
  )
}
 
export default Nav 