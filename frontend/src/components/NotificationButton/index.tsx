import iconeNotificar from '../../assets/img/NotificationIcon.svg';

import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={iconeNotificar} alt="Notificar" />
        </div>

    )
}

export default NotificationButton;
