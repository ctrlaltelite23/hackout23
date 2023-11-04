export default function SearchBar(){
    return(
        <div className="px-10 mt-6">
                <label
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 pb-3 focus-within:border-blue-600"
                >
                    <input
                    type="search"
                    id="search"
                    placeholder="Search your mind..."
                    
                    class={`peer h-8 w-full border-none placeholder:italic text-4xl focus:border-transparent focus:outline-none focus:ring-0`}
                />
                </label>
        </div>
    )
}