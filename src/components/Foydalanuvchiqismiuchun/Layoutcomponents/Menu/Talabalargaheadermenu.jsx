import React from 'react'

const Talabalargaheadermenu = () => {
    return (
        <div>
          <ul className="flex items-center justify-center font-semibold">
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default text-gray-800 dark:text-gray-200">
                Talabalarga
              </button>
              <div
                className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    duration-500 ease-in-out group:hover:transform z-50 min-w-[560px]"
              >
                <div className="relative top-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full">
                  <div
                    className="w-10 h-10 bg-white dark:bg-gray-800 transform rotate-45 absolute top-0 z-0
                        translate-x-0 transition-transform group-hover:translate-x-[12rem]
                        duration-500 ease-in-out rounded-sm"
                  ></div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="uppercase tracking-wider text-gray-700 dark:text-gray-300 font-medium text-[13px]">
                        Bakalavriat
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Yo‘riqnoma
                            </a>
                          </li>

                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Dars jadvali
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Stipendiyalar
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Iqtidorli talabalar
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-700 dark:text-gray-300 font-medium text-[13px]">
                        Bakalavriat
                        </p>
                        <ul className="mt-3 text-[15px]">
                        <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Kontingent
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Davlat imtihonlari
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Bitiruv malakaviy ish himoyasi
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                                  hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                                  hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
                            >
                              Odob ahloq qoidalari
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    };


export default Talabalargaheadermenu
