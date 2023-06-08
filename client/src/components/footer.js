import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from "react-bootstrap/Container";
const footer = () => {
  return (
    <Container style={{ borderRadius: "0px" }}>
      <Row>
        <Col xs={6} md={6}>
          VỀ CHÚNG TÔI
          <p>Levents® – Share your color with the world</p>
          <p>HỘ KINH DOANH Red Label</p>
          <p>GPKD được cấp bởi Cục Cảnh sát QLHC & TTXH</p>
          <p>
            Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ
            Chí Minh
          </p>
          <p>Mä só thuê: 41J8031547</p>
          <p>Ngày cấp: 06/07/2021</p>
          <p>Người đại diện: Nguyễn Trần Duy Khiết</p>
          <p>Mã Số thuế cá nhân: 8748861448-001</p>
        </Col>

        <Col>
          LIÊN HỆ
          <p>Hotline</p>
          <p>1900 633 028</p>
          <p>Email</p>
          <p>Customercare@levents.asia</p>
        </Col>

        <Col>
          DANH MỤC SẢN PHẨM
          <p>Áo</p>
          <p>Quần</p>
        </Col>

        <Col>
          HỖ TRỢ
          <p>Chính sách bảo mật</p>
          <p>Chính sách bảo hành</p>
          <p>Tài khoản</p>
        </Col>

        <Col>
          CỬA HÀNG
          <p>842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM</p>
          <p>The New Playground, 04, Quận 1, HCM</p>
          <p>54, Mậu Thân, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</p>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
