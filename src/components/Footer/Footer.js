import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerSection">
        <div className="footerLeftSection">
          <div className="CustomerHappinessCenter">고객행복센터</div>
          <div className="CustomerCenterBox">
            <div className="phoneNumber">1644-1234</div>
            <div className="CustomerCenterBoxRight">
              <div className="everydayCenter">365고객센터</div>
              <div className="operatingHours">{CS_CENTER_TIME.call}</div>
            </div>
          </div>

          <div className="CustomerCenterBox">
            <div className="kakaotalk">
              <span className="kakaotalkText">카카오톡 문의</span>
            </div>
            <div className="CustomerCenterBoxRight">
              <div className="everydayCenter">365고객센터</div>
              <div className="operatingHours">{CS_CENTER_TIME.kakao}</div>
            </div>
          </div>
        </div>

        <div className="footerRightSection">
          <ul className="introduceBar">
            {INFOMATIONS.map((item, i) => (
              <li key={i} className="introduce">
                {item}
              </li>
            ))}
          </ul>
          <address className="introduceText">
            <p className="introduceText">
              법인명 (상호): {ABOUT_KURLY.name} | 사업자 등록번호:{' '}
              {ABOUT_KURLY.code}
            </p>
            주소: {ABOUT_KURLY.address} | 제휴문의:
            <span className="businessText"> {ABOUT_KURLY.email}</span>
          </address>
          <div className="corpText">{ABOUT_KURLY.copyRight}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const INFOMATIONS = ['컬리소개', '소개영상', '인재채용', '이용약관'];
const ABOUT_KURLY = {
  name: '주식회사 브로컬리',
  code: '000-00-00000',
  address: '서울특별시 강남구 테헤란로',
  email: 'business@brokurly.com',
  copyRight: 'BROKURLY CORP.ALL RIGHT RESERVED',
};
const CS_CENTER_TIME = {
  call: '오전 7시 - 오후 7시',
  kakao: '오전 7시 - 오후 7시',
};
