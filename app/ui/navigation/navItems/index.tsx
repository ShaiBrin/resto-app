import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  toggle?: () => void;
  scrollToMenu?: () => void;
}

const NavItem: React.FC<NavLinkProps> = ({ link, toggle, scrollToMenu }) => {
  const pathname = usePathname();
  const text =
    link === "/location"
      ? "Hours & Location"
      : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);

  const getIcon = (link: string) => {
    switch (link) {
      case "/menu":
        return <LocalDiningIcon className={pathname === link ? "text-orange-500" : "text-white md:hover:text-yellow-500"} />;
      case "/catering":
        return <DinnerDiningIcon className={pathname === link ? "text-orange-500" : "text-white md:hover:text-yellow-500"} />;
      case "/location":
        return <LocationOnIcon className={pathname === link ? "text-orange-500" : "text-white md:hover:text-yellow-500"} />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (link === "/menu" && scrollToMenu) {
      scrollToMenu();
    }
    if (toggle) {
      toggle();
    }
  };

  return (
    <li>
      <Link href={link} onClick={handleClick}>
        <div className="flex items-center gap-x-2">
          {getIcon(link)}
          <p
            style={{ fontSize: "15px", fontWeight: "bold" }}
            className={`cursor-pointer relative text-white transition-all duration-200 custom-underline ${
              pathname === link ? "active-underline" : ""
            }`}
          >
            {text}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;