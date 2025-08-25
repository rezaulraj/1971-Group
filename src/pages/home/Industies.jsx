import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaHammer,
  FaBolt,
  FaWrench,
  FaFire,
  FaCar,
  FaTruck,
  FaTools,
  FaIndustry,
  FaCog,
  FaBroom,
  FaTruckLoading,
  FaFish,
  FaTractor,
  FaPaintRoller,
  FaHatCowboy,
  FaTree,
  FaTshirt,
  FaTrain,
  FaRecycle,
  FaCut,
  FaUtensils,
  FaBreadSlice,
  FaDrumstickBite,
  FaBoxes,
  FaAnchor,
  FaMountain,
  FaUmbrellaBeach,
  FaPlaneDeparture,
  FaWindowMaximize,
  FaHome,
  FaLeaf,
  FaRoad,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import {
  GiCargoShip,
  GiHammerBreak,
  GiMetalBar,
  GiWoodBeam,
} from "react-icons/gi";
import { GrTools } from "react-icons/gr";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      name: "Hospitality",
      icon: <MdOutlineRoomService className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide skilled staff for hotels, resorts, and event venues, including housekeepers, servers, bartenders, and front desk personnel to ensure exceptional guest experiences.",
    },
    {
      name: "Tourism",
      icon: <FaPlaneDeparture className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our service connects you with tour guides, travel agents, and activity coordinators to support and grow your tourism and travel business.",
    },
    {
      name: "Construction",
      icon: <FaHammer className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply reliable general laborers, skilled tradespeople, and site managers for residential, commercial, and infrastructure projects.",
    },
    {
      name: "Electrician",
      icon: <FaBolt className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide certified and experienced electricians for installation, maintenance, troubleshooting, and repair services across various settings.",
    },
    {
      name: "Plumber",
      icon: <FaWrench className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our network of licensed plumbers is ready for any task, from emergency repairs and fixture installation to complex system maintenance.",
    },
    {
      name: "Welder",
      icon: <FaFire className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661963236181-9eb0c8d766e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide skilled welders proficient in MIG, TIG, and arc welding for fabrication, construction, repair, and manufacturing needs.",
    },
    {
      name: "Glass Installer",
      icon: <FaWindowMaximize className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1683140920401-36b43c727bb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer expert glaziers and glass installers for windows, storefronts, mirrors, and custom glass projects, ensuring precision and safety.",
    },
    {
      name: "Mechanic",
      icon: <FaCar className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1674375348357-a25140a68bbd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We connect you with certified automotive and diesel mechanics for diagnostics, repairs, and routine maintenance on a wide range of vehicles.",
    },
    {
      name: "Shipbuilding",
      icon: <GiCargoShip className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1677535509270-2e557eb1ad4f?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply specialized labor for shipyards, including welders, pipefitters, electricians, and naval architects for construction and repair.",
    },
    {
      name: "Truck Driver",
      icon: <FaTruck className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661637686969-7fbcea8789ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide licensed and experienced CDL drivers for local, regional, and long-haul routes across various industries.",
    },
    {
      name: "Security Guard",
      icon: <FaShieldHalved className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer trained and vetted security personnel for static posts, patrols, event security, and asset protection.",
    },
    {
      name: "Carpenter",
      icon: <FaTools className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide skilled carpenters for framing, finishing, cabinetry, and custom woodworking projects in both residential and commercial settings.",
    },
    {
      name: "Wood Industry",
      icon: <GiWoodBeam className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1663133662619-dc71fedecfaa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply labor for sawmills, lumber processing, and manufacturing, including machine operators, graders, and treatment specialists.",
    },
    {
      name: "HVAC Tech",
      icon: <FaIndustry className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide certified HVAC technicians for the installation, maintenance, and repair of heating, ventilation, and air conditioning systems.",
    },
    {
      name: "Factory Worker",
      icon: <FaCog className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1652211955967-99c892925469?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We staff production lines, warehouses, and manufacturing plants with reliable general laborers, machine operators, and assemblers.",
    },
    {
      name: "Office Staff",
      icon: <FaCog className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1652211955967-99c892925469?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide temporary and permanent administrative professionals, including receptionists, data entry clerks, and executive assistants.",
    },
    {
      name: "Maintenance",
      icon: <FaWrench className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661644841013-fe5a56d28e7e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer general maintenance workers and technicians for facility upkeep, repairs, and ensuring operational efficiency.",
    },
    {
      name: "Janitorial",
      icon: <FaBroom className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide cleaning and custodial staff for offices, schools, industrial sites, and commercial facilities to maintain cleanliness and hygiene.",
    },
    {
      name: "Delivery",
      icon: <FaTruckLoading className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661342486992-2a08d4b466ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply delivery drivers and logistics helpers for courier services, e-commerce, and last-mile delivery operations.",
    },
    {
      name: "Fishing",
      icon: <FaFish className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We crew fishing vessels and support processing plants with experienced deckhands, net menders, and processing line workers.",
    },
    {
      name: "Agriculture & Farming",
      icon: <FaTractor className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide farmhands, equipment operators, harvesters, and nursery workers to support planting, cultivation, and harvesting cycles.",
    },
    {
      name: "Painting",
      icon: <FaPaintRoller className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1589357209136-dfcfc6e7363d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply professional painters for interior and exterior residential, commercial, and industrial projects, including preparation and finishing.",
    },
    {
      name: "Mining",
      icon: <FaMountain className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide trained personnel for surface and underground mining operations, including equipment operators, laborers, and safety coordinators.",
    },
    {
      name: "Dock Worker",
      icon: <FaAnchor className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1578575436981-9b5f47c8dea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We staff ports and warehouses with longshoremen, freight handlers, and equipment operators to manage the loading and unloading of cargo.",
    },
    {
      name: "Steelworker",
      icon: <FaIndustry className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661937421215-e27b8feb8b2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply labor for steel mills and fabrication shops, including ironworkers, welders, and machine operators specialized in metalworking.",
    },
    {
      name: "Warehouse Worker",
      icon: <FaBoxes className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661537879964-0552c60d30c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide pickers, packers, forklift operators, and inventory clerks to keep your distribution center or warehouse running smoothly.",
    },
    {
      name: "Cook",
      icon: <FaUtensils className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1673830185931-40661a11948f?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We place line cooks, prep cooks, and chefs in restaurants, hotels, cafeterias, and catering services.",
    },
    {
      name: "Recycling Worker",
      icon: <FaRecycle className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1717667745830-de42bb75a4fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We staff recycling and waste management facilities with sorters, plant operators, and helpers to support sustainable operations.",
    },
    {
      name: "Butcher",
      icon: <FaDrumstickBite className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1682129511550-6a1a403caa75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide skilled butchers and meat cutters for grocery stores, meat markets, and food processing plants.",
    },
    {
      name: "Textile Worker",
      icon: <FaTshirt className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply operators, sewers, and cutters for the garment and textile manufacturing industry.",
    },
    {
      name: "Roofing",
      icon: <FaHome className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1682617326551-4749611516f6?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide experienced roofing crews for installation, repair, and maintenance of shingle, tile, metal, and flat commercial roofs.",
    },
    {
      name: "Landscaping",
      icon: <FaLeaf className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer groundskeepers, gardeners, and landscape laborers for maintenance, installation, and hardscaping projects.",
    },
    {
      name: "Heavy Equipment Operator",
      icon: <GrTools className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1680658492774-6e2b4b5e7766?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We provide certified operators for excavators, bulldozers, loaders, and cranes for construction, mining, and infrastructure projects.",
    },
    {
      name: "Road Worker",
      icon: <FaRoad className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1696383147248-a9d66ae8d7bd?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We supply flaggers, laborers, and asphalt crews for road construction, maintenance, and repair work.",
    },
    {
      name: "Blacksmith",
      icon: <GiHammerBreak className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1528717384022-f8d665c86909?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We connect you with skilled metalworkers and blacksmiths for custom fabrication, artistic metalwork, and restoration projects.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
    document.body.style.overflow = "unset";
  };

  const navigateIndustry = (direction) => {
    if (!selectedIndustry) return;

    const currentIndex = industries.findIndex(
      (ind) => ind.name === selectedIndustry.name
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % industries.length;
    } else {
      newIndex = (currentIndex - 1 + industries.length) % industries.length;
    }

    setSelectedIndustry(industries[newIndex]);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        navigateIndustry("next");
      } else if (e.key === "ArrowLeft") {
        navigateIndustry("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedIndustry]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F1EE] relative overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="1971 Group provides skilled professionals across 30+ industries including construction, manufacturing, hospitality, healthcare, IT, and logistics. Find specialized talent for your sector."
        />
        <meta
          name="keywords"
          content="industry recruitment, skilled workers, construction staffing, manufacturing jobs, hospitality staff, healthcare recruitment, IT professionals, logistics workers, industrial staffing solutions"
        />
        <meta
          property="og:description"
          content="Specialized recruitment services for 30+ industries. Find skilled professionals for construction, manufacturing, hospitality, healthcare and more."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industries We Serve - 1971 Group Recruitment",
            description:
              "Skilled professionals for various industry needs including construction, manufacturing, hospitality, and healthcare",
            itemListElement: industries.map((industry, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: `${industry.name} Recruitment`,
                description: `Professional staffing solutions for ${industry.name} industry`,
                image: industry.image,
              },
            })),
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000b30] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Skilled professionals for your industry needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative h-40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(industry)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${industry.image})`,
                  transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-end p-4 text-white">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center mb-2 shadow-md">
                  <span className="text-white">{industry.icon}</span>
                </div>
                <h3 className="font-medium text-sm md:text-base text-center">
                  {industry.name}
                </h3>
              </div>

              <div
                className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] transition-all duration-300"
                style={{ width: hoveredCard === index ? "100%" : "0%" }}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#000b30] to-[#1a2a6b] hover:from-[#1a2a6b] hover:to-[#000b30] transition-all duration-300 cursor-pointer"
          >
            More Details Info
            <HiOutlineArrowNarrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {isModalOpen && selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateIndustry("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateIndustry("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mr-4">
                    <span className="text-white text-xl">
                      {selectedIndustry.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#000b30]">
                    {selectedIndustry.name}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedIndustry.description ||
                    "Professional staffing solutions for this industry"}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#000b30] mb-2">
                    Services We Provide:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Skilled professionals recruitment</li>
                    <li>• Temporary and permanent staffing</li>
                    <li>• Industry-specific talent sourcing</li>
                    <li>• Workforce management solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Industries;
