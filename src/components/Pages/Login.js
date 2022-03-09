import './Login.css'
function Login() {
    return (
        <div class="modal__body-container">
            <div class="modal__inner">
                <div class="modal__header">
                    <div class="modal__heading">Dang Nhap</div>
                    <span class="modal__switch">Dang Ky</span>
                </div>
                <div class="modal-inputs">
                    <input type="text" class="modal-inputs__item" placeholder="Email cua ban" />
                    <input type="password" class="modal-inputs__item" placeholder="Mat khau cua ban" />
                </div>
                <div class="modal__helps">
                    <a href="/" class="modal__helps-item modal__helps-item-pri">Quên mật khẩu</a>
                    <span class="modal__helps-seperate"></span>
                    <a href="/" class="modal__helps-item">Cần trợ giúp ?</a>
                </div>
                <div class="modal__btns">
                    <button class="btn modal__btns-back">TRỞ LẠI</button>
                    <button class="btn btn__primary">ĐĂNG NHAP</button>
                </div>
            </div>
            <div class="modal__socials">
                <button class="modal__socials-item modal__socials-item--fb">
                    <i class="fab fa-facebook-square"></i>
                    <span class="modal__socials-text">Kết nối với facebook</span>
                </button>
                <button class="modal__socials-item modal__socials-item--gg">
                    <i class="fab fa-google"></i>
                    <span class="modal__socials-text">Kết nối với google</span>

                </button>
            </div>
        </div>
    )
}

export default Login