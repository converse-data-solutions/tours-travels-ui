"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import PaginationBar from "../../components/CommonComponents/PaginationBar";
import ShowEntriesDropdown from "../../components/CommonComponents/EntriesDropDown";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";
import AlternateImg from "../../../public/alternative.png";
import SelectInput from "@/app/components/CommonComponents/SelectedInput";
import { LuPenSquare } from "react-icons/lu";
import { FiDelete } from "react-icons/fi";
import PackageSearchBar from "@/app/components/CommonComponents/PackageSearchBar";

interface UserData {
  id: number;
  title: string;
  start_date: string;
  file_name: any;
  description: string;
  no_of_person: number;
  days_and_night: string;
  country: string;
  state: string;
  price: string | number;
  published: number | boolean;
  offer: string;
  category: string;
}
const AllPackageLists = () => {
  const [entries, setEntries] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Category");

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
        setData(updatedData);

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

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / entries);


  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: string }>,
  ) => {
    setCategory(event.target.value);
  };

  return (
    <div className="px-4 lg:pl-6 pr-5">
      <div className=" mt-[13px] md:flex justify-between   ">
        <div className="flex-row text-center  2xl:mr">
          <h2 className="text-gray-500 md:mt-5 lg:mt-6 text-[14px]">
            <span className="text-[#029e9d] hover:text-[#6f42c1] text-[14px]">
              Dashboard
            </span>
            <span className="px-2 text-[14px]"> /</span>
            <span className="text-[#7987a1]"> Packages</span>
          </h2>
        </div>
        <div className="flex-row mt-3 text-center ">
          <button
            className="bg-[#029e9d] text-white py-[13px]   pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={handleInput}
          >
            <div className="flex ">
              <div>
                <LuPlus className=" text-white text-[24px] " />{" "}
              </div>{" "}
              <div className="pl-1 mt-[1px]">Add Packages</div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className="w-[100%] bg-white pl-4 pt-6 pb-3 mt-[14px] rounded-[10px] shadow-sm  lg:flex lg:gap-6 pr-5 ">
          {" "}
          <div className="items-center lg:text-start w-[100%]  ">
            <h5 className="flex    w-full py-4 px-2 text-[16px]   lg:text-[16px] md:py-0 font-semibold  text-[#232323]   xl:pt-3">
              {" "}
              Packages Lists{" "}
            </h5>
          </div>
          <div className="w-[100%] lg:w-[140%]  ">
            <PackageSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              placeholder="Search by slider title"
            />
          </div>
          <div className=" w-[100%] lg:w-[65%] lg:relative lg:top-[2px] z-20 ">
            <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
          </div>
          <div className="w-[100%] relative top-[-7px] text-[16px] z-20">
            {" "}
            <SelectInput
              label=""
              name="default_language"
              value={category}
              options={["Category", "One", "Two", "Three"]}
              onChange={handleCategoryChange}
              disabledValue="Category"
            />
          </div>
        </div>
      </div>

      <div className="  mt-4 px-5 py-7 border-[1px] border-gray-100 rounded-[10px] shadow-sm  bg-white ">
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
                <th>CATEGORY</th>
                <th>OFFER</th>
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

                    <td>{list.title}</td>

                    <td>{list.country}</td>
                    <td>{list.state}</td>
                    <td
                      dangerouslySetInnerHTML={{ __html: list.description }}
                    ></td>
                    <td>${list.price}</td>
                    <td>{list.no_of_person}</td>
                    <td>{list.days_and_night}</td>
                    <td>{list.category}</td>
                    <td>
                      {list.offer !== "No Offer"
                        ? `${list.offer}%`
                        : "No Offer"}
                    </td>

                    <td className="">
                      {" "}
                      <label
                        className={`switch ${
                          list.published ? "published-on" : "published-off"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(list.published)}
                          onChange={() => handleTogglePublished(list.id)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>

                    <td>
                      <span className="flex gap-2 text-[#029e9d] justify-center">
                        <Link href={"/admin/package/addpackage/" + list.id}>
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

      <div className="mb-8  flex justify-center lg:justify-start flex-row">
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
