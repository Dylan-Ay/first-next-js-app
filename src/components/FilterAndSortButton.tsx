import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction } from "react"

interface Props {
    setFilterSortMenuOpen : Dispatch<SetStateAction<boolean>>;
    resultNumber: number;
}

function FilterAndSortButton({setFilterSortMenuOpen, resultNumber}: Props) {
  return (
    <div className="flex items-center md:hidden justify-between w-64 mx-auto py-3">
        <button
        type="button"
        className="rounded-full bg-green-600 px-5 py-3 text-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex gap-2 text-white shadow-sm hover:bg-green-700"
        onClick={() => setFilterSortMenuOpen((prev: boolean) => !prev)}
      >
        {<AdjustmentsHorizontalIcon className="h-5 w-5"/>}Filtrer et trier
      </button>
      <span>{resultNumber} résultats</span>
      
    </div>
  )
}

export default FilterAndSortButton