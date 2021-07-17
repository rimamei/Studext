import React from "react";
import { CardScore, Image, Title } from "../atoms";
import data from "../../data";

const TopScore = () => {
  return (
    <div className="lg:w-[312px] h-[396px] wrapper flex-wrap lg:ml-6 mt-6 lg:mt-0 overflow-y-hidden">
      <div className="flex flex-row-reverse justify-between items-end topscore">
        <Image icon="images/peringkat/trophy.png" alt="thropy" />
        <div className="m-4">
          <Title label="Peringkat" outerClassName="text-xl mb-2.5" />
          <p className="text-xs leading-4 mb-2">
            Hasil akhir perolehan nilai try out
          </p>
          <figure className="flex items-center">
            <Image icon="images/download.png" alt="download" />
            <figcaption>
              <p className="text-sm font-bold text-blue-100 leading-5 cursor-pointer">
                Unduh .CSV
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="mx-4 h-[360px] overflow-y-auto scroll">
        {data.best_score.map((item) => (
          <CardScore item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopScore;
