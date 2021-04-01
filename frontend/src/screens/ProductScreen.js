import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {  detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import parse from 'html-react-parser';
// import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productList = useSelector((state) => state.productList);
  // const { products } = productList;
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    
    success: successReviewCreate,
  } = productReviewCreate;

  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');

  useEffect(() => {
    // if (successReviewCreate) {
    //   window.alert('Review Submitted Successfully');
    //   setRating('');
    //   setComment('');
    //   dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    // }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (comment && rating) {
  //     dispatch(
  //       createReview(productId, { rating, comment, name: userInfo.name })
  //     );
  //   } else {
  //     alert('Please enter comment and rating');
  //   }
  // };
  useEffect(() => {
    dispatch(listProducts({}));
    // dispatch(listTopSellers());
   }, [dispatch]);
  window.onload = function(){
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("pic");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
      img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }
  }
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <a href="javascript:history.back()">Trở lại</a>
          <div className="rowe top detail-page">
            <div className="col-1 col image-product">
              <img
                id="pic"
                src={product.image}
                alt={product.name}
              ></img>
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
            </div>
            <div className="col-1 col detail-product">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>              
                <li>Giá : {product.price} VNĐ</li>
                <li> 
                  <p>Model: {product.model}</p>
                </li>
                <li> 
                  <p>Mô tả: {product.description}</p>
                </li>
                <li>
                  <p className="contact-sale"> <strong> Liên hệ Email: <a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a></strong></p>
                </li>
              </ul>
            </div>
            <div className="col-1 col">
              <div className="card productcard-body productscreen-card">
                <ul>              
                  <li>
                    <div className="row">
                      <div>Giá</div>
                      <div className="price">{product.price} VNĐ</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Trạng thái</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Còn hàng</span>
                        ) : (
                          <span className="danger">Hết hàng</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Số lượng</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-detailpage">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-parameter-tab" data-bs-toggle="pill" data-bs-target="#pills-parameter" type="button" role="tab" aria-controls="pills-parameter" aria-selected="true">Thông số kỹ thuật</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false">Video</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-characteristic-tab" data-bs-toggle="pill" data-bs-target="#pills-characteristic" type="button" role="tab" aria-controls="pills-characteristic" aria-selected="false">Đặc tính nổi bật</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-application-tab" data-bs-toggle="pill" data-bs-target="#pills-application" type="button" role="tab" aria-controls="pills-application" aria-selected="false">Ứng dụng</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-accessories-tab" data-bs-toggle="pill" data-bs-target="#pills-accessories" type="button" role="tab" aria-controls="pills-accessories" aria-selected="false">Phụ kiện</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-download-tab" data-bs-toggle="pill" data-bs-target="#pills-download" type="button" role="tab" aria-controls="pills-download" aria-selected="false">Download</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-parameter" role="tabpanel" aria-labelledby="pills-parameter-tab">
                {parse(product.parameter)}
              </div>
              <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab"><a href="./images/sidebar-img.jpg" download>Link</a></div>
              <div className="tab-pane fade" id="pills-characteristic" role="tabpanel" aria-labelledby="pills-characteristic-tab">Đặc tính</div>
              <div className="tab-pane fade" id="pills-application" role="tabpanel" aria-labelledby="pills-application-tab">Ứng dụng</div>
              <div className="tab-pane fade" id="pills-accessories" role="tabpanel" aria-labelledby="pills-accessories-tab">Phụ kiện</div>
              <div className="tab-pane fade" id="pills-download" role="tabpanel" aria-labelledby="pills-download-tab"><a href="./images/sidebar-img.jpg" download>Download</a></div>
            </div>
          </div>
          <div className="recommend-product">
            {}                           
          </div>                        
        </div>
      )}
     
    </div>
  );
}
