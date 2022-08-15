import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Home = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

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

  const handlename = (e) => {
    const getUsername = e.target.value;
    setName(getUsername);
  };

  const handlesurname = (e) => {
    const getsurName = e.target.value;
    setSurName(getsurName);
  };
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleemail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };



  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(`Get Username ${name} ${surname} and ${email}`);
    setDisable(true);
    const object = { username: name, userSurname: surname, useremail: email };
    const req = axios.put("http://localhost:8000/api/user/self", { object });
    console.log(req);
  };

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
                  className="appearance-none block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  onChange={(e) => handlename(e)}
                  placeholder={data.name}
                  value={name}
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase  text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="grid-last-name"
                  type="text"
                  value={surname}
                  placeholder={data.surname}
                  onChange={(e) => handlesurname(e)}
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
                  type="email"
                  value={email}
                  onChange={handleemail}
                  placeholder={data.email}
                />
                {error && <h2 style={{ color: "red" }}>{error}</h2>}
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
                disabled={disable}
                type="button"
                className=""
                onClick={handleUpdate}
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
