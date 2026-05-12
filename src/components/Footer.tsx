import '../style/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <img src='/images/index/footer_logo.png' alt='Lunest Logo' className='footer-logo' />
      </div>

      <div className='footer-center'>
        <p className='footer-desc'>Lunest</p>
        <p className='footer-desc'>당신의 고요한 밤을 지켜주는 작은 자연입니다.</p>
        <hr className='footer-line' />
        <ul className='footer-nav'>
          <li>[ 홈 ]</li>
          <li>[ 자연의 소리 ]</li>
          <li>[ 명상 가이드 ]</li>
          <li>[ 마이페이지 ]</li>
          <li>[ 문의하기 ]</li>
        </ul>
        <hr className='footer-line' />
        <p className='footer-policy'>
          <span>이용약관</span> <span>개인정보처리방침</span>
        </p>
      </div>

      <div className='footer-right'>
        <p className='footer-copy'>© 2026 Lunest. All rights reserved.</p>
      </div>
    </footer>
  )
}