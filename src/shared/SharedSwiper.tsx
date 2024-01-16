import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

type SharedSwiperProps<DataType> = {
  options: { gap: number; slidesCount: number; pagination: boolean };
  dataList: Array<DataType>;
  Component: ({
    data,
    onSelectId
  }: {
    variant?: "default" | "featured";
    onSelectId?: (id: number) => void
    data: DataType;
  }) => JSX.Element;
};

export default function SharedSwiper<T extends { id: number }>({
  options,
  dataList,
  Component,
}: SharedSwiperProps<T>) {
  return (
    <div className="mr-[-50px]">
      <Swiper
        modules={[FreeMode, Pagination]}
        freeMode
        pagination={
          options.pagination && { clickable: true, el: ".pagination-position", }
        }
        spaceBetween={options.gap}
        slidesPerView={options.slidesCount}
      >
        {dataList.map((data) => (
          <SwiperSlide key={data.id}>
            <Component data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
