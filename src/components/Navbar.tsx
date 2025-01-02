export default function Navbar(props: { isResponsive: boolean }) {
  return (
    <nav>
      <ul
        className={`flex ${props.isResponsive && `flex-col`} ${!props.isResponsive && `gap-5`} font-semibold text-base`}
      >
        <li>
          <a href="#home"> Home </a>
        </li>
        <li>
          <a href="#skills"> Skills </a>
        </li>
        <li>
          <a href="#projects"> Projects </a>
        </li>
        <li>
          <a href="#education"> Education </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </nav>
  );
}
