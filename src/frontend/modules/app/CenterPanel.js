
import { Inter } from 'next/font/google'
import SearchBar from './SearchBar'
const inter = Inter({ subsets: ['latin'] })

export default function CenterPanel(){
    return(
       <div className="w-full">
            <SearchBar/>
       </div> 
    )
}