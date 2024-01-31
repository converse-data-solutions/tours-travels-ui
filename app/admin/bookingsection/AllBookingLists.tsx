"use client";
import { useState, useEffect } from "react";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import PaginationBar from "../../components/CommonComponents/PaginationBar";
import ShowEntriesDropdown from "../../components/CommonComponents/EntriesDropDown";
import { format } from "date-fns";
import PackageSearchBar from "@/app/components/CommonComponents/PackageSearchBar";
import SelectInput from "@/app/components/CommonComponents/SelectedInput";
import { FiArrowLeft, FiDelete, FiEye } from "react-icons/fi";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Link from "next/link";


interface BookingData {
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  gender: string;
  date_of_birth: string;
  country: string;
  state: string;
  address_1: string;
  address_2: string;
  package_id: number;
  user_id: number;
  terms_and_conditions: number;
}
const AllBookingLists = () => {
  const [entries, setEntries] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<BookingData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewFormVisible, setViewFormVisible] = useState(false);
  const [detailedBookingData, setDetailedBookingData] = useState<BookingData>();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/booking/get/alllist`, {
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

  const handleViewAction = (id: number) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/booking/${id}`, {
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
        const detailedBookingData = responseData.data;
        console.log(detailedBookingData);

        setDetailedBookingData(detailedBookingData);
      })
      .catch((error) => {
        console.error("Error fetching detailed booking data:", error);
      });

    setViewFormVisible(true);
  };

  function handleDeleteAction(id: number) {
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
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/booking/${id}`, {
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

  const filteredData = data.filter(
    (item) =>
      item.email &&
      item.email.toLowerCase().startsWith(searchQuery.toLowerCase()),
  );
  console.log("data", filteredData);
  console.log("detailedData", detailedBookingData);

  const totalPages = Math.ceil(filteredData.length / entries);

  return (
    <div className="px-4 lg:px-6">
      <div className=" pt-3 md:flex justify-between   ">
        <div className="flex-row text-center  ">
          <h2 className="text-[#7987a1] md:mt-5 text-[14px]">
            <span className="text-[#029e9d] hover:text-[#6f42c1] text-[14px]">
              Dashboard
            </span>
            &nbsp; / &nbsp; Booking Lists

          </h2>
        </div>
        <div className="flex-row mt-3 text-center">
          <button className="bg-[#029e9d]  text-white py-[13px]   pl-[18px] pr-[16px] rounded-lg mr-[1px] hover:bg-yellow-400 transition duration-300">
            <div className="flex">
              <div className="text-[24px] pr-1 ">
                <FiArrowLeft />
              </div>

              <div>
                <Link href={"/destination-list"}>Back To List</Link>
              </div>

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
              Booking Schedule Lists{" "}
            </h5>
          </div>
          <div className="w-[100%] lg:w-[140%]  ">
            <PackageSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              placeholder="Search by email"
            />
          </div>
          <div className=" w-[100%] lg:w-[65%] lg:relative lg:top-[2px] z-20 ">
            <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
          </div>
          <div className="w-[100%] relative top-[-7px] text-[16px] z-20">
            {" "}
            <SelectInput
              label=""
              name="category"
              value={category || "Category"}
              options={["Category", "One", "Two", "Three"]}
              onChange={(e) => setCategory(e.target.value)}

              disabledValue="Show Entries"
            />
          </div>
        </div>
      </div>

      <div className="  mt-4 px-5 py-9 border-[1px] border-gray-100 rounded-[10px] shadow-sm  bg-white ">
        <TableContainer
          className="Table-container"
          sx={{ maxHeight: "450px", width: "100%" }}
        >
          <Table className="gap-6 table">
            <TableHead className="text-gray-800 ">
              <TableRow className="table-head ">
                <th>ID</th>
                <th>TITLE</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>MOBILE NUMBER</th>
                <th>GENDER</th>
                <th>DOB</th>
                <th>COUNTRY</th>
                <th>STATE</th>
                <th>ADDRESS-1</th>
                <th>ADDRESS-2</th>
                <th>PACKAGEID</th>
                <th>USERID</th>
                <th>TERMS AND CONDITIONS</th>
                <th>ACTION</th>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice((currentPage - 1) * entries, currentPage * entries)
                .map((list) => (
                  <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{list.title}</td>
                    <td>{list.first_name}</td>
                    <td>{list.last_name}</td>
                    <td>{list.email}</td>
                    <td>{list.mobile_number}</td>
                    <td>{list.gender}</td>
                    <td>
                      {list.date_of_birth &&
                        format(new Date(list.date_of_birth), "dd/MM/yyyy")}
                    </td>
                    <td>{list.country}</td>
                    <td>{list.state}</td>
                    <td>{list.address_1}</td>
                    <td>{list.address_2}</td>
                    <td>{list.package_id}</td>
                    <td>{list.user_id}</td>
                    <td>
                      {list.terms_and_conditions === 1
                        ? "Accepted"
                        : "Not Accepted"}
                    </td>
                    <td>
                      <div className="flex gap-3 py-1">
                        <FiEye
                          onClick={() => handleViewAction(list.id)}
                          className="flex  text-[#029e9d] mt-1  text-[24px] hover:text-[#6f42c1]"
                        />
                        <span className="flex gap-2 text-[#029e9d] justify-center py-1 ">
                          <FiDelete
                            onClick={() => handleDeleteAction(list.id)}
                            className="text-[25px] font-bold hover:text-[#6f42c1]"
                          />

                        </span>{" "}
                      </div>
                    </td>
                  </tr>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {viewFormVisible && (
        <Modal
          open={viewFormVisible}
          onClose={() => setViewFormVisible(false)}
          aria-labelledby=""
          aria-describedby=""
          closeAfterTransition
          BackdropComponent={(props) => (
            <Backdrop {...props} style={{ borderRadius: "0px" }} />
          )}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={viewFormVisible}>
            <div className="flex flex-col">
              <div
                className="z-50 absolute top-[20%] mx-[35%] px-5   flex-col lg:w-4/12 h-auto  booking-card bg-white  py-4 rounded-xl shadow-md flex justify-center items-center"
                onClick={() => setViewFormVisible(true)}
                style={{ borderRadius: "20px !important" }}
              >
                <div className="text-[16px] text-[#232323] font-bold pb-3 pt-5  border-b-gray-200 border-[1px] w-[106%]  text-center border-white">
                  Booking Details
                </div>


                <table className="w-full ">
                  <tbody className="">
                    {detailedBookingData?.title && (
                      <tr className="">
                        <td className="w-[50%] ">Title</td>
                        <td>{detailedBookingData?.title}</td>
                      </tr>
                    )}

                    {detailedBookingData?.first_name && (
                      <tr>
                        <td>First Name</td>
                        <td>{detailedBookingData?.first_name}</td>
                      </tr>
                    )}
                    {detailedBookingData?.last_name && (
                      <tr>
                        <td>LastName</td>
                        <td>{detailedBookingData?.last_name}</td>
                      </tr>
                    )}
                    {detailedBookingData?.email && (
                      <tr>
                        <td>Email</td>
                        <td>{detailedBookingData?.email}</td>
                      </tr>
                    )}
                    {detailedBookingData?.mobile_number && (
                      <tr>
                        <td>MobileNumber</td>
                        <td>{detailedBookingData?.mobile_number}</td>
                      </tr>
                    )}
                    {detailedBookingData?.gender && (
                      <tr>
                        <td>Gender</td>
                        <td>{detailedBookingData?.gender}</td>
                      </tr>
                    )}
                    {detailedBookingData?.date_of_birth && (
                      <tr>
                        <td>DOB</td>
                        <td>
                          {detailedBookingData?.date_of_birth &&
                            format(
                              new Date(detailedBookingData.date_of_birth),
                              "dd/MM/yyyy",
                            )}
                        </td>
                      </tr>
                    )}
                    {detailedBookingData?.country && (
                      <tr>
                        <td>Country</td>
                        <td>{detailedBookingData?.country}</td>
                      </tr>
                    )}
                    {detailedBookingData?.state && (
                      <tr>
                        <td>State</td>
                        <td>{detailedBookingData?.state}</td>
                      </tr>
                    )}
                    {detailedBookingData?.address_1 && (
                      <tr>
                        <td>Address 1</td>
                        <td>{detailedBookingData?.address_1}</td>
                      </tr>
                    )}
                    {detailedBookingData?.address_2 && (
                      <tr>
                        <td>Address 2</td>
                        <td>{detailedBookingData?.address_2}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Fade>
        </Modal>
      )}

      <div className="mb-8 flex justify-center lg:justify-start flex-row">
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default AllBookingLists;
