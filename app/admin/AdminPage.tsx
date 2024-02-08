"use client";
import React, { useState, useEffect } from "react";
import logo from "../../public/travelin img.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Squash as Hamburger, Twirl } from "hamburger-react";
import NavListDetails from "../components/CommonComponents/Navlist";
import { jwtDecode } from "jwt-decode";
import UserDetailsForm from "../components/CommonComponents/UserDetails";
import { LuHeart, LuSearch } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { useRef } from "react";
import BellIconDetails from "../components/CommonComponents/BellIconDetails";
import { FaRegHeart } from "react-icons/fa";
import Modal from "react-modal";

type ListDetails = {
  category: string;
  subcategory: string;
};

type UserData = {
  email: string;

  file_name: File | any;
};

export default function AdminPage({ children }: React.PropsWithChildren<{}>) {
  const [navState, setNavState] = useState<ListDetails>();
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const [navMenuvisible, setNavMenuvisible] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const [iconOpen, setIconOpen] = useState(false);
  const [imgClick, setImgClick] = useState(false);
  const [bellClick, setBellClick] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    file_name: "",
    email: "",
  });

  const [selectedListDetails, setSelectedListDetails] =
    useState<ListDetails | null>(null);

  const [parent, setParent] = useState<ListDetails | null>(null);
  const [ischildren, setChildren] = useState<ListDetails[]>([]);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsDetailsVisible(true);
    }, 400);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDetailsVisible(false);
    }, 300);
  };

  const navication = () => {
    setNavVisible(!navVisible);
    setIsRotated(!isRotated);

    setTimeout(() => {
      setOpen(!isOpen);
      setIconOpen(!iconOpen);
      setNavVisible(!navVisible);
    }, 100);
  };

  const MenuNavication = () => {
    setNavMenuvisible(!navMenuvisible);
    setTimeout(() => {
      setIconOpen(!iconOpen);
    }, 100);
  };
  const editForm = () => {
    setImgClick(!imgClick);
  };
  const iconClick = () => {
    setBellClick((prevBellClick) => !prevBellClick);
  };

  const Blink = () => {
    return <div className="notification-circle"></div>;
  };

  const token: any =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : undefined;

  if (!token) {
    return;
  }

  const decoded: any = jwtDecode(token);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${decoded.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((Apidata) => {
          setUserData({ ...Apidata.data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    };

    fetchData();
  }, [decoded.userId, token]);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as unknown as Node).contains(event.target as Node)
      ) {
        setImgClick(false);
        setBellClick(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      window.location.reload();
    }
  };

  const handleListClick = (listDetails: any) => {
    setNavState({
      category: listDetails.category,
      subcategory: listDetails.subcategory,
    });
    setSelectedListDetails(listDetails);
    setParent(listDetails.category);
    setChildren(listDetails.subcategory);
  };
  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, 0.0)",
      zIndex: "3000",
    },
    content: {
      top: "-9.3%",
      left: "84.7%",
      right: "-15%",
      bottom: "0",
      margin: "auto",
      border: "none",
      background: "transparent",
      overflow: "auto",
      borderRadius: "4px",
      outline: "none",
      padding: "",
      boxShadow: "",
      maxWidth: "250px",
      paddingTop: "10px",
      height: "350px",
      transform: "translate(-50%, -60%)",
      zIndex: "3000",
    },
  };

  return (
    <html lang="en">
      <body>
        <div className="h-screen  ">
          {/****  Nav bar started****/}
          <div className="sticky top-0 flex border-b-[1px] border-gray-200 h-[60px]  ">
            {/**** largescreen icon with nav ****/}
            {!navVisible ? (
              <div className=" hidden  nav-img-icon lg: bg-white  border-r-[1px] border-gray-200 lg:flex items-center   min-w-[240px] lg:min-w-[240px] pl-6 pr-2 justify-between ">
                <div className="">
                  {" "}
                  <Image
                    src={logo}
                    alt="logo"
                    className=" h-[28px] w-[130px] lg:inline-block lg:justify-self-start"
                    onClick={() => window.location.replace("/")}
                  />
                </div>

                <div>
                  <div onClick={navication} className="">
                    <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                      size={18}
                      duration={0.5}
                      color="gray"
                      distance="lg"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" hidden lg:block min-w-[72px !important] text-center z-[1] border-r-[1px] bg-white border-gray-200 py-3 px-3 ">
                <span onClick={navication} style={{ borderRadius: "50%" }}>
                  <Twirl
                    toggled={iconOpen}
                    toggle={setIconOpen}
                    size={18}
                    color="gray"
                  />
                </span>
              </div>
            )}
            {/**** Small screen ****/}
            {!navMenuvisible ? (
              <div className="  lg:hidden min-w-[72px] text-center  border-r-[1px] bg-white border-gray-200 p-5 ">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-[#696767] text-lg"
                  onClick={MenuNavication}
                />
              </div>
            ) : (
              <div className="">
                <div className="  bg-white  border-r-[1px] border-gray-200  items-center flex-col  min-w-[240px] h-screen   justify-between lg:hidden ">
                  <div className="flex h-[65px] justify-between items-center border-[1px] border-b-gray-200 px-6 ">
                    <Image
                      src={logo}
                      alt="logo"
                      className=" h-[30px] w-[140px]  lg:inline"
                      onClick={() => window.location.replace("/")}
                    />
                    <span onClick={MenuNavication}>
                      <Twirl
                        toggled={iconOpen}
                        toggle={setIconOpen}
                        size={18}
                        color="gray"
                      />
                    </span>
                  </div>

                  <div className="mt-4 border-b-[1px] border-dashed border-gray-200  justify-between bg-white nav-transition">
                    <NavListDetails
                      onListClick={handleListClick}
                      parent={parent}
                      children={ischildren}
                      activeCategory={selectedListDetails?.category || null}
                      activeSubcategory={
                        selectedListDetails?.subcategory || null
                      }
                      showIconsOnly={false}
                    />{" "}
                  </div>
                </div>
              </div>
            )}
            {/****  Nav bar end****/}
            {/* search */}

            <div className="bg-white  w-full  flex items-center justify-between  px-2 md:px-6">
              <div className="flex items-center gap-2  md:gap-5">
                <LuSearch
                  className=" hidden text-[#7987a1;] md:inline-block"
                  style={{ height: "20px", width: "20px" }}
                />

                <input
                  type="text"
                  placeholder="Search here..."
                  className="outline-none hidden  md:inline-block  md:w-[400px]"
                  onKeyPress={handleKeyPress}
                />
              </div>

              <div className="flex items-center gap-2  md:gap-5 pr-1">
                <FiBell
                  className={`text-[20px] hover:text-[#029e9d] ${
                    bellClick ? "text-[#029e9d]" : ""
                  }`}
                  onClick={iconClick}
                  style={{ cursor: "pointer" }}
                />{" "}
                <Blink />
                <Avatar
                  alt={`${userData.email}`}
                  src={userData.file_name}
                  style={{ height: "30px", width: "30px", cursor: "pointer" }}
                  onClick={editForm}
                />
              </div>
            </div>
          </div>
          {/****  Large screen NavDetails with travelin menubar icon  ,   large screen hovering time of icon list navdetails with xmark icon   *****/}
          <div className="lg:flex ">
            {!navVisible ? (
              <div className=" hidden lg: bg-white lg:flex-col h-[93vh] border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[240px]    lg:min-w-[240px] ">
                <div className="mt-4 border-b-[1px] border-dashed border-gray-200  justify-between">
                  {/* <Navlist/> */}

                  <NavListDetails
                    onListClick={handleListClick}
                    parent={parent}
                    children={ischildren}
                    activeCategory={selectedListDetails?.category || null}
                    activeSubcategory={selectedListDetails?.subcategory || null}
                    showIconsOnly={false}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <div
                  className=" hidden lg:block bg-white h-[93vh] overflow-y-hidden border-gray-200 md:relative md:inline-block border-r-[1px] min-w-[72px] "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDetailsVisible ? (
                    <div
                      className=" sm:hidden lg: bg-white  lg:flex-col h-[93vh]  smooth-action  border-r-[1px] border-gray-200 lg:relative lg:inline-block min-w-[230px] lg:min-w-[270px]  lg:pr-11 xl:pr-10 2xl:pr-0   "
                      style={{
                        transition: "all 5s ease",
                      }}
                    >
                      <NavListDetails
                        onListClick={handleListClick}
                        parent={parent}
                        children={ischildren}
                        activeCategory={selectedListDetails?.category || null}
                        activeSubcategory={
                          selectedListDetails?.subcategory || null
                        }
                        showIconsOnly={false}
                      />{" "}
                    </div>
                  ) : (
                    ""
                  )}

                  {/**** Icon list only with top xmark icon*****/}
                  <div className="pt-[25px] border-b-[1px] border-dashed border-gray-200 nav-duration">
                    <NavListDetails
                      onListClick={handleListClick}
                      parent={parent}
                      children={ischildren}
                      activeCategory={selectedListDetails?.category || null}
                      activeSubcategory={
                        selectedListDetails?.subcategory || null
                      }
                      showIconsOnly={true}
                    />
                  </div>
                </div>
              </div>
            )}
            {/* children */}

            <div className="content shadow-inner flex flex-col bg-[#f9fafb]  shadow-gray-200 overflow-scroll w-full h-[93vh] md:justify-between overflow-x-hidden ">
              <main>{children}</main>

              <div className=" w-full flex flex-col font-sans font-normal  text-sm items-center border-t-[1px] border-gray-200 md:flex-row md: justify-between bg-[#f9fafb] py-[12px] px-4 lg:px-6">
                <span className="text-[12.25px] text-[#7987a1] footer-container  ">
                  Copyright <span className="px-[1px]">&copy;</span>2022{" "}
                  <span className="text-[#029e9d] footer-container  ">
                    Travelin.
                  </span>
                </span>

                <div className="text-[12.25px] text-[#7987a1] flex gap-2 footer-container">
                  <div>Powered By </div>

                  <div>
                    <FaRegHeart className="text-[14px] mt-[2px] text-[#6f79e4]" />
                  </div>

                  <div>Converse Data Solutions</div>
                </div>
              </div>
              {imgClick && (
                <Modal
                  isOpen={imgClick}
                  onAfterOpen={() => {
                    document.body.style.overflow = "hidden";
                  }}
                  onRequestClose={() => setImgClick(false)}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div
                    className=" absolute right-[10px]  z-50  rounded-lg profile-card"
                    style={{
                      boxShadow: "0 5px 10px 0 rgba(183, 192, 206, 0.20)",
                    }}
                  >
                    {" "}
                    <UserDetailsForm />
                  </div>
                </Modal>
              )}

              {bellClick && (
                <div
                  className="z-50 absolute right-[55px] mt-[2px]  rounded-lg "
                  style={{
                    boxShadow: "0 5px 10px 0 rgba(183, 192, 206, 0.20)",
                  }}
                  ref={ref}
                >
                  <div>
                    <BellIconDetails />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
