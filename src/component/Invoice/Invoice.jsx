import React from "react";
import "./Invoice.css";
import Navbar from '../../component/Navbar/Navbar';
import Pdfviewer from "../Pdfviewer/Pdfviewer";

const Invoice = () => {
  return (
    <>
      <Navbar />
      <div className="invoice-section">
        <div className="head">
          <div className="container">
            <div className="row row-head">
              <div className="col-md-5 mt-3 ms-3">
                <a href="#">
                  {" "}
                  <img  alt="" /> Tiket{" "}
                </a>
                <p>Order : 011235</p>
              </div>
              <div className="col-md-4 mt-3">
                <ul className="list-menu d-flex flex-row">
                  <li>
                    <img
                      
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Pilih Metode
                  </li>
                  <li>
                    <img  alt="" />
                  </li>
                  <li>
                    <img
                      
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Bayar
                  </li>
                  <li>
                    <img  alt="" />
                  </li>
                  <li>
                    <img
                      
                      alt=""
                      style={{
                        width: "17px",
                        marginTop: "-3px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Tiket
                  </li>
                </ul>
              </div>
            </div>
            <div className="row row-content text-center">
              <div className="col-md-7">
                <img alt="" />
                <p className="content-title mt-2">Pembayaran Berhasil</p>
                <p className="content-description">
                  Tunjukan invoice ini kepada petugas BCR di titik temu
                </p>
                <Pdfviewer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;