import helloImg from "../assets/images/hello.svg";
import profile from "../assets/images/profile.png";

const Home = () => {
  return (
    <main className="flex flex-col p-4 pb-0 pt-[150px] bg-[#EDF2F8] xl:grid xl:grid-cols-[1fr_780px_1fr] xl:gap-4 min-h-[100vh] main-background-image">
      <div className="pl-4 sm:pl-[8rem] xl:pl-4 mt-4 xl:justify-self-end">
        <div className="py-4 px-10 rounded bg-white w-[max-content] shadow-lg">
          <h1 className="flex gap-4 ">
            <img src={helloImg} alt="" className="w-[50px]" />
            <div className="flex gap-2 flex-col">
              <span>Hello I am</span>
              <span className="font-bold text-4xl">Micael</span>
            </div>
          </h1>
        </div>
        <div className="py-4 px-6 bg-white rounded flex flex-col gap-2 w-[max-content] mt-8">
          <strong className="font-medium text-gray-500">WEB DEVELOPER</strong>
          <strong className="font-medium text-gray-500">FREELANCER</strong>
        </div>
      </div>
      <div className="mt-8 mb-16 xl:mb-0">
        <img
          src={profile}
          alt=""
          className="mx-auto lg:w-[750px] mt-[inherit]"
        />
      </div>
      <div className="flex justify-center mt-4 mx-auto w-[350px] h-[270px] relative sm:w-[60%] xl:w-full xl:h-full ">
        <div className="flex justify-center items-center w-[110px] h-[110px] rounded-[50%] bg-white shadow-lg absolute top-0 left-0 xl:left-2 xl:top-24 ">
          <div className="w-[50px] h-[50px] rounded-[50%] flutter-bg-image" />
        </div>
        <div className="flex justify-center items-center w-[150px] h-[150px] rounded-[50%] bg-white shadow-lg absolute top-3 right-0 sm:left-[50%] sm:translate-x-[-50%] xl:top-[50%] xl:left-5 xl:sm:translate-x-0 xl:translate-y-[-50%]">
          <div className="w-[85px] h-[85px] rounded-[50%] redux-bg-image" />
        </div>
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[50%] bg-white shadow-lg absolute bottom-0 sm:top-0 sm:right-0 xl:top-[80%] xl:left-0">
          <div className="w-[50px] h-[50px] rounded-[50%] sass-bg-image m-auto" />
        </div>
      </div>
    </main>
  );
};

export default Home;
