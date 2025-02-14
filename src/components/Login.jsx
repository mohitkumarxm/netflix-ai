import Header from "./Header";

const Login = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
            alt="Browse"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 from-[10%] via-black/50 via-[30%] to-black/80 to-[100%]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 max-w-lg mx-auto p-6 rounded-lg">
            <div className=" text-white">
              <h1 className="text-4xl font-bold">
                Unlimited movies, TV shows and more.
              </h1>
              <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
              <p className="text-lg">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>

            <div className="">
              <form>
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-2 rounded-md w-full border-amber-50 text-white py-4 my-4"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="p-2 rounded-md w-full border-amber-50 text-white py-4 my-4"
                />
                <button className="bg-red-600 text-white p-2 pb-4 font-bold text-2xl w-full rounded-md">
                  Get Started
                  <span className="font-bold text-4xl"> &gt;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
