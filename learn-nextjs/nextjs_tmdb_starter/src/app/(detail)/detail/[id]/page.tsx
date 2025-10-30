import DetailInfo from "@/components/detail/DetailInfo";
import DetailTrailer from "@/components/detail/DetailTrailer";
import MainMovie from "@/components/main/MainMovie";

export default function page() {
  return (
    <>
      <DetailTrailer />
      <DetailInfo />
      <MainMovie />
    </>
  );
}
