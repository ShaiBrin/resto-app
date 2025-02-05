import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavLinkProps {
  link: string;
  toggle?: () => void;
}

const NavItem: React.FC<NavLinkProps> = ({ link, toggle }) => {
  const pathname = usePathname();
  const text = link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);

  // Function to get the appropriate icon with color based on the pathname
  const getIcon = (link: string) => {
    switch (link) {
      case "/menu":
        return <LocalDiningIcon style={{ color: pathname === link ? "orange" : "inherit" }} />;
      case "/catering":
        return <DinnerDiningIcon style={{ color: pathname === link ? "blue" : "inherit" }} />;
      case "/ship":
        return <LocalShippingIcon style={{ color: pathname === link ? "gray" : "inherit" }} />;
      case "/location":
        return <LocationOnIcon style={{ color: pathname === link ? "gray" : "inherit" }} />;
      default:
        return null;
    }
  };

  return (
    <li className={link === "/location" ? "ml-auto" : ""}>
      <Link href={link} onClick={toggle ? () => toggle() : undefined}>
        <div className="flex items-center gap-x-2">
          {/* Render the icon with the correct color */}
          {getIcon(link)}
          <p
            className={`cursor-pointer transition duration-200 ${
              pathname === link ? "text-black font-bold" : "hover:text-black"
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
