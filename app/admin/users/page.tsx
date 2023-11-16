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
import TableSearchBar from "../../components/TableSearchBox";
import PaginationBar from "../../components/PaginationBar";
import ShowEntriesDropdown from "@/app/components/EntriesDropDown";
import apiConfiguration from "../../config";
import Image from "next/image";
import AlternateImg from "../../../public/alternative.png"

interface UserData {
  id: number;
  email: string;
  password: string;
  image: any;
  mobile_number: string | number;
  role: any;
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
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      fetch(`${apiConfiguration.externalservice.backendUrl}/user/get`, {
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
    }
  }, [searchQuery]);

  function handleDeleteAction(userid: number) {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken === null) {
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
          const token = localStorage.getItem("accessToken");
          fetch(
            `${apiConfiguration.externalservice.backendUrl}/user/${userid}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
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
          "You are not signed in to your account. Do you want to sign in your account?"
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
          "You are not signed in to your account. Do you want to sign in your account?"
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
    item.email.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entries);
  const alternateImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEX///+2tbSysbCwr66+vbz7+/u4t7b39/fAv766ubjv7+/Qz8/z8/PT09LJyMfq6und3dzn5uba2dnGxcTS0dG+APCBAAAKnklEQVR4nN1dWZLjIAxty/u+5f5nHS9JO4kFBklget7PVHVNbJ4BoZ2fH+dI834cpkc3F0lSZlFWJkkxd49pGPs8df96p8j7oS6yCFZE39j/mhX10Od3D5SCfGwLiBFiZwDEUdGOf4lmPnYlNmt6mpDVf4Nl/0hiO3JvNOOkHu8moMfYWU4dNpldsCQF6IVMsqqF6D1JRm1zN6UPDIkkvZ0jFMPdtF5IJ9Hpeyc5haARNFK7D+dY371Ymy52Rm9H3N3JcZk/x/xWwG0cc+fz90Lc3aLstD7m7wVovfMbIp8E1wPS79lRlX75bRxLj9vx4Z/fxvHhiV/veYG+UYx6HwTru/htHGvn/KrsToILxaxyS3C6l9/GcXLILy3uJ7hQLJzp4/3d3H7hSOBMvpS0a8ROVuocwgp9AWZxfqm8Fc8CJMKbsbmbEQJRJW4MawJ3gKC8GcKRMe+IxcyNQAnKUQzolPiGzKkRgKKmhoQKFzRBCYpD2AQXisy9GKyQOcATN2P4BBeKjEBV/xcILhTJR38T+h58AYgKXCo+kAPSj6ap4YncAABiKLppGMax78dhmOoiMkvUMERCIShmD0I0T/35I6f9NEdSLCn2otBJD9lDJweqtiRnbny+x/rkFxGjENXXvr+mFXFQ2gpUCSkDmelZPCYS39NO2vClDCQ2B3ElsOutpA07NgiRraJRsR1BNjHGiv0yisY/ciM+YO7wz5hvSog6Bjfok5m+iJl/wDC8mV516Mxew3WscYJDzMgImO1+Fj122KTmHRxGr+B8RYEIJmsJmbyfJUdFfF8sdcpAnpacx8v4L1kfubx6OsfzJOaD5pjel1+Z/mjJ8DNrFvWPZqhrotkujL2oV95yxreTjVkydgvo0vw6OsHLHW4JxqGl0Wwa+tqIxfMj6UI9VqvFM/mhhuqSDRg7RrlhGELaUOW1An0rKo99xhQ6IPjzU5DHo5hE+i50sEZX0NepYifSBWnhhCDndEZ3DeOLOUsXpI4IPxOFP5gIyMIGVbDoksth/jXZY4TIPrpslk8xExgVYmKQfcAWPjwCqKM6+4fp9gopsGUMclnAae/UVIJCdr0KdAn/7bGhPseROnOArth8Pofu4HJ3VOygy5pPRYuszzhS2A6kMt+e/hhwXsdKXqYfQ6MvUlcq6QFyuP1jedEXqcvyjh30c+x9mcrbmoKgG3XHM3q6WeGeIGMjHskLLfUZjhUa7ugOzyk9L8H1abiCbhP8fv+cvtJ9FCAz9tDLDmY4tXyUH9NV09/h0R00PkQpJ1r02kT01AttiEAMdO/3M9TAcC6HzvA5Pkbg3L1WuoIu6p+KG/28MUt9YIPhi99lPd3GFA+p4WDE/HbDgBEVNU6zuovhpppy4r6hr9Jd1HAydEKXNLvyzUnoDv202O1XxioPn+Gm1XASnkPX2nZhykmXDVzzjjZpT3ezRcFbT9EmC3nlW2FbwNEWvmB9IS9ejAdngMtxwct5DtoTtTEcmfVNQXsTtwFOLMsicI/whpYeONwRsFd/R81SaaKgIzM7Oo7ivjF0HV1jnffRmkfB/EThRkifKNh1eK6XKXd8CZ+hW9WUXTGfsEyT5yNcgqXQrCi5lXjBZgy9kPEfEWbW1wH+HDrN3GMPbplD9j50OYkCU1hK9IYIMIP2AP+02J/iBhLtphO2TrPC0Zko0j2m4OqlO9woNhIffxESTNvi9znykOk90nHtwyccrFOhDkc108b/haaaigiBY2xFK9ZxTjrQJnTtAkxyjTtlt6LUh18sdJ6/9P1Zks3ExRrFQS/YskzQxc9urnIMquHFLT4hVq0uR3A7qfnGxfG4ADoOfGEVgIJt2YS6Rkj2q1tVZhml5om7O3+csLoCZVuwAtcJzuze8j2cSXpRrLixA88Jm8Oa61Q+4b4uSmfsqRTyl8IRO2Gl8hdk7en6ImbY14MpXUAG+XE8Q2NC1sUHwPpo7J1csLSrWW6a5pt3TVxRubn95BkZExc1r8dHg6FzY3R1tcQrZ0tQb/t6AXTXPTeFunuieBmtolrNFyCqtR1aJ6EOrThewU3HfdcB0Bub036Q67KrePNLFNBrZoxfBTEkc/vqlDxNnXCnZBxHWyAhp88VHHa7xnGkoct4FMPDYegEeY0MH+8X0fynDN/kmsvz4j68J8L8l8v0M5npf2T4WQzCXaYfZwD5MPj9nciR8pmtRV+my2EeLWf5WDV5nj4xkCyhuBhfD8jzvBqHx5wx1ILvjDviU6DArj1YrD3b+8gX/RVzDKRjm1BJfj2KkHsEUKPsnmMbCmOdGuJZk+KYjh1BOz/FGGzDFwC6Qb1Idtd7EuKyvs7gHKwt5HOWj5W3BqA1rAdqNpbo8FZhknWD6YMs7zk/+20tTCiI7PyFeT89imQxLw7E0WpqVFYJDrlNS1PMT2T8c2oULc2bflxRNSktdyM3dzdizZ0M03PizkvNoQKmd0Sgs2AUSITMy83YGpiFWfCyQQO9JvZR53SB3GQa8XFe9y91nphvhvZyoKrcl4sEMCi9VIwa4FLHVOWF6E990+sxfCDXe5bUidm6SfRwM70NtDqOOrVHsxM9lHDZQXM06jLQlOI0OII6irrtpArSBEhQffWdvoQeV2xErz2QA24sXCmV6G8CkqIfwCXqxY8wE8NHOTMJmKJ5HXxGvksoB/0ZSKbMdcucU1KZl74JVJxyEEwKeM52ZrhzmH6Hr830EsLE34Vz1qHRz056bbCy9LTcTI2fk7YQ5IGPyH3zqTglZwRiGH7iLEjN6wXOSbpwt/PiDGSQFlmRZ+XNZRklCWcV2s4HiKRGh3VmnM4JW9ULuQ84u9OL+I0UUb0sx4dcfBYSxTNB2zudUb9kFspCRWaQcqBhBmYYFDGCpKorrBAjBImKOdpoBh52+3gA5yJaUUMUEZj/9HZbCvMG0w9r7CZJkcIfOgZsSIyFhT3vVksDC5LySuZQirfFL9CwE7cmEA3X3WRqoBU1fMsOpRj76Ah5GgkWc5AwXfFZJBb+0IEHRmVsc2wverf78VQRKcGuoFj4EzgpHqMQKzxW1Y57m0ZFdkIsKPAUVZh+MjMqRaajrAbZoO9YkzNcL9VUWTYrLOtSVY5HXLs0jFNV3gUk8q9VBiQdtkueItVLnXTfQk/c7XWWmXzGL1Txc6b+q+uQIWqlF03aKvlFkTMBp9yMW8KwZE+zqlan3rrYggd0CYxQSJ1P2oxg113SK13B55r5zX+DZvrWI9h992l9pi5EDw7J6qJk1k9mVn9RtwtRPZJ2ylhn+sR3f9mtl+nEECetplIBQTVdFy94uafgieY6ixUAynow2TTN+EgMKol8m6SD5rR6pxmXczv0OTafaV4N7ZyYFf5A5N+Nad6YcqvSysq5q+v6sWD5p0uyzKZ6y+cCPZBb1njQ4d6CUaFRaeOigPnOaEk1u57HePZyW48GjW0dng0AuiCiXa0jjub1Y+5hXzxnQK+4O8z1Cb2+bM8veoSwPL8wzkIkl90XYg7WinTki52A6T3Rtwm5p86isBtUzAaAfOhK23L6tWK2Rvr0hIt8bAswVKqX/4d2IfoDyPupTjJFg4T9z1lST/2fJPeGNF8bJz26uUiSMluMjCQp5u4xDSNuVQnjH26MlqziCh82AAAAAElFTkSuQmCC";

  return (
    <div className="px-4 lg:px-6">
      <div className=" pt-6 md:flex justify-between   ">
        <div className="flex-row text-center  2xl:mr">
          <h2 className="text-gray-500 md:mt-5">
            <span className="text-[rgb(2,158,157)]">Dashboard</span>&nbsp; /
            &nbsp;<span> User Mangement</span>
          </h2>
        </div>
        <div className="flex-row mt-3 text-center">
          <button
            className="bg-[hsl(180,82%,35%)]  text-white py-3.5   px-6 rounded-lg mr-1 hover:bg-yellow-400 "
            onClick={handleInput}
          >
            <FontAwesomeIcon icon={faPlus} className="text-xl" /> Add user
          </button>
        </div>
      </div>
      <br></br>

      <div className=" bg-white px-4 py-4 rounded-[10px] shadow-sm lg:flex lg:flex-row lg:justify-between xl:py-[22px]">
        <div className="">
          <h5 className="flex justify-center md:justify-start   w-full p-4  text-[16px] lg:w-[190px] xl:w-full lg:text-[16px] md:py-0 font-semibold  text-[#424040]   xl:pt-3">
            {" "}
            User Management Lists{" "}
          </h5>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 lg:w-2/3 text-[16px]">
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
            <TableHead className="text-gray-800 ">
              <TableRow className="table-head">
                <th>ID</th>
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
  {list.file_name === null ||list.file_name===undefined ? (
    <Image
      src={AlternateImg} 
      className="rounded-md h-10 w-10"
      alt={'img'}
      height={30}
      width={50}
    />
  ) : (
    <Image
      src={list.file_name}
      className="rounded-md h-10 w-10"
      alt={alternateImg}
      height={30}
      width={50}
    />
  )}
</td>
                    <td>{list.email}</td>
                    <td>{list.mobile_number}</td>
                    <td>
                      {list.role_id === 1
                        ? "Admin"
                        : list.role_id === 2
                        ? "User"
                        : list.role_id === 3
                        ? "HR"
                        : ""}
                    </td>
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
export default Userlistpage;
