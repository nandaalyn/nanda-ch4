import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar2 from "../Navbar2/Navbar2";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar2 />

        <Sidebar />

        <section className="content-section ps-5 pe-4">
          <div className="row">
            <div className="col-lg-0" id="show-col-lg-0">
              <div className="adding-space" style={{ width: "300px" }}></div>
            </div>
            <div className="col-lg-12" id="show-col-lg-12">
              {/* Content */}

              <div className="container mt-5">
                <h2>Dashboard</h2>
                <h3>
                  <img alt="" /> List Order
                </h3>
                <table id="datatable" className="table">
                  <thead>
                    <tr>
                      <th className="text-center">No</th>
                      <th>
                        User Email <img alt="" />
                      </th>
                      <th>
                        Car <img alt="" />
                      </th>
                      <th>
                        Start Rent <img alt="" />
                      </th>
                      <th>
                        Finish Rent <img  alt="" />
                      </th>
                      <th>
                        Price <img alt="" />
                      </th>
                      <th>
                        Satus <img alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "white" }}>
                    <tr>
                      <td className="text-center">1</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">10</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}