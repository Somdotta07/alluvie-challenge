import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/self")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl text-left font-bold ">Your profile</h1>
      <div className="form-container">
        {user.map((data) => (
          <form className="w-full max-w-lg" key={data.name}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder={data.name}
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase  text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder={data.surname}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase  text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder={data.email}
                />
              </div>
            </div>

            <div className="communication">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="py-3 px-2">Communication channel</th>
                    <th></th>
                    <th className="py-3 px-8 ">Notifications</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Email</td>
                    <td></td>
                    {data.communications.email.notifications ? (
                      <td className="py-3 px-16">
                        <FaCheckCircle className="green" />
                      </td>
                    ) : (
                      <td className="py-3 px-16">
                        <FaTimesCircle className="red" />
                      </td>
                    )}
                  </tr>

                  <tr>
                    <td>Telegram</td>

                    {data.communications.telegram.notifications ? (
                      <td className="py-3 px-16">
                        <FaCheckCircle className="green" />
                      </td>
                    ) : (
                      <td className="py-3 px-16">
                        <FaTimesCircle className="red" />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="btn">
              <button
                type="submit"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Home;
