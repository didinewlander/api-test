import NonRealTimeVideo from "./NonRealTimeVideo";
import RealTimeVideo from "./RealTimeVideo";

const App = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-extrabold mb-4'>Video Streaming</h1>
      <div className='w-full flex flex-row gap-8 items-start'>
        <NonRealTimeVideo />
        <RealTimeVideo />
      </div>
    </div>
  );
};

export default App;
