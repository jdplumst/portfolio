export default function Header() {
  return (
    <div className="p-16 sticky">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Jeremiah Plumstead</h1>
        </div>
        <nav>
          <ul className="flex gap-5 font-semibold text-base">
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#experience"> Experience </a>
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
      </header>
    </div>
  );

  // <style>
  // 	.container {
  // 		padding: 16px 16px 16px 16px;
  // 		position: sticky;
  // 	}
  //
  // 	.header {
  // 		display: flex;
  // 		justify-content: space-between;
  // 		align-items: center;
  // 	}
  //
  // 	ul {
  // 		display: flex;
  // 		gap: 20px;
  // 	}
  //
  // 	li {
  // 		display: inline;
  // 		font-weight: 600;
  // 		font-size: 1.5rem;
  // 	}
  //
  // 	a {
  // 		text-decoration: none;
  // 		color: inherit;
  // 	}
  //
  // 	@media (max-width: 768px) {
  // 		h1 {
  // 			font-size: 1.5rem;
  // 		}
  //
  // 		ul {
  // 			display: flex;
  // 			gap: 5px;
  // 		}
  //
  // 		li {
  // 			font-size: 0.75rem;
  // 		}
  // 	}
  // </style>
}
