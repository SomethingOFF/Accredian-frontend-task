const Program = () => {
  return (
    <div className="md:grid grid-cols-12 max-w-[1360px] mx-auto px-4">
      <div className="col-span-3">
        <div className="md:block flex items-center w-full overflow-auto">
          <div className="px-6 py-3">Product name</div>
          <div className="px-6 py-3">Product name</div>
          <div className="px-6 py-3">Product name</div>
          <div className="px-6 py-3">Product name</div>
          <div className="px-6 py-3">Product name</div>
        </div>
      </div>
      <div className="col-span-9">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Program
                </th>
                <th scope="col" className="px-6 py-3">
                  Referrer Bonus
                </th>
                <th scope="col" className="px-6 py-3">
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody>
              {[...new Array(5)].map((_, index) => (
                // this key={index} temporary until data fetched from the db
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Professional Certificate Program in Product Management
                  </th>
                  <td className="px-6 py-4">$1900</td>
                  <td className="px-6 py-4">$1800</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Program;
