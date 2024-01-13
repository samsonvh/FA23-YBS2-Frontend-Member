import Wrapper from "@components/layout/Wrapper";
import MainHome from "@app/(homes)/home_main/page";

export const metadata = {
  title: "YBS - Yacht Booking System",
  description: "YBS - Yacht Booking System",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
