export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-50">
      <nav className="flex gap-2 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition-all duration-300">
          Home
        </a>
        <a href="#" className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition-all duration-300">
          Projects
        </a>
        <a href="#" className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition-all duration-300">
          About
        </a>
        <a href="#" className="nav-item px-4 py-1 rounded-full bg-white text-gray-900 hover:bg-white/70 transition-all duration-300">
          Contact
        </a>
      </nav>
    </div>
  );
};


// export const Header = () => {
//   return <div className="flex justify-center items-center fixed top-3">
// <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
// <a href="#" className="nav-item">
//   Home
//   </a>
// <a href="#" className="nav-item">
//   Projects
//   </a>
// <a href="#" className="nav-item">About
// </a>
// <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
//   Contact
//   </a>

// </nav>

//   </div>;
// };
