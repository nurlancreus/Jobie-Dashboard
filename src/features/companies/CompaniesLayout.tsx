import CompaniesContainer from "./CompaniesContainer";

export default function CompaniesLayout() {
  return (
    <section>
      <div className="flex [&>:first-child]:flex-grow [&>:last-child]:basis-96 gap-x-10">
        <CompaniesContainer />
      </div>
    </section>
  );
}
