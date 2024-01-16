import {
  DribbleIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { adminData } from "@/data/adminData";
import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";

export default function Portofolios() {
  return (
    <div className="bg-white rounded-[20px] pl-7 p-8">
      <div className="flex items-center justify-between mb-5">
        <Title>Portfolios</Title>
        <ActionButton />
      </div>
      <ul className="flex flex-col gap-8">
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
    <li className="bg-body rounded-[20px]">
      <a
        href={`${baseUrl}${portofolio.path}`}
        className="flex items-center gap-8"
      >
        <span
          className={`w-12 h-12 rounded-2xl grid place-content-center [&_path]:fill-white [&_path]:stroke-white portofolio-${portofolio.site}`}
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
