// Import Custom Component
import TwitterIcon from '../../icons/twitter';
import FacebookIcon from '../../icons/facebook';
import TelegramIcon from '../../icons/telegram';
import EmailIcon from '../../icons/email';

// Import Settings

export default function ShareSocials( { } ) {
    return (
        <div className="px-4 pt-5 pb-3">
            <h4 className="mb-1">Share link to this page</h4>
            <div className="d-flex align-items-center">
                <div className="mr-4 social-box">
                    <button className="social-btn">
                        <TwitterIcon height="13" width="13" />
                    </button>
                    <h5 className="social-text">Twitter</h5>
                </div>
                <div className="mr-4 social-box">
                    <button className="social-btn">
                        <FacebookIcon height="13" width="13" />
                    </button>
                    <h5 className="social-text">Facebook</h5>
                </div>
                <div className="mr-4 social-box">
                    <button className="social-btn">
                        <TelegramIcon height="13" width="13" />
                    </button>
                    <h5 className="social-text">Telegram</h5>
                </div>
                <div className="mr-4 social-box">
                    <button className="social-btn">
                        <EmailIcon height="13" width="13" />
                    </button>
                    <h5 className="social-text">E-mail</h5>
                </div>
            </div>
        </div>
    )
}