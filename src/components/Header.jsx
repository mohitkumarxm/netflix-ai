const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute md:w-full z-50  lg:max-w-7xl">
        <div className="flex justify-between px-10 py-2 ">
          <div className="h-20">
            <img
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Netflix Logo"
              className="h-full "
            />
          </div>
          <div className="h-20 flex justify-center items-center">
            <button className="bg-red-600 text-white p-4 py-1 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
