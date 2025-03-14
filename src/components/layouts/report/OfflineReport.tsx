import Icon from "@/components/Icons/Icon";
import { useState } from "react";

const data = [
      { id: 1, name: "Salam CintaQuran April 2023", date: "03 Dec 2022 10:10" },
      { id: 2, name: "Salam CintaQuran Maret 2023", date: "02 Dec 2022 09:30" },
      { id: 3, name: "Salam CintaQuran Februari 2023", date: "01 Dec 2022 08:20" },
      { id: 4, name: "Salam CintaQuran Januari 2023", date: "30 Nov 2022 07:15" },
      { id: 5, name: "Salam CintaQuran Desember 2022", date: "29 Nov 2022 06:10" },
      { id: 6, name: "Salam CintaQuran April 2023", date: "05 Dec 2022 10:10" },
      { id: 7, name: "Salam CintaQuran Maret 2023", date: "06 Dec 2022 09:30" },
      { id: 8, name: "Salam CintaQuran Februari 2023", date: "07 Dec 2022 08:20" },
      { id: 9, name: "Salam CintaQuran Januari 2023", date: "08 Nov 2022 07:15" },
      { id: 10, name: "Salam CintaQuran Desember 2022", date: "10 Nov 2022 06:10" },
];

export default function OfflineReport() {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(5);
      const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

      const sortedData = [...data].sort((a, b) => {
            if (sortConfig.key === "date") {
                  return sortConfig.direction === "asc"
                        ? new Date(a.date).getTime() - new Date(b.date).getTime()
                        : new Date(b.date).getTime() - new Date(a.date).getTime();
            } else {
                  return sortConfig.direction === "asc"
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name);
            }
      });

      const totalPages = Math.ceil(sortedData.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const visibleData = sortedData.slice(startIndex, startIndex + itemsPerPage);

      const handleSort = (key: string) => {
            setSortConfig((prev) => ({
                  key,
                  direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
            }));
      };

      return (
            <section className="container_section_view flex flex-col lg:gap-y-6 gap-y-5 lg:mb-[80px] mb-[50px] relative z-[6]">
                  <h2 className="font-semibold lg:text-[48px] text-xl leading-tight text-theme-dark">
                        Offline Report
                  </h2>
                  <div className="w-full p-6 bg-white rounded-lg shadow-md">
                        <div className="w-full overflow-x-auto">
                              <div className="w-full py-4 flex items-center gap-x-3">
                                    <h2 className="font-medium lg:text-xs text-[10px] text-black">Show</h2>
                                    <select
                                          name="entries"
                                          id="entries"
                                          value={itemsPerPage}
                                          onChange={(e) => {
                                                setItemsPerPage(Number(e.target.value));
                                                setCurrentPage(1);
                                          }}
                                          className="appearance-none font-medium lg:text-xs text-[10px] text-center py-1 px-2 rounded-[6px] bg-[#E0E0E0] outline-none"
                                    >
                                          <option value={5}>5</option>
                                          <option value={10}>10</option>
                                    </select>
                                    <h2 className="font-medium lg:text-xs text-[10px] text-black">entries</h2>
                              </div>
                              <table className="w-full lg:min-w-min min-w-[600px]  border-collapse border-b border-theme-gray_lg">
                                    <thead>
                                          <tr className="text-left font-bold lg:text-sm text-xs text-black leading-tight">
                                                <th className="py-4">No</th>
                                                <th className="py-4 cursor-pointer" onClick={() => handleSort("name")}>Nama Laporan <span className="lg:text-[10px] text-[8px] text-slate-400">
                                                      {sortConfig.key === "name" && (sortConfig.direction === "asc" ? "▲" : "▼")}</span></th>
                                                <th className="py-4 cursor-pointer" onClick={() => handleSort("date")}>Terakhir Update <span className="lg:text-[10px] text-[8px] text-slate-400">{sortConfig.key === "date" && (sortConfig.direction === "asc" ? "▲" : "▼")}</span></th>
                                                <th className="py-4 text-right">Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {visibleData.map((item, index) => (
                                                <tr key={item.id} className="border-b border-theme-gray_lg font-medium lg:text-sm text-xs leading-tight">
                                                      <td className="py-4">{startIndex + index + 1}</td>
                                                      <td className="py-4">{item.name}</td>
                                                      <td className="py-4">{item.date}</td>
                                                      <td className="py-4 text-right">
                                                            <a href="#" className="text-theme-ascent hover:text-theme-ascent/50 duration-200 flex items-center justify-end">
                                                                  <Icon name="anchor" className="lg:w-6 w-5 h-auto" />
                                                            </a>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-wrap justify-start items-center gap-2 mt-4 duration-200">
                              <button
                                    className={`font-medium lg:text-xs text-[10px] duration-200 ${currentPage === 1 ? "text-theme-secondary cursor-not-allowed" : "text-theme-ascent"}`}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                              >
                                    Sebelumnya
                              </button>

                              {[...Array(totalPages)].map((_, i) => (
                                    <button
                                          key={i}
                                          className={`py-2 px-3 rounded-[8px] font-medium lg:text-xs text-[10px] leading-tight text-center flex items-center justify-center transition-all duration-200 transform ${currentPage === i + 1 ? "bg-theme-ascent text-white" : "bg-theme-gray_lg"}`}
                                          onClick={() => setCurrentPage(i + 1)}
                                    >
                                          {i + 1}
                                    </button>
                              ))}

                              <button
                                    className={`font-medium lg:text-xs text-[10px] duration-200 ${currentPage === totalPages ? "text-theme-secondary cursor-not-allowed" : "text-theme-ascent"}`}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                              >
                                    Selanjutnya
                              </button>
                        </div>
                  </div>
            </section>
      );
}
