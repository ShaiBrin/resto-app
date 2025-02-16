import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  toggle?: () => void;
  scrollToMenu?: () => void; 
}

const NavItem: React.FC<NavLinkProps> = ({ link, toggle, scrollToMenu }) => {
  const pathname = usePathname();
  const text = link.replace("/", "").charAt(0).toUpperCase() + link.slice(2);

  // Function to get the appropriate icon with color based on the pathname
  const getIcon = (link: string) => {
    switch (link) {
      case "/menu":
        return <LocalDiningIcon style={{ color: pathname === link ? "orange" : "inherit" }} />;
      case "/catering":
        return <DinnerDiningIcon style={{ color: pathname === link ? "blue" : "inherit" }} />;
      case "/order":
        return <LocalShippingIcon style={{ color: pathname === link ? "gray" : "inherit" }} />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (link === "/menu" && scrollToMenu) {
      scrollToMenu(); // Call the scrollToMenu function when the "Menu" link is clicked
    }
    if (toggle) {
      toggle(); // Toggle the navigation menu if provided
    }
  };

  return (
    <li className={link === "/location" ? "ml-auto" : ""}>
      <Link href={link} onClick={handleClick}>
        <div className="flex items-center gap-x-2">
          {/* Render the icon with the correct color */}
          {getIcon(link)}
          <p
            className={`cursor-pointer transition duration-200 ${
              pathname === link ? "text-black font-bold" : "hover:text-red"
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
