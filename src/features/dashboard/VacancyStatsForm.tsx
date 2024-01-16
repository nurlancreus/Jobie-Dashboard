import Select from "@/shared/Select";
import SwitchBtn from "@/shared/SwitchBtn";
import Title from "@/shared/Title";
import {
  SELECT_PERIOD_ID,
  SWITCH_APPLICATIONS_ID,
  SWITCH_INTERVIEWS_ID,
  SWITCH_REJECTED_ID,
} from "@/utils/constants";

const periodOptions = [
  {
    value: "year",
    label: "This Year",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "week",
    label: "This Week",
  },
];

export default function VacancyStatsForm() {
  return (
    <form className="flex items-center justify-between">
      <Title>Vacancy Stats</Title>
      <div className="flex items-center gap-10">
        <SwitchBtn
          key={SWITCH_APPLICATIONS_ID}
          label="Application Sent"
          id={SWITCH_APPLICATIONS_ID}
          checked={true}
        />
        <SwitchBtn
          key={SWITCH_INTERVIEWS_ID}
          label="Interviews"
          id={SWITCH_INTERVIEWS_ID}
          checked={true}
        />
        <SwitchBtn
          key={SWITCH_REJECTED_ID}
          label="Rejected"
          id={SWITCH_REJECTED_ID}
          checked={true}
        />
        <Select id={SELECT_PERIOD_ID} options={periodOptions} value="year" />
      </div>
    </form>
  );
}
