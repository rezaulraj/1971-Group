import React from "react";
import image from "../../../assets/ai/ai.webp?url";
import {
  FaPython,
  FaJava,
  FaRProject,
  FaJs,
  FaReact,
  FaAws,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const TalentWork = () => {
  const techSolarSystem = [
    {
      name: "Languages",
      color: "bg-blue-500",
      ringColor: "border-blue-400/30",
      items: [
        {
          icon: <FaPython className="text-blue-400" />,
          name: "Python",
          color: "bg-blue-500/20",
        },
        {
          icon: <FaJava className="text-red-500" />,
          name: "Java",
          color: "bg-red-500/20",
        },
        {
          icon: <FaRProject className="text-blue-600" />,
          name: "R",
          color: "bg-blue-600/20",
        },
        {
          icon: <FaJs className="text-yellow-400" />,
          name: "JS",
          color: "bg-yellow-500/20",
        },
      ],
      radius: 120,
      speed: 30,
      initialRotate: 0,
    },
    {
      name: "Frameworks",
      color: "bg-purple-500",
      ringColor: "border-purple-400/30",
      items: [
        {
          icon: <SiTensorflow className="text-orange-500" />,
          name: "TF",
          color: "bg-orange-500/20",
        },
        {
          icon: <SiPytorch className="text-red-400" />,
          name: "PyTorch",
          color: "bg-red-500/20",
        },
        {
          icon: <FaReact className="text-blue-300" />,
          name: "React",
          color: "bg-blue-400/20",
        },
        {
          icon: <SiKeras className="text-red-600" />,
          name: "Keras",
          color: "bg-red-600/20",
        },
        {
          icon: <SiOpencv className="text-green-500" />,
          name: "OpenCV",
          color: "bg-green-500/20",
        },
      ],
      radius: 200,
      speed: 50,
      initialRotate: 45,
    },
    {
      name: "Cloud",
      color: "bg-teal-500",
      ringColor: "border-teal-400/30",
      items: [
        {
          icon: <FaAws className="text-yellow-500" />,
          name: "AWS",
          color: "bg-yellow-500/20",
        },
        {
          icon: <FaGoogle className="text-blue-400" />,
          name: "GCP",
          color: "bg-blue-400/20",
        },
        {
          icon: <FaMicrosoft className="text-green-400" />,
          name: "Azure",
          color: "bg-green-500/20",
        },
        {
          icon: <SiDocker className="text-blue-300" />,
          name: "Docker",
          color: "bg-blue-400/20",
        },
        {
          icon: <SiKubernetes className="text-blue-400" />,
          name: "K8s",
          color: "bg-blue-500/20",
        },
      ],
      radius: 280,
      speed: 70,
      initialRotate: 90,
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900/50 to-gray-800/90 overflow-hidden py-16">
      {/* Center Image */}
      <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl shadow-purple-500/40">
        <img src={image} alt="AI Core" className="w-full h-full object-cover" />
      </div>

      {/* Orbit rings and items */}
      {techSolarSystem.map((system, systemIndex) => (
        <div
          key={systemIndex}
          className="absolute"
          style={{
            width: `${system.radius * 2}px`,
            height: `${system.radius * 2}px`,
            transform: `rotate(${system.initialRotate}deg)`,
            animation: `spin ${system.speed}s linear infinite`,
          }}
        >
          {/* Orbit ring */}
          <div
            className={`absolute rounded-full border ${system.ringColor}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></div>

          {/* Orbiting icons */}
          {system.items.map((tech, techIndex) => {
            const angle = (techIndex * 360) / system.items.length;
            const x = system.radius * Math.cos((angle * Math.PI) / 180);
            const y = system.radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={techIndex}
                className={`absolute z-20 w-16 h-16 rounded-full ${tech.color} backdrop-blur-sm border-2 border-white/20 flex flex-col items-center justify-center text-2xl shadow-lg transition-all duration-500 hover:scale-125 hover:shadow-xl`}
                style={{
                  left: `calc(50% + ${x}px - 32px)`,
                  top: `calc(50% + ${y}px - 32px)`,
                }}
              >
                {tech.icon}
                <span className="absolute -bottom-6 text-[10px] font-bold text-white/90 tracking-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 z-30">
        {techSolarSystem.map((system, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className={`w-3 h-3 rounded-full ${system.color}`}></div>
            <span className="text-white/90 text-xs font-medium tracking-wider">
              {system.name}
            </span>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TalentWork;
