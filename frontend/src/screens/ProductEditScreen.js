import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {Helmet} from 'react-helmet';



export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [enname, setEnname] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [encategory, setEncategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [parameter, setParameter] = useState('');
  const [enparameter, setEnparameter] = useState('');
  const [video, setVideo] = useState('');
  const [catalog, setCatalog] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [vnbrand, setVnbrand] = useState('');
  const [description, setDescription] = useState('');
  const [endescription, setEndescription] = useState('');
  const [model, setModel] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setEnname(product.enname);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setEncategory(product.encategory);
      setSubcategory(product.subcategory);
      setParameter(product.parameter);
      setEnparameter(product.enparameter);
      setVideo(product.video);
      setCatalog(product.catalog);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setVnbrand(product.vnbrand);
      setDescription(product.description);
      setEndescription(product.endescription);
      setModel(product.model);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        enname,
        price,
        image,
        category,
        encategory,
        subcategory,
        parameter,
        enparameter,
        model,
        video,
        catalog,
        brand,
        vnbrand,
        countInStock,
        description,
        endescription,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
          <h1>Edit Product id: {productId}</h1>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Helmet>
              <title>Edit: {product.name}</title>
            </Helmet>
            <div>
              <label htmlFor="name">T??n s???n ph???m </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="enname">T??n s???n ph???m (English) </label>
              <input
                id="enname"
                type="text"
                placeholder="Enter enname"
                value={enname}
                onChange={(e) => setEnname(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Gi?? (VN??)</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">H??nh ???nh</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Ch???n ???nh t??? m??y t??nh</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            {/* <div>
              <label htmlFor="subcategory">Category</label>
               <input
                id="subcategory"
                type="text"
                placeholder="Enter category"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                ></input>
            </div> */}
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                <option defaultValue="thiet-bi-nganh-giay">Thi???t b??? ng??nh gi???y</option>
                <option value="be-cach-thuy-be-dieu-nhiet">B??? c??ch th???y/B??? ??i???u nhi???t</option>
                <option value="khuc-xa-ke">Kh??c x??? k??? c???m tay/k??? thu???t s???</option>
                <option value="thiet-bi-thu-nghiem-co-ly-tinh">Thi???t b??? th??? nghi???m c??, l?? t??nh</option>
                <option value="lo-nung">L?? nung</option>
                <option value="thiet-bi-nganh-nhua-cao-su">Thi???t b??? ng??nh nh???a, cao su</option>
                <option value="may-cat-nuoc">M??y c???t n?????c</option>
                <option value="camera-may-in">Camera/M??y in</option>
                <option value="noi-hap-tiet-trung">N???i h???p ti???t tr??ng</option>
                <option value="may-ly-tam-may-lac">M??y ly t??m/M??y l???c</option>
                <option value="hoa-chat-va-thuoc-thu">H??a ch???t v?? thu???c th???</option>
                <option value="phan-cuc-ke-ong-phan-cuc">Ph??n c???c k???/???ng ph??n c???c</option>
                <option value="thiet-bi-do-khi">Thi???t b??? ??o kh??</option>
                <option value="thiet-bi-do-ty-trong">Thi???t b??? ??o t??? tr???ng</option>
                <option value="so-mau">So m??u</option>
                <option value="tu-an-toan-sinh-hoc-hoa-chat">T??? an to??n sinh h???c/T??? h??a ch???t</option>
                <option value="tu-say">T??? s???y</option>
                <option value="kinh-hien-vi">K??nh hi???n vi</option>
                <option value="tu-am-lanh">T??? ???m/T??? ???m l???nh</option>
                <option value="may-do-do-nhot">M??y ??o ????? nh???t</option>
                <option value="may-do-do-luu-bien">M??y ??o ????? l??u bi???n</option>
                <option value="may-phan-tich-ket-cau">M??y ph??n t??ch k???t c???u</option>
              </select>
            </div>
            {/* <div>
              <label htmlFor="encategory">Category (English) </label>
               <input
                id="encategory"
                type="text"
                placeholder="Enter encategory"
                value={encategory}
                onChange={(e) => setEncategory(e.target.value)}
                ></input>
            </div>
             */}
            <div>
              <label htmlFor="vnbrand">H??ng s???n xu???t</label>
              <select id="vnbrand" className="form-select" value={vnbrand} onChange={(e) => setVnbrand(e.target.value)} aria-label="Default select example">
                <option defaultValue="ALP - Japan">ALP - Nh???t B???n</option>
                <option value="EMCO - ?????c">EMCO - ?????c</option>
                <option value="CONSORT">CONSORT</option>
                <option value="DOSER - ?????c">DOSER - ?????c</option>
                <option value="PNSHAR - Trung Qu???c">PNSHAR - Trung Qu???c</option>
                <option value="KRUSS - ?????c">KRUSS - ?????c</option>
                <option value="PTA - Europe">PTA - Europe</option>
                <option value="COMETECH - ????i loan">COMETECH - ????i loan</option>
                <option value="NABERTHERM - ?????c">NABERTHERM - ?????c</option>
                <option value="TILO">TILO</option>
                <option value="IDM TEST - T??y Ban Nha">IDM TEST - T??y Ban Nha</option>
                <option value="HAMILTON - England">HAMILTON - Anh</option>
                <option value="NOVAPRO - Korea">NOVAPRO - H??n Qu???c</option>
                <option value="STURDY - ????i loan">STURDY - ????i loan</option>
                <option value="XRITE - M???">XRITE - M???</option>
                <option value="ANDREAS HETTICH - ?????c">ANDREAS HETTICH - ?????c</option>
              </select>
            </div>
            <div>
              <label htmlFor="brand">H??ng s???n xu???t (English)</label>
              <select id="brand" className="form-select" value={brand} onChange={(e) => setBrand(e.target.value)} aria-label="Default select example">
                <option defaultValue="ALP - Japan">ALP - Japan</option>
                <option value="EMCO - Germany">EMCO - Germany</option>
                <option value="CONSORT">CONSORT</option>
                <option value="DOSER - Germany">DOSER - Germany</option>
                <option value="PNSHAR - China">PNSHAR - China</option>
                <option value="KRUSS - Germany">KRUSS - Germany</option>
                <option value="PTA - Europe">PTA - EUROPE</option>
                <option value="COMETECH - Taiwan">COMETECH - Taiwan</option>
                <option value="NABERTHERM - Germany">NABERTHERM - Germany</option>
                <option value="TILO">TILO</option>
                <option value="IDM TEST - Spain">IDM TEST - Spain</option>
                <option value="HAMILTON - England">HAMILTON - England</option>
                <option value="NOVAPRO - Korea">NOVAPRO - Korea</option>
                <option value="STURDY - Taiwan">STURDY - Taiwan</option>
                <option value="XRITE - USA">XRITE - USA</option>
                <option value="ANDREAS HETTICH - Germany">ANDREAS HETTICH - Germany</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="countInStock">S??? l?????ng</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <input
                id="model"
                type="text"
                placeholder="Enter Model"
                value={model}
                onChange = {(e) => setModel(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">M?? t???:</label>
              <textarea
                rows="4"
                id="description"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="endescription">M?? t???: (English)</label>
              <textarea
                rows="4"
                id="endescription"
                type="text"
                placeholder="Enter endescription"
                value={endescription}
                onChange={(e) => setEndescription(e.target.value)}
              ></textarea>
            </div>           
            <div>
              <label htmlFor="parameter">Th??ng s??? k??? thu???t</label>
              <CKEditor 
                editor={ClassicEditor}
                data={parameter}
                onReady={editor =>{

                }}
                onChange = {(event, editor) => {
                  const data1 = editor.getData();
                  console.log(data1);
                  setParameter(data1);
                }}
              />
            </div>
            <div>
              <label htmlFor="enparameter">Th??ng s??? k??? thu???t (English)</label>
              <CKEditor 
                editor={ClassicEditor}
                data={enparameter}
                onReady={editor =>{

                }}
                onChange = {(event, editor1) => {
                  const data = editor1.getData();
                  console.log(data);
                  setEnparameter(data);
                }}
              />
            </div>
            <div>
               <label htmlFor="video">Link Video</label>
               <input
                id="video"
                type="text"
                placeholder="Enter Link video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
               ></input> 
            </div>
            
            <div>
               <label htmlFor="catalog">Link catalog</label>
               <input
                id="catalog"
                type="text"
                placeholder="Enter Link catalog"
                value={catalog}
                onChange={(e) => setCatalog(e.target.value)}
               ></input> 
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                C???p nh???t
              </button>
            </div>
          </>
        )}
      </form>
      
    </div>
  );
}
