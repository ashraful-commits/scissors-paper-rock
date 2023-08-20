import "./App.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

import {
  FaUser,
  FaRegHandRock,
  FaPaperPlane,
  FaRegHandScissors,
} from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
function App() {
  const [computer, setComputer] = useState({});
  const [you, setYou] = useState({});
  const [result, setResult] = useState(0);
  const [compResult, setCompresult] = useState(0);
  //====================array
  const choice = [
    { id: 0, icon: <FaPaperPlane />, name: "paper" },
    { id: 1, icon: <FaRegHandRock />, name: "rock" },
    { id: 2, icon: <FaRegHandScissors />, name: "scissors" },
  ];
  //===============paly game

  const playGame = (index) => {
    const Index = Math.floor(Math.random() * 3);
    const computer = choice[Index];
    const you = choice[index];
    setComputer(computer);
    setYou(you);
    console.log(you.icon);
    if (you.name === computer.name) {
      toast("It's tie!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      (you.name === "rock" && computer.name === "scissors") ||
      (you.name === "scissors" && computer.name === "paper") ||
      (you.name === "paper" && computer.name === "rock")
    ) {
      setResult(result + 1);
    } else {
      setCompresult(compResult + 1);
    }
  };
  const handlePlay = (index) => {
    playGame(index);
  };
  useEffect(() => {
    if (result >= 10) {
      swal("You win!", "", "success");
      setResult(0);
      setCompresult(0);
    }
    if (compResult >= 10) {
      swal("Computer win!", "", "success");

      setCompresult(0);
      setResult(0);
    }
  }, [result, compResult]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container-fluid w-screen h-screen flex justify-center items-center">
        <div className="row w-full h-full flex justify-center items-center">
          <div className="col flex justify-center items-center w-[500px] h-[500px]">
            {/* Same as */}
            <ToastContainer />
            <div className="card w-full h-full  bg-yellow-400 ">
              <div className="card-header w-full text-center  border-b-2 py-2 border-b-black">
                <h1 className="text-3xl font-extrabold py-2">
                  Rock Paper scissors
                </h1>
              </div>
              <div className="card-body px-10 ">
                <div className="player flex my-5 justify-evenly">
                  <div className="you flex flex-col items-center">
                    <span className="flex flex-col items-center">
                      <FaUser className="text-3xl border border-black rounded-full w-[50px] h-[50px]  p-1" />{" "}
                      You
                    </span>
                    <span className="mt-5 text-4xl text-white shadow-xl">
                      {you.id ? choice[you.id].icon : <FaRegHandRock />}
                    </span>
                    <div className="buttons flex gap-5 mt-10">
                      {choice.map((item, index) => {
                        return (
                          <button
                            className="bg-black group text-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-yellow-700 hover:text-white transition-all scale-100  duration-100 "
                            onClick={() => handlePlay(index)}
                            key={index}
                          >
                            <span className=" group-hover:scale-125">
                              {" "}
                              {item.icon}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="computer flex flex-col items-center">
                    <span className="flex flex-col items-center">
                      <RiComputerFill className="text-3xl border border-black rounded-full w-[50px] h-[50px] p-1" />
                      Computer
                    </span>
                    <span className="mt-5 text-4xl text-white shadow-xl">
                      {computer.id ? (
                        choice[computer.id].icon
                      ) : (
                        <FaRegHandRock />
                      )}
                    </span>
                  </div>
                </div>
                <div className="score mt-16 flex justify-evenly">
                  <span className="w-[70px] h-[70px] bg-black rounded-full flex justify-center items-center text-white text-3xl">
                    {result}
                  </span>
                  <span className="w-[70px] h-[70px] bg-black rounded-full flex justify-center items-center text-white text-3xl">
                    {compResult}
                  </span>
                </div>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
