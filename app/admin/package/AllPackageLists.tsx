'use client'
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
import apiConfiguration from "@/app/config";

interface UserData {
  id: number;
  title: string;
  start_date: string;
  file_name: any;
  description: string;
  no_of_person: number;
  days_and_night: string;
  country: string;
  state:string;
  price: string | number;
  published: number;
}
 const AllPackageLists = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // const token = localStorage.getItem("accessToken");

    fetch(`${apiConfiguration.externalservice.backendUrl}/package/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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

  function handleDeleteAction(id: number) {
    // if (localStorage.getItem("accessToken") === null) {
    //   const userConfirmed = window.confirm(
    //     "You are not signed in to your account. Do you want to sign in your account?"
    //   );
    //   if (userConfirmed) {
    //     window.location.replace("/signin");
    //   } else {
    //     return;
    //   }
    // } else {
    if (window.confirm("Are you sure you want to delete this user?")) {
      if (localStorage.getItem("accessToken") === null) {
        const userConfirmed = window.confirm(
          "You are not signed in to your account. Do you want to sign in your account?"
        );
        if (userConfirmed) {
          window.location.replace("/signin");
        } else {
          return;
        }
      } else {
      // const token = localStorage.getItem("accessToken");
      fetch(`${apiConfiguration.externalservice.backendUrl}/package/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
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
  function handleInput(event: any) {
    window.location.replace("/addpackage");
  }

  function handleEditAction(id: number) {
    if (localStorage.getItem("accessToken") === null) {
      const userConfirmed = window.confirm(
        "You are not signed in to your account. Do you want to sign in your account?"
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

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entries);

  return (
    <div className="px-4 lg:px-6">
      <div className=" pt-6 md:flex justify-between   ">
        <div className="flex-row text-center  2xl:mr">
          <h2 className="text-gray-500 md:mt-5">
            <span className="text-[rgb(2,158,157)]">Dashboard</span>&nbsp; /
            &nbsp; Package
          </h2>
        </div>
        <div className="flex-row mt-3 text-center">
          <button
            className="bg-[hsl(180,82%,35%)]  text-white py-3.5   px-6 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={handleInput}
          >
            <FontAwesomeIcon icon={faPlus} className="text-xl" /> Add Packages
          </button>
        </div>
      </div>
      <br></br>

      <div className=" bg-white px-4 py-4 rounded-[10px] shadow-sm lg:flex lg:flex-row lg:justify-between xl:py-[22px]">
        <div className="">
          <h5 className="flex justify-center md:justify-start   w-full p-4  text-[16px] lg:w-[190px] xl:w-full lg:text-[16px] md:py-0 font-semibold  text-[#424040]   xl:pt-3">
            {" "}
            Package Lists{" "}
          </h5>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 lg:w-2/3 ">
          <TableSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search by slider title"
          />

          <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
          <div className=" ">
            <select className="border-[1px] border-gray-200  px-4 py-3 mb-2 rounded-lg outline-none w-full md:w-56 bg-white text-base">
              <option selected>Category</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
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
                <th>START DATE</th>
                <th>IMAGE</th>
                <th>TITLE</th>
                <th>COUNTRY</th>
                <th>STATE</th>
                <th>DESCRIPTION</th>
                <th>PRICE</th>
                <th>NO.OF PERSON</th>
                <th>DAY & NIGHT</th>
                <th>PUBLISHED</th>
                <th>ACTION </th>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice((currentPage - 1) * entries, currentPage * entries)
                .map((list) => (
                  <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{list.start_date}</td>
                    <td>
                    <Image
                         src={list.file_name}
                         className="h-20 w-10"
                        alt={`img`}
                        height={30}
                        width={50}
                      />
                    </td>

                    <td>{list.title}</td>

                    <td>{list.country}</td>
                    <td>{list.id}</td>
                    <td
                      dangerouslySetInnerHTML={{ __html: list.description }}
                    ></td>
                    <td>{list.price}</td>
                    <td>{list.no_of_person}</td>
                    <td>{list.days_and_night}</td>
                    <td>
                      {" "}
                      <label
                        className={`switch ${
                          list.published ? "published-on" : "published-off"
                        }`}
                      >
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                      </label>
                    </td>

                    <td>
                      <span className="flex gap-2 text-[#029e9d] justify-center">
                        <Link href={"/admin/package/addpackage/" + list.id}>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="text-xl"
                            onClick={() => handleEditAction(list.id)}
                          />
                        </Link>

                        <BackspaceOutlinedIcon
                          onClick={() => handleDeleteAction(list.id)}
                        />
                      </span>{" "}
                    </td>
                  </tr>
                ))}
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
export default AllPackageLists;
