import {
  DribbleIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { adminData } from "@/data/adminData";
import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";

export default function Portfolios() {
  return (
    <div className="rounded-[1.25rem] bg-card p-6 xl:p-8">
      <div className="mb-5 flex items-center justify-between">
        <Title>Portfolios</Title>
        <ActionButton />
      </div>
      <ul className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        {adminData.portofolios.map((portofolio) => (
          <Portofolio key={portofolio.id} portofolio={portofolio} />
        ))}
      </ul>
    </div>
  );
}

type PortofolioProps = {
  portofolio: {
    id: number;
    path: string;
    site: string;
  };
};

function Portofolio({ portofolio }: PortofolioProps) {
  let icon: JSX.Element;
  let baseUrl: string;

  switch (portofolio.site) {
    case "facebook":
      icon = <FacebookIcon />;
      baseUrl = "https://www.facebook.com/";
      break;
    case "dribbble":
      icon = <DribbleIcon />;
      baseUrl = "https://dribbble.com/";
      break;
    case "linkedin":
      icon = <LinkedinIcon />;
      baseUrl = "https://www.linkedin.com/";
      break;
    default:
      icon = <YoutubeIcon />;
      baseUrl = "https://www.youtube.com/";
      break;
  }

  return (
    <li className="rounded-[1.25rem] bg-body">
      <a
        href={`${baseUrl}${portofolio.path}`}
        className="flex items-center gap-4 lg:gap-6 xl:gap-8"
      >
        <span
          className={`grid h-12 w-12 place-content-center rounded-2xl [&_path]:fill-white [&_path]:stroke-white portofolio-${portofolio.site}`}
        >
          {icon}
        </span>
        <span className="text-base font-medium text-gray-800">
          {portofolio.path}
        </span>
      </a>
    </li>
  );
}
