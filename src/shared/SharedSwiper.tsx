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
  variant: "job" | "company";
  Component: ({
    data,
    onSelectId,
  }: {
    variant?: "default" | "featured";
    onSelectId?: (id: number) => void;
    data: DataType;
  }) => JSX.Element;
};

export default function SharedSwiper<T extends { id: number }>({
  options,
  dataList,
  variant,
  Component,
}: SharedSwiperProps<T>) {
  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: variant === "job" ? 1 : 2,
            spaceBetween: 12
          },
          1000: {
            slidesPerView: variant === "job" ? 2 : 3,
            spaceBetween: 20
          },
          1700: {
            slidesPerView: variant === "job" ? 2.3 : 4.5,
            spaceBetween: 30
          },
        }}
        modules={[FreeMode, Pagination]}
        freeMode
        pagination={
          options.pagination && { clickable: true, el: ".pagination-position" }
        }
        // spaceBetween={options.gap}
        // slidesPerView={options.slidesCount}
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
