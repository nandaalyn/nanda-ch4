import React, { useEffect, useState } from 'react';
import User from '../../assets/icon/fi_users.png';
import Setting from '../../assets/icon/fi_settings.png';
import Calendar from '../../assets/icon/fi_calendar.png';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCar,noCar } from '../../redux/action/carAction';
import { saveDetailByID } from '../../redux/action/detailAction';
import { Link } from 'react-router-dom';

function Search() {
    // const [dataList, setDataList] = useState([]);
  
    const dispatch = useDispatch();

    const { isLoading: loadingCar, data: carData } = useSelector(
    (state) => state.car
    );
    
    useEffect(() => {
      ambilData()
    }, []);
  
    const ambilData = async (e) => {
  
      dispatch(noCar())
      e.preventDefault();
      try {
        await dispatch(getCar());
      } catch (error) {
        console.log(error);
      } 
    };
    // const ambilData  = () => {
    //   navigate('/search');
    // };
  
    // const handleGoDetail = (id) => {
    //   navigate(`/detail/${id}`)
    // }
    return (
    <>
    <Header /> 
      <section className="page-search">
        <div className="row">
          <div className="col head"></div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
             
              <div className="box">
                <div className="row">
                  <div className="col">
                    <p><strong>Pencarianmu</strong></p>
                  </div>
                </div>
                <form onSubmit={ambilData}> 
                <div className="row row-input">
                  <div className="col-auto">
                    <span>Tipe Driver</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>Pilih Tipe Driver</option>
                        <option value="1">Dengan Supir</option>
                        <option value="2">Tanpa Supir (Lepas Kunci)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Tanggal</span>
                    <div className="input-group">
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Waktu Jemput/Ambil</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>Pilih Waktu</option>
                        <option value="1">08.00 WIB</option>
                        <option value="2">09.00 WIB</option>
                        <option value="3">10.00 WIB</option>
                        <option value="4">11.00 WIB</option>
                        <option value="5">12.00 WIB</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Jumlah Penumpang (optional)</span>
                    <div className="input-group">
                      <input type="number" className="form-control" placeholder="Jumlah Penumpang" />
                    </div>
                  </div>
                  <div className="col-auto align-self-end">
                    <button className="btn btn-edit">Cari Mobil</button>
                  </div>
                </div>
                </form>
              </div>
              <div className="card-mobil mt-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      {loadingCar
                      ? ''
                      : carData.map((item) => {
                            return(
                                <div className="col-md-4">
                                <div class="card" key={item.id}>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                        <img width={300} src={item.image} alt="img-car" />
                                    </h5>
                                    <p>{item.name}</p>
                                    <h6>Rp {item.price}/ hari</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae.</p>
                                    <p class="card-text">
                                        <img src={User} alt="icon-key" />4 Orang
                                    </p>
                                    <p class="card-text">
                                        <img src={Setting} alt="icon-clock" />Manual
                                    </p>
                                    <p class="card-text">
                                        <img src={Calendar} alt="icon-clock" />Tahun 2020
                                    </p>
                                    <div class="btn-group" aria-label="Basic example">
                                    <Link className="btn btn-pilih" 
                                      to={`detail/${item.id}`} 
                                      onClick={()=> dispatch(saveDetailByID(item))}>Pilih Mobil</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
export default Search