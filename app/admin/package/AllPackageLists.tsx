"use client";
import { useState, useEffect, useRef } from "react";
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
import { FiDelete, FiEye } from "react-icons/fi";
import PackageSearchBar from "@/app/components/CommonComponents/PackageSearchBar";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaRegFile } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import Papa from "papaparse";
import {
  FaArrowRight,
  
} from "react-icons/fa6";
import * as XLSX from "xlsx";


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
  const [viewFormVisible, setViewFormVisible] = useState(false);
  const [detailedPackageDate, setDetailedPackageDate] = useState<UserData>();
  let [file, setFile] = useState<File | string>();
  const [parsedCsvData, setParsedCsvData] = useState<any[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [excelFile, setExcelFile] = useState<File | string>();
  const [excelData, setExcelData] = useState<any[]>([]);
  const [uploadExcelError, setUploadExcelError] = useState<string | null>(null);
  const [successExcelMessage, setSuccessExcelMessage] = useState<string | null>(null);



  const pdfExportComponent = useRef(null);
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
          "You are not signed in to your account. Do you want to sign in your account?"
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
          item.id === id ? { ...item, published: item.published ? 0 : 1 } : item
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
          }
        );

        if (!response.ok) {
          console.error(
            `Failed to update published status for package with ID ${id}.`
          );
        }
      }
    } catch (error) {
      console.error("Error toggling published status:", error);
    }
  };
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setUploadError(" ");

    Papa.parse(selectedFile, {
      skipEmptyLines: true,
      header: true,
      complete: function (results) {

        setParsedCsvData(results.data);
      },
    });
  };

  const handleExcelFileChange = (event: any) => {
    setUploadExcelError(" ");

    const selectedExcelFile = event.target.files[0];
    setExcelFile(selectedExcelFile);
    if (selectedExcelFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          const jsonData = XLSX.utils.sheet_to_json(sheet);
          setExcelData(jsonData);

        } catch (error) {
          console.error("Error reading Excel file:", error);
        }
      };

      reader.readAsArrayBuffer(selectedExcelFile);
    }
  };

  const handleExcelSubmit = async (event: any) => {
    event.preventDefault();
    if(!excelFile){
      setUploadExcelError("Select a file to import ");
      return;
    }

  
    try {
      const formData = new FormData();

      if (file instanceof File) {
        formData.append("file", file);

      }
      formData.append("excelData", JSON.stringify(excelData));


      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/importcsv`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(excelData),
        }
      );
      if (response.status == 200) {
        const successResponse=await response.json();
        window.location.reload();
        setSuccessExcelMessage(successResponse.message || "file submitted successfully")
        setUploadExcelError(null)

      } else {
        const errorResponse = await response.json();
        console.error("File upload failed:", errorResponse);
        setUploadExcelError(errorResponse.message || "File upload failed");

      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const generateExcel = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/excelxlsx/xlsx?title=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch CSV. Status: ${response.status}`);
      }

      const excelBlob = await response.blob();
      const csvUrl = URL.createObjectURL(excelBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = csvUrl;
      downloadLink.download = "exported-packagedata.xlsx";

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error toggling published status:", error);
    }
  };

  const handleCsvSubmit = async (event: any) => {
    event.preventDefault();
    if (!file) {
      setUploadError("Please select a file to import.");
      return;
    }

    try {
      const formData = new FormData();

      if (file instanceof File) {
        formData.append("file", file);
      }
      formData.append("csvData", JSON.stringify(parsedCsvData));

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/importcsv`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(parsedCsvData),
        }
      );
      if (response.status === 200) {
        setSuccessMessage("CSV file imported successfully");
        setUploadError(null);

        window.location.reload();
      } else {
        const errorResponse = await response.json();
        console.error("File upload failed:", errorResponse);
        setUploadError(errorResponse.message || "File upload failed");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  function handleDeleteAction(id: number) {
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

  const handleViewAction = (id: number) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/${id}`, {
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
        const detailedPackageDate = responseData.data;

        setDetailedPackageDate(detailedPackageDate);
      })
      .catch((error) => {
        console.error("Error fetching detailed booking data:", error);
      });

    setViewFormVisible(true);
  };
  const generatePdf = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/index/packagepdf?title=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch PDF. Status: ${response.status}`);
      }

      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);

      window.open(pdfUrl, "_blank");
    } catch (error) {
      console.error("Error generating or opening PDF:", error);
    }
  };

  const generateCSV = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/excel/csv?title=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch CSV. Status: ${response.status}`);
      }

      const csvBlob = await response.blob();
      const csvUrl = URL.createObjectURL(csvBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = csvUrl;
      downloadLink.download = "exported-data.csv";

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error generating or opening CSV:", error);
    }
  };

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


  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [entries, filteredData, currentPage, totalPages]);

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
        <div
          className="w-[100%] bg-white pl-4 pt-6 pb-3 mt-[14px] rounded-[10px]   lg:flex lg:gap-6 pr-5 "
          style={{ boxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.20)" }}
        >
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
          <div className=" w-[100%] lg:w-[65%] lg:relative lg:top-[2px]  ">
            <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
          </div>
          <div className="w-[100%] relative top-[-7px] text-[16px] ">
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
              <TableRow className="table-head ">
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
                        className={`switch  ${
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
                        <FiEye
                          onClick={() => handleViewAction(list.id)}
                          className="flex  text-[#029e9d] mt-[1px]  text-[24px] hover:text-[#6f42c1]"
                        />

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
                className="z-50 absolute top-[15%] mx-[35%] px-5   flex-col lg:w-4/12 h-auto  booking-card2  bg-white  py-4 rounded-xl shadow-md flex justify-center items-center"
                onClick={() => setViewFormVisible(true)}
                style={{ borderRadius: "20px !important" }}
              >
                <div className="text-[16px] text-[#232323] font-bold pb-3 pt-5  border-b-gray-200 border-[1px] w-[106%]  text-center border-white">
                  Package Details
                </div>

                <table className="w-full ">
                  <tbody className="">
                    {detailedPackageDate?.title && (
                      <tr className="">
                        <td className="w-[50%] ">Title</td>
                        <td>{detailedPackageDate?.title}</td>
                      </tr>
                    )}

                    {detailedPackageDate?.start_date && (
                      <tr>
                        <td>Start Date</td>
                        <td>
                          {detailedPackageDate?.start_date &&
                            new Date(

                              detailedPackageDate.start_date

                            ).toLocaleDateString("en-GB")}
                        </td>
                      </tr>
                    )}

                    {detailedPackageDate?.country && (
                      <tr>
                        <td>Country</td>
                        <td>{detailedPackageDate?.country}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.state && (
                      <tr>
                        <td>State</td>
                        <td>{detailedPackageDate?.state}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.description && (
                      <tr>
                        <td>Description</td>
                        <td
                          dangerouslySetInnerHTML={{
                            __html: detailedPackageDate.description,
                          }}
                        />
                      </tr>
                    )}
                    {detailedPackageDate?.price && (
                      <tr>
                        <td>Price</td>
                        <td>{detailedPackageDate?.price}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.no_of_person && (
                      <tr>
                        <td>No of person</td>
                        <td>{detailedPackageDate?.no_of_person}</td>
                      </tr>
                    )}

                    {detailedPackageDate?.country && (
                      <tr>
                        <td>Country</td>
                        <td>{detailedPackageDate?.country}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.state && (
                      <tr>
                        <td>State</td>
                        <td>{detailedPackageDate?.state}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.days_and_night && (
                      <tr>
                        <td>No of days</td>
                        <td>{detailedPackageDate?.days_and_night}</td>
                      </tr>
                    )}
                    {detailedPackageDate?.category && (
                      <tr>
                        <td>Category</td>
                        <td>{detailedPackageDate?.category}</td>
                      </tr>
                    )}

                    {detailedPackageDate?.offer && (
                      <tr>
                        <td>Offer</td>
                        <td>{detailedPackageDate?.offer}%</td>
                      </tr>
                    )}

                    {detailedPackageDate?.published !== undefined && (
                      <tr>
                        <td>Publish Status</td>
                        <td>
                          {detailedPackageDate.published === 1
                            ? "Published"
                            : detailedPackageDate.published === 0
                            ? "Not Published"
                            : ""}

                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Fade>
        </Modal>
      )}

      <div className="  flex justify-center lg:justify-start flex-row">

        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="flex justify-end gap-7">
        <div>
          <form onSubmit={handleCsvSubmit} encType="multipart/form-data">
            <div className="flex gap-7">
              <div className="file-input-container col-span-1 ">
                <span>
                  <input
                    type="file"
                    className="py-3 border-[1px] border-gray-200 rounded-lg h-[48px] w-full   custom-file-input grid"
                    name="file"
                    accept=".csv"
                    id="file-input"
                    onChange={handleFileChange}
                    alt=""
                  />

                  <label htmlFor="file-input">
                    <span className="custom-file-input-button font-thin  hover:bg-[hsl(0,0%,95%)]">
                      Choose file{" "}
                    </span>{" "}
                  </label>
                </span>
                {uploadError && (
                  <div className="text-red-500 mt-[-5%]">{uploadError}</div>
                )}
                {successMessage && (
                  <div className="text-[#029e9d] mt-[-5%]">
                    {successMessage}
                  </div>
                )}
              </div>
              <div className="flex gap-1   ">
                <button
                  className="bg-[#029e9d] text-white py-[1px]  h-[48px] !important pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
                  type="submit"
                >
                  <div className="flex gap-1  ">
                    <div>Import CSV </div>{" "}
                    <div>
                      <FaArrowRight className="mt-1"/>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-100% items-end  ">
          <button
            className="bg-[#029e9d] text-white py-[13px]   pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={generatePdf}
          >
            {" "}
            <div className="flex gap-1">
              {" "}
              <div>Generate PDF </div>{" "}
              <div>
                <FaArrowRight className="mt-1"/>
              </div>
            </div>
          </button>
        </div>

        <div className="w-100% items-end  ">
          <button
            className="bg-[#029e9d] text-white py-[13px]   pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={generateCSV}
          >
            {" "}
            <div className="flex gap-1  ">
              <div>Generate CSV </div>{" "}
              <div className="mt-1">
                <FaArrowRight />
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className="bg-[#029e9d] text-white py-[13px]   pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={generateExcel}
          >
            {" "}
            <div className="flex gap-1  ">
              <div>Generate Excel </div>{" "}
              <div className="mt-1">
                <FaArrowRight />
              </div>
            </div>
          </button>
        </div>
        <div>
          <form onSubmit={handleExcelSubmit}>
            <div className="flex gap-6">
            <div className="file-input-container col-span-1 ">
              <span>
                <input
                  type="file"
                  className="py-3 border-[1px] border-gray-200 rounded-lg h-[48px] w-full   custom-file-input grid"
                  name="file"
                  accept=".xlsx, application/vnd.ms-excel"
                  id="file-inputExcel"
                  onChange={handleExcelFileChange}
                  alt=""
                />

                <label htmlFor="file-inputExcel">
                  <span className="custom-file-input-button font-thin  hover:bg-[hsl(0,0%,95%)]">
                    Choose file{" "}
                  </span>{" "}
                </label>
              </span>
              {uploadExcelError && (
                <div className="text-red-500 mt-[-5%]">{uploadExcelError}</div>
              )}
              {successExcelMessage && (
                <div className="text-[#029e9d] mt-[-5%]">{successExcelMessage}</div>
              )}
            </div>
            <div className="flex gap-1   ">
              <button
                className="bg-[#029e9d] text-white py-[1px]  h-[48px] !important pl-5 pr-4 rounded-lg mr-1 hover:bg-yellow-400 "
                type="submit"
              >
                <div className="flex gap-1  ">
                  <div>Import Excel </div>{" "}
                  <div className="mt-1">
                    <FaArrowRight />
                  </div>
                </div>
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AllPackageLists;
