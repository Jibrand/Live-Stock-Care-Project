import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { client, urlFor } from '../../../Client';
import { useTranslation } from 'react-i18next'

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { t } = useTranslation();

  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage

    const fetchNotifications = async () => {
      const query = `*[_type == "notification" && user._ref == "${costerID}"] | order(date1 desc, _createdAt desc)`;


      const notificationData = await client.fetch(query);

      setNotifications(notificationData);
      setIsLoading(false);
    };

    fetchNotifications();
  }, [params.id]);

  return (
    <React.Fragment>
      <div className='p-1' style={{ textAlign: "left", overflowY: "scroll", maxHeight: "160px" }}>
        <h5 style={{ color: "black", fontWeight: "bold" }}><>{t('l63')}</></h5>
        {isLoading ? (
          <p>{t('l65')}</p>
        ) : notifications.length === 0 ? (
          <p>{t('l64')}</p>
        ) : (
          notifications.map((notification) => (
            <React.Fragment key={notification._id}>
              <p className='lato'style={{ marginBottom: "-5px", color: "#430e7e" }}>{notification.name}</p>
              <p className='teko' style={{ color: "GrayText", marginBottom: "10px" }}><i>{notification.date1}</i></p>
            </React.Fragment>
          ))
        )}
      </div>
    </React.Fragment>
  );
}
