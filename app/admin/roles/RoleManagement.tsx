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
import TableSearchBar from "@/app/components/TableSearchBox";
import PaginationBar from "@/app/components/PaginationBar";
import ShowEntriesDropdown from "@/app/components/EntriesDropDown";
import Image from "next/image";

import AlternateImg from "../../../public/alternative.png";

interface UserData {
  id: number;
  name: string;
  contact_no: string;
  destination: string;
  city: string;
  booking_date: string;
  no_of_person: number;
  packages: string;
  published: string;
}
const UserRoleManagement = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/get`, {
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
        console.log(userDataArray);

        setData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [searchQuery]);

  const handleTogglePublished = async (id: number) => {
    try {
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
        const token = localStorage.getItem("accessToken");

        if (!token) {
          return;
        }

        const updatedData = data.map((item) =>
          item.id === id
            ? { ...item, published: item.published ? 0 : 1 }
            : item,
        );

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              published: updatedData.find((item) => item.id === id)?.published,
            }),
          },
        );

        if (!response.ok) {
          console.error(
            `Failed to update published status for package with ID ${id}.`,
          );
        }
      }
    } catch (error) {
      console.error("Error toggling published status:", error);
    }
  };

  function handleDeleteAction(id: number) {
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
      if (window.confirm("Are you sure you want to delete this user?")) {
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
          const token = localStorage.getItem("accessToken");
          if (!token) {
            return;
          }
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/${id}`, {
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

                alert(`The data of userid ${id}  successfully deleted.`);
                window.location.reload();
              } else {
                console.error(`Failed to delete user with ID ${id}.`);
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
    window.location.replace("/admin/package/addpackage");
  }

  function handleEditAction(id: number) {
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
      window.location.replace(`/admin/package/addpackage/${id}`);
    }
  }

  const totalPages = Math.ceil(data.length / entries);

  return (
    <div className="px-4 lg:px-6">
      <div className=" pt-6 md:flex justify-between   ">
        <div className="flex-row text-center  2xl:mr">
          <h2 className="text-gray-500 md:mt-5">
            <span className="text-[rgb(2,158,157)]">Dashboard</span>&nbsp;{" "}
            <span className="text-[rgb(2,158,157)]">&nbsp;/ Setting</span> /
            &nbsp;Role Management
          </h2>
        </div>
        <div className="flex-row mt-3 text-center">
          <button
            className="bg-[hsl(180,82%,35%)]  text-white py-3.5   px-6 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={handleInput}
          >
            <FontAwesomeIcon icon={faPlus} className="text-xl" /> Back To List
          </button>
        </div>
      </div>
      <br></br>

      <div className=" bg-white px-4 py-4 rounded-[10px] shadow-sm lg:flex lg:flex-row lg:justify-between xl:py-[22px]">
        <div className="">
          <h5 className="flex justify-center md:justify-start   w-full p-4  text-[16px] lg:w-[190px] xl:w-full lg:text-[16px] md:py-0 font-semibold  text-[#424040]   xl:pt-3">
            {" "}
            All Role Lists{" "}
          </h5>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 lg:w-2/3 ">
          <TableSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search by role title"
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
            <TableHead className="text-gray-800 ">
              <TableRow className="table-head">
                <th>ID</th>
                <th>ROLE NAME</th>
                <th>PERMISSION</th>
                <th>ACTION</th>
              </TableRow>
            </TableHead>
            <TableBody>
              <tr>
                <td></td>
              </tr>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="my-8 flex justify-center lg:justify-start flex-row">
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default UserRoleManagement;
