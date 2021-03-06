import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Sidebar from '../components/Sidebar';


function Allnews({t}){
    return <div className="main-content">
        <Helmet>
            <title>Tin tức - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
        </Helmet>
        <Sidebar />
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 nav-news" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h3><i class="fas fa-bars"></i>{t("newsmenu")}</h3>
                <button className="nav-link news-nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">{t("news.label")}</button>
                <button className="nav-link news-nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">{t("apply.label")}</button>
                <button className="nav-link news-nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">{t("solution")}</button>
            </div>
            <div className="tab-content tab-news" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/cong-ty-thanh-tin-la-nha-phan-phoi-chinh-thuc-cho-hang-mettler-toledo">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>   
                        </div>
                        <Link to="/cong-ty-thanh-tin-la-nha-phan-phoi-chinh-thuc-cho-hang-mettler-toledo" className="newscomponent-title">Công ty Thành Tín là nhà phân phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy Sỹ)</Link>                 
                    </div>
                    <div className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/thong-bao-thay-doi-ten-giao-dich">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>  
                        </div>
                        <Link className="newscomponent-title" to="/thong-bao-thay-doi-ten-giao-dich">Thông báo thay đổi tên giao dịch</Link>                        
                    </div>
                    <div className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/analytica-viet-nam-2013">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>                          
                        </div>
                        <Link className="newscomponent-title" to="/analytica-viet-nam-2013">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>                      
                    </div>
                    <div className="news-component">
                         <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/tuyen-nhan-vien-kinh-doanh">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>  
                        </div>
                        <Link className="newscomponent-title" to="/tuyen-nhan-vien-kinh-doanh">TUYỂN NHÂN VIÊN KINH DOANH</Link>                       
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="news-component">
                         <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link> 
                        </div>
                        <Link className="newscomponent-title">{t("solution")}</Link>                      
                    </div>
                    <div className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>           
                        </div>
                        <Link className="newscomponent-title">...</Link>                     
                    </div>
                    <div className="news-component">                    
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/news2">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>        
                        </div>
                        <Link className="newscomponent-title">...</Link>
                    </div>
                    <div className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>               
                        </div>
                        <Link className="newscomponent-title">...</Link>
                    </div>                      
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="news-component">                      
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                        </div>
                        <Link className="newscomponent-title">Ứng dụng</Link>
                    </div>
                    <div className="news-component">                     
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>              
                        </div>
                        <Link className="newscomponent-title">...</Link>
                    </div>
                    <div className="news-component">                       
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>               
                        </div>
                        <Link className="newscomponent-title">...</Link>
                    </div>
                    <div className="news-component">                      
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>               
                        </div>
                        <Link className="newscomponent-title">...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default withNamespaces()(Allnews);