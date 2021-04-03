// import class Data for fetch api(json file)
import Data from "./Data.js";

/**** Nav >> Notifications Ui ****/
let notificationsDom = document.querySelector(
  ".notification-settings .content"
);

class DrawNotifications {
  constructor() {
    this.getNotifications = new Data("notification.json", this.notificationUi);
    this.getNotifications.getData();
  }

  notificationUi(notifications) {
    let allNotification = notifications.map((noti) => {
      return `
                      <li class="hover-light-3 trn-4">
                          <a href="#" class="notification">
                          <div class="notification-subscription img-10 circle-img">
                              <img src="${noti.image}" alt="${noti.image}" />
                          </div>
                          <p class="notification-description">
                              تم تحميل الفيديو
                              <span class="video-name">
                              ${noti.video_name}
                              </span>
                              الي قناة
                              <span class="subscription-name">
                              ${noti.name}
                              </span>
                          </p>
                          <div class="notification-video img-w30 img-m-w">
                              <img
                              src="${noti.video_image}"
                              class="img-w100"
                              alt="${noti.video_image}"
                              />
                          </div>
                          </a>
                      </li>
                `;
    });

    notificationsDom.innerHTML = allNotification.join("");
  }
}

export default DrawNotifications;
