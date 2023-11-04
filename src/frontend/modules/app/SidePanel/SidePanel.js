import {HomeIcon, TagIcon, ArchiveBoxIcon, MoonIcon} from '@heroicons/react/24/outline'
import SidePanelTab from './SidePanelTab'

export default function SidePanel(){
    return(
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center">
                <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                  SK
                </span>
              </div>
              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <SidePanelTab icon={<HomeIcon className="h-6 w-6"/>} title={'Home'} />
                  </div>

                  <ul className="space-y-4 border-t border-gray-100 pt-4">
                    <li>
                    <SidePanelTab icon={<TagIcon className="h-6 w-6"/>} title={'Home'} href={'/app'}/>
                    </li>

                    <li>
                    <SidePanelTab icon={<ArchiveBoxIcon className="h-6 w-6"/>} title={'Spaces'} href={'/spaces'} />
                    </li>

                    <li>
                    <SidePanelTab icon={<MoonIcon className="h-6 w-6"/>} title={'Theme'} />
                    </li>

                    <li>
                   
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
              <form action="/logout">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Logout
                  </span>
                </button>
              </form>
            </div>
        </div>

    )
}