function Header() {
  return (
    <div className="flex items-center justify-between h-20">
      <div className="">
        <span className="text-2xl material-symbols-outlined">polymer</span>
      </div>
      <div className="flex flex-col items-end gap-2 w-11">
        <div className="h-1 bg-black rounded-sm w-7"></div>
        <div className="h-1 bg-black rounded-sm w-7"></div>
        <div className="w-4 h-1 bg-black rounded-sm"></div>
      </div>
    </div>
  );
}

export default Header;
