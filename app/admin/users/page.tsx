"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableSearchBar from "../../components/CommonComponents/TableSearchBox";
import PaginationBar from "../../components/CommonComponents/PaginationBar";
import ShowEntriesDropdown from "../../components/CommonComponents/EntriesDropDown";
import Image from "next/image";
import AlternateImg from "../../../public/alternative.png";
import { FiPlus } from "react-icons/fi";
import { CgMathPlus } from "react-icons/cg";
import { LuPlus } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";
import { FiDelete } from "react-icons/fi";

interface UserData {
  id: number;
  email: string;
  password: string;
  image: any;
  mobile_number: string | number;
  role: any;
  role_name: string;
  role_id: number;
  first_name: string;
  last_name: string;
  country: string;
  gender: string;
  address: string;
  social_media_link: string;
  user_status: any;
  file_name: string;
  default_currency: string | any;
  default_language: string;
}
const Userlistpage = () => {
  const [entries, setEntries] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          const userDataArray = responseData.data;
          setData(userDataArray);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [searchQuery]);

  function handleDeleteAction(userid: number) {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken === null) {
        const userConfirmed = window.confirm(
          "You are not signed in to your account. Do you want to sign in your account?",
        );
        if (userConfirmed) {
          window.location.replace("/signin");
        } else {
          return;
        }
      } else {
        if (window.confirm("Are you sure you want to delete this user?")) {
          const token = localStorage.getItem("accessToken");
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${userid}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then(async (response) => {
              if (response.status === 200) {
                const usertoken = await response.json();
                setData(data.filter((user) => user.id !== user.id));

                alert(`The data of userid ${userid}  successfully deleted.`);
                window.location.reload();
              } else {
                console.error(`Failed to delete user with ID ${userid}.`);
              }
            })
            .catch((error) => {
              console.error("Error deleting user data:", error);
            });
        }
      }
    }
  }
  function handleInput(event: any) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("accessToken") === null) {
        const userConfirmed = window.confirm(
          "You are not signed in to your account. Do you want to sign in your account?",
        );
        if (userConfirmed) {
          window.location.replace("/signin");
        } else {
          return;
        }
      } else {
        window.location.replace("/admin/users/adduser");
      }
    }
  }
  function handleEditAction(id: number) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("accessToken") === null) {
        const userConfirmed = window.confirm(
          "You are not signed in to your account. Do you want to sign in your account?",
        );
        if (userConfirmed) {
          window.location.replace("/signin");
        } else {
          window.location.reload();
        }
      } else {
        window.location.replace("/admin/users/adduser/" + id);
      }
    }
  }
  const filteredData = data.filter((item) =>
    item.email.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / entries);

  return (
    <div className="px-4 lg:px-6">
      <div className=" pt-6 md:flex justify-between mb-[15px]  ">
        <div className="flex-row text-center  ">
          <h2 className="text-gray-500 md:mt-5 lg:mt-4">
            <span className="text-[#029e9d] hover:text-[#6f42c1]">
              Dashboard
            </span>
            &nbsp; <span className="text-[#7987a1]">/</span>
            &nbsp;<span className="text-[#7987a1]"> User Mangement</span>
          </h2>
        </div>
        <div className="flex-row mt-3 lg:mt-0  text-center">
          <button
            className="bg-[#029e9d]  text-white py-[12px]  px-[18px] rounded-lg  hover:bg-yellow-400 "
            onClick={handleInput}
          >
            <div className="flex ">
              <div>
                <LuPlus className=" text-white text-[24px] " />{" "}
              </div>{" "}
              <div className="pl-1 mt-[1px]">Add User</div>
            </div>
          </button>
        </div>
      </div>

      <div className=" bg-white px-4 py-4 rounded-[10px] shadow-sm lg:flex lg:flex-row lg:justify-between ">
        <div className="pt-6  ">
          <h5 className="flex justify-center md:justify-start   w-full px-4  text-[16px] lg:w-[190px] xl:w-full lg:text-[16px]  font-semibold  text-[#232323]   ">
            {" "}
            User Management Lists{" "}
          </h5>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 lg:w-9/12 text-[16px] pt-[9px] z-30">
          <TableSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="search by user email"
          />
          <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
        </div>
      </div>

      <div className="  mt-4 px-5 py-5 border-[1px] border-gray-100 rounded-[10px] shadow-sm  bg-white ">
        <TableContainer
          className="Table-container"
          sx={{ maxHeight: "450px", width: "100%" }}
        >
          <Table className="gap-6 table">
            <TableHead className="text-[#232323]  font-bold">
              <TableRow className="table-head">
                <th className="">ID</th>
                <th>IMAGE</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
                <th>ROLE</th>
                <th>F.NAME</th>
                <th>L.NAME</th>
                <th>COUNTRY</th>
                <th>GENDER</th>
                <th>ADDRESS</th>
                <th>SOCIALMEDIA </th>
                <th>STATUS</th>
                <th>CURRENCY</th>
                <th>LANGUAGE</th>
                <th>ACTIONS</th>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice((currentPage - 1) * entries, currentPage * entries)
                .map((list) => (
                  <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>
                      {list.file_name === null ||
                      list.file_name === undefined ? (
                        <Image
                          src={AlternateImg}
                          className="rounded-md h-10 w-10"
                          alt={"img"}
                          height={30}
                          width={50}
                        />
                      ) : (
                        <Image
                          src={list.file_name}
                          className="rounded-md h-10 w-10"
                          alt="img"
                          height={30}
                          width={50}
                        />
                      )}
                    </td>
                    <td>{list.email}</td>
                    <td>{list.mobile_number}</td>
                    <td>{list.role_name}</td>
                    <td>{list.first_name}</td>
                    <td>{list.last_name}</td>
                    <td>{list.country}</td>
                    <td>{list.gender}</td>
                    <td>{list.address}</td>
                    <td>{list.social_media_link}</td>
                    <td>
                      {list.user_status[0] === 0x01 ? "Inactive" : "Active"}
                    </td>

                    <td>{list.default_currency}</td>
                    <td>{list.default_language}</td>
                    <td>
                      <span className="flex gap-2 text-[#029e9d] justify-center">
                        <Link href={"/admin/users/adduser/" + list.id}>
                          <LuPenSquare
                            className="text-[24px] hover:text-[#6f42c1]"
                            onClick={() => handleEditAction(list.id)}
                          />
                        </Link>
                        <FiDelete
                          onClick={() => handleDeleteAction(list.id)}
                          className="text-[25px] font-bold hover:text-[#6f42c1]"
                        />
                      </span>{" "}
                    </td>
                  </tr>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="mb-[50px] flex justify-center lg:justify-start flex-row">
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default Userlistpage;
