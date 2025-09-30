import { man, bridge } from "../assets/blog/assets";

export default function About() {
  return (
    <>
      <section
        className={` mx-auto bg-cover w-full relative  h-[378px] rounded-md before:content-[""] before:block before:h-[378px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#4b4b4b] before:to-[#4b4b4b] before:opacity-50 before:rounded-md before:z-[10] flex items-center justify-center`}
        style={{ backgroundImage: `url(${man})` }}
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-white text-6xl font-bold z-[12] relative h-full ">
            About
          </h2>
          <p className="text-lg text-white z-[12] mt-2">
            BLOGGER DEVELOPER DESIGNER
          </p>
        </div>
      </section>
      <section className="max-w-[600px] flex  flex-col mx-auto text-center mb-8">
        <h3 className="text-lg text-[#4b4b4b] my-12">
          GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT
          DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.
        </h3>
        <p className="text-[#2b2b2b]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
      </section>
      <section className="my-8">
        <img src={bridge} alt="" />
      </section>
      <section className="max-w-[600px] flex  flex-col mx-auto text-center mb-8">
        <h3 className="text-lg text-[#4b4b4b] my-12">
          GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT
          DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.
        </h3>
        <p className="text-[#2b2b2b]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
      </section>
    </>
  );
}
