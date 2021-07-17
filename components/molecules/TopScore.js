import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { CardScore, Image, Title } from "../atoms";
import data from "../../data";

const TopScore = () => {
  return (
    <div className="w-[312px] h-[396px] wrapper ml-6 overflow-y-hidden topscore">
      <Image
        icon="images/peringkat/trophy.png"
        alt="thropy"
        className="absolute right-[24px] top-[120px] z-0"
      />
      <div className="m-4">
        <Title label="Peringkat" outerClassName="text-xl mb-2.5" />
        <p className="text-xs leading-4 mb-2">
          Hasil akhir perolehan nilai try out
        </p>
        <figure className="flex items-center mb-4">
          <Image icon="images/download.png" alt="download" />
          <figcaption>
            <p className="text-sm font-bold text-blue-100 leading-5">
              Unduh .CSV
            </p>
          </figcaption>
        </figure>
        <ScrollContainer vertical={true}>
          {data.best_score.map((item) => (
            <CardScore item={item} />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default TopScore;
