import axios from 'axios';
import React from 'react';
import Header from '../../../Components/Header/header';
import './khohangchinhsua.css';
import { useState, useEffect } from 'react';
import './product.css';

function Spmoi(props) {
    var arrproduct = [];
    const [count, setcount] = useState(1);
    const [data, setdata] = useState([]);
    const [product, setproduct] = useState([]);
    const [icon, seticon] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3150/admin/icon/list')
            .then(function (response) {
                seticon(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:3150/admin/productcode/list')
            .then(function (response) {
                setproduct(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:3150/admin/categories')
            .then(function (response) {
                setdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    function clearallcode() {
        document.querySelector('.productName').value = '';
        document.querySelector('.productType').value = '';
        document.querySelector('.performanceProduct').value = '';
        document.querySelector('.cameraProduct').value = '';
        document.querySelector('.specialFeatures').value = '';
        document.querySelector('.design').value = '';
        document.querySelector('.panel').value = '';
        document.querySelector('.Sale').value = '';
    }
    function clearlist() {
        document.querySelector('.pricevinh').value = '';
        document.querySelector('.priceRange').value = '';
        document.querySelector('.storage').value = '';
        document.querySelector('.color').value = '';
        document.querySelector('.ram').value = '';
        document.querySelector('.rom').value = '';
        document.querySelector('.productPic').value = '';
        document.querySelector('.countSold').value = '';
    }
    function addnewcode() {
        const form = document.querySelector('form');
        const formData = new FormData(form);

        axios
            .post('http://localhost:3150/admin/productcode', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        clearallcode();
    }
    function newcodeon() {
        document.querySelector('.addnewproductcode').style.display = 'block';
        document.querySelector('.addnewproductlist').style.display = 'none';
        document.querySelector('.addnewvoucher').style.display = 'none';
        document.querySelector('.addnewslide').style.display = 'none';
        document.querySelector('.dongmoi').style.borderRadius = 'unset';
        document.querySelector('.dongmoi').style.height = '75px';
        document.querySelector('.dongmoi').style.background = 'white';
        document.querySelector('.dongmoi').style.borderTopRightRadius = '15px';
        document.querySelector('.dongmoi').style.borderTopLeftRadius = '15px';
        document.querySelector('.dtmoi').style.background = 'white';
        document.querySelector('.dtmoi').style.height = '60px';
        document.querySelector('.dtmoi').style.borderRadius = '15px';
        document.querySelector('.voumoi').style.background = 'white';
        document.querySelector('.voumoi').style.height = '60px';
        document.querySelector('.voumoi').style.borderRadius = '15px';
    }
    function newliston() {
        document.querySelector('.addnewproductlist').style.display = 'block';
        document.querySelector('.addnewproductcode').style.display = 'none';
        document.querySelector('.addnewslide').style.display = 'none';
        document.querySelector('.addnewvoucher').style.display = 'none';
        document.querySelector('.dtmoi').style.borderRadius = 'unset';
        document.querySelector('.dtmoi').style.height = '75px';
        document.querySelector('.dtmoi').style.background = 'white';
        document.querySelector('.dtmoi').style.borderTopRightRadius = '15px';
        document.querySelector('.dtmoi').style.borderTopLeftRadius = '15px';
        document.querySelector('.dongmoi').style.background = 'white';
        document.querySelector('.dongmoi').style.height = '60px';
        document.querySelector('.dongmoi').style.borderRadius = '15px';
        document.querySelector('.voumoi').style.background = 'white';
        document.querySelector('.voumoi').style.height = '60px';
        document.querySelector('.voumoi').style.borderRadius = '15px';
    }
    function newvoucheron() {
        document.querySelector('.addnewproductlist').style.display = 'none';
        document.querySelector('.addnewproductcode').style.display = 'none';
        document.querySelector('.addnewvoucher').style.display = 'block';
        document.querySelector('.addnewslide').style.display = 'block';
        document.querySelector('.voumoi').style.borderRadius = 'unset';
        document.querySelector('.voumoi').style.height = '75px';
        document.querySelector('.voumoi').style.background = 'white';
        document.querySelector('.voumoi').style.borderTopRightRadius = '15px';
        document.querySelector('.voumoi').style.borderTopLeftRadius = '15px';
        document.querySelector('.dongmoi').style.background = 'white';
        document.querySelector('.dongmoi').style.height = '60px';
        document.querySelector('.dongmoi').style.borderRadius = '15px';
        document.querySelector('.dtmoi').style.background = 'white';
        document.querySelector('.dtmoi').style.height = '60px';
        document.querySelector('.dtmoi').style.borderRadius = '15px';
    }
    function addnewlist() {
        setcount(1);
        const form12 = document.querySelector('.formlist');
        const formData12 = new FormData(form12);
        console.log(11, formData12);
        axios
            .post('http://localhost:3150/admin/product', formData12)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        clearlist();
    }
    function clearvoucher() {
        setcount(1);
        document.querySelector('.vouchername').value = '';
        document.querySelector('.voucherpic').value = '';
        document.querySelector('.discount').value = '';
    }
    function newvoucher() {
        setcount(1);
        const form123 = document.querySelector('.formvoucher');
        const formData123 = new FormData(form123);
        axios
            .post('http://localhost:3150/admin/icon/', formData123)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        clearvoucher();
    }
    function clearslide() {
        setcount(1);
        document.querySelector('.slidename').value = '';
        document.querySelector('.slidepic').value = '';
    }
    function newslide() {
        setcount(1);
        const form1234 = document.querySelector('.formslide');
        const formData1234 = new FormData(form1234);
        axios
            .post('http://localhost:3150/admin/slide/', formData1234)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        clearslide();
    }
    function choosebrand(id) {
        setcount(1);
        document.querySelector('.boxbrand').style.background = 'black';
        document.querySelector('.boxbrand').style.color = 'white';
        document.querySelector('.boxbrand').style.border = '2px solid black';
        document.querySelector('.newboxbrand').style.display = 'none';
        axios
            .get('http://localhost:3150/admin/productcode/list')
            .then(function (response) {
                response.data.map(function (value, index) {
                    if (value.idCategories[0] == id) {
                        arrproduct.push(value);
                        setproduct(arrproduct);
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get(`http://localhost:3150/admin/categories/${id}`)
            .then(function (response) {
                console.log(response);
                document.querySelector('.boxbrand').innerHTML = `${response.data.categoriesName}`;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function newboxbrandon() {
        setcount(1);
        setcount(count + 1);
        if (count % 2 !== 0) {
            document.querySelector('.newboxbrand').style.display = 'block';
        }
        if (count % 2 == 0) {
            document.querySelector('.newboxbrand').style.display = 'none';
        }
    }
    return (
        <div>
            <Header></Header>
            <div className="spmoi">
                <div className="butadd">
                    <button className="dongmoi but" onClick={newcodeon}>
                        D??ng s???n ph???m m???i
                    </button>
                    <button className="dtmoi but" onClick={newliston}>
                        S???n ph???m m???i
                    </button>
                    <button className="voumoi but" onClick={newvoucheron}>
                        Voucher + Slide
                    </button>
                </div>
                <div className="addnewproductcode">
                    <form className="form" action="" encType="multipart/form-data">
                        <span>
                            H??ng:
                            <select className="option" name="idCategories">
                                {data.map(function (value, index) {
                                    return (
                                        <option key={index} value={value._id}>
                                            {value.categoriesName}
                                        </option>
                                    );
                                })}
                            </select>
                        </span>

                        <span>
                            T??n S???n ph???m:
                            <input className="productName" placeholder="T??n S???n ph???m" name="productName" type="text" />
                        </span>
                        <span>
                            Lo???i s???n ph???m:
                            <input className="productType" name="productType" placeholder="Lo???i s???n ph???m" type="text" />
                        </span>
                        <span>
                            Hi???u n??ng:
                            <input
                                placeholder="Hi???u n??ng"
                                className="performanceProduct"
                                name="performanceProduct"
                                type="text"
                            />
                        </span>
                        <span>
                            C???m Camera:
                            <input
                                className="cameraProduct"
                                name="cameraProduct"
                                placeholder="C???m Camera"
                                type="text"
                            />
                        </span>
                        <span>
                            T??nh n??ng ?????c bi???t:
                            <input
                                className="specialFeatures"
                                name="specialFeatures"
                                placeholder="T??nh n??ng ?????c bi???t"
                                type="text"
                            />
                        </span>
                        <span>
                            Thi???t k???:
                            <input className="design" placeholder="Thi???t k???" type="text" name="design" />
                        </span>
                        <span>
                            M??n h??nh:
                            <input className="panel" name="panel" placeholder="M??n h??nh" type="text" />
                        </span>
                        <span>
                            Sale:
                            <input className="Sale" type="text" name="Sale" placeholder="Sale" />
                        </span>
                        <span>
                            H??nh ???nh:
                            <input type="file" name="thumNail" id="" />
                        </span>
                    </form>
                    <div className="addbut">
                        <button onClick={addnewcode}>Add new</button>
                        <button onClick={clearallcode}>Clear all</button>
                    </div>
                </div>
                <div className="addnewproductlist">
                    <div className="chonhang">
                        <p>Ch???n h??ng:</p>
                        <div onClick={newboxbrandon} className="boxbrand">
                            T??n h??ng
                        </div>
                        <div className="newboxbrand">
                            {data.map(function (value, index) {
                                return (
                                    <p onClick={() => choosebrand(value._id)} key={index}>
                                        {value.categoriesName}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <form className="formlist" action="" encType="multipart/form-data">
                        <span>
                            D??ng s???n ph???m:
                            <select className="option" name="idProductCode">
                                {product.map(function (value, index) {
                                    return (
                                        <option key={index} value={value._id}>
                                            {value.productName}
                                        </option>
                                    );
                                })}
                            </select>
                        </span>
                        <span>
                            ????n gi??:
                            <input className="pricevinh" placeholder="????n gi??" name="price" type="number" />
                        </span>
                        <span>
                            Kho???ng gi??:
                            <input
                                className="priceRange"
                                placeholder="Kho???ng gi??"
                                type="text"
                                name="priceRange"
                                id=""
                            />
                        </span>
                        <span>
                            S??? l?????ng:
                            <input className="storage" name="storage" placeholder="S??? l?????ng" type="number" />
                        </span>
                        <span>
                            M??u s???c:
                            <input className="color" name="color" placeholder="M??u s???c" type="text" />
                        </span>
                        <span>
                            RAM:
                            <input className="ram" name="ram" placeholder="RAM" type="text" />
                        </span>
                        <span>
                            B??? nh??? trong (Rom):
                            <input className="rom" placeholder="B??? nh??? trong" type="text" name="rom" />
                        </span>
                        <span>
                            ???? b??n:
                            <input className="countSold" placeholder="S??? l?????ng ???? b??n" type="number" name="countSold" />
                        </span>
                        <span>
                            H??nh ???nh:
                            <input className="productPic" placeholder="H??nh ???nh" name="productPic" type="file" />
                        </span>
                        <span>
                            Ch???n voucher:
                            <select name="icon">
                                {icon.map(function (value, index) {
                                    return <option value={value._id}>{value.iconName}</option>;
                                })}
                            </select>
                        </span>
                    </form>
                    <div className="addbut">
                        <button onClick={addnewlist}>Add new</button>
                        <button onClick={clearlist}>Clear all</button>
                    </div>
                </div>
                <div className="addnewvoucher">
                    <form className="formvoucher" action="" encType="multipart/form-data">
                        <span>
                            Voucher:
                            <input className="vouchername" placeholder="Voucher" name="iconName" type="text" />
                        </span>
                        <span>
                            Discount:
                            <input className="discount" placeholder="Discount" name="discount" type="number" />
                        </span>
                        <span>
                            H??nh ???nh:
                            <input className="voucherpic" placeholder="H??nh ???nh" name="iconPic" type="file" />
                        </span>
                    </form>
                    <div className="addbut">
                        <button onClick={newvoucher}>Add new</button>
                        <button onClick={clearvoucher}>Clear all</button>
                    </div>
                </div>
                <div className="addnewslide">
                    <form className="formslide" action="" encType="multipart/form-data">
                        <span>
                            Slide:
                            <input className="slidename" placeholder="Slide" name="slideName" type="text" />
                        </span>
                        <span>
                            H??nh ???nh:
                            <input className="slidepic" placeholder="H??nh ???nh" name="slideImg" type="file" />
                        </span>
                    </form>
                    <div className="addbut">
                        <button onClick={newslide}>Add new</button>
                        <button onClick={clearslide}>Clear all</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spmoi;
