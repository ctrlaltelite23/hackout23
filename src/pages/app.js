import CenterPanel from "@/frontend/modules/app/CenterPanel";
import SidePanel from "@/frontend/modules/app/SidePanel/SidePanel";

export default function Home(){
    return(
        <div className="flex">
            <SidePanel/>
            <CenterPanel/>
        </div>
    )
}