import { MoreHorizontal } from "lucide-react"

const countries = [
  {
    id: 1,
    name: "United States",
    flag: "/flags/flag1.png",
    code: "US",
  },
  {
    id: 2,
    name: "Canada",
    flag: "/flags/flag2.png",
    code: "CA",
  },
  {
    id: 3,
    name: "Germany",
    flag: "/flags/flag3.png",
    code: "DE",
  },
  {
    id: 4,
    name: "UAE",
    flag: "/flags/flag4.png",
    code: "AE",
  },
  {
    id: 5,
    name: "United Kingdom",
    flag: "/flags/flag5.png",
    code: "GB",
  },
  {
    id: 6,
    name: "Australia",
    flag: "/flags/flag6.png",
    code: "AU",
  },
  {
    id: 7,
    name: "India",
    flag: "/flags/flag7.png",
    code: "IN",
  },
  {
    id: 8,
    name: "France",
    flag: "/flags/flag8.png",
    code: "FR",
  },
  {
    id: 9,
    name: "Spain",
    flag: "/flags/flag9.png",
    code: "ES",
  },
]

export default function BrowseByCountry() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12">
      <div className="overflow-hidden">
        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-200 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-1">Browse Event By Country</h2>
        </div>

        {/* Countries Grid */}
        <div className="p-6">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {countries.slice(0, 5).map((country) => (
              <button
                key={country.id}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:scale-105"
              >
                <div className="aspect-[5/2] flex items-center justify-center">
                  <img
                    src={country.flag || "/placeholder.svg"}
                    alt={`${country.name} flag`}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {countries.slice(5, 9).map((country) => (
              <button
                key={country.id}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:scale-105"
              >
                <div className="aspect-[5/2] flex items-center justify-center">
                  <img
                    src={country.flag || "/placeholder.svg"}
                    alt={`${country.name} flag`}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              </button>
            ))}

            {/* View All Button */}
            <button className="aspect-[3/2] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 flex flex-col items-center justify-center group p-4">
              <MoreHorizontal className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">View All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
