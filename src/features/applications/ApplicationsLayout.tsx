import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsTable from "./ApplicationsTable";

export default function ApplicationsLayout() {
  return (
    <section>
      <div>
        <ApplicationsHeader />
        <ApplicationsTable />
      </div>
    </section>
  );
}
