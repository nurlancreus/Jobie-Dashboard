import CompaniesContainer from "./CompaniesContainer";

export default function CompaniesLayout() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:gap-7 xl:gap-10 [&>:first-child]:flex-grow [&>:last-child]:basis-96">
        <CompaniesContainer />
      </div>
    </section>
  );
}
