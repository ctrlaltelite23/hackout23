export default function SidePanelTab({icon, title, href}){
    return(
        <a
        href={href}
        className=" group relative flex justify-center rounded px-2 py-1.5 text-blue-700"
      >
        {icon}

        <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
          {title}
        </span>
      </a>
    )
}