/**** Sidebar >> Show More ****/
// Youtube Pages List
let showMoreYtPages = document.querySelector(".side-yt-pages-list .show-more");
let moreYtPages = document.querySelector(".side-yt-pages-list .more");
// Subscriptions
let showMoreSubscriptions = document.querySelector(
  ".side-subscriptions-list .show-more"
);
let moreSubscriptionsList = document.querySelector(
  ".side-subscriptions-list .more"
);
// More From Youtube List
let showMoreFromYtList = document.querySelector(
  ".side-more-from-yt-list .show-more"
);
let moreFromYtList = document.querySelector(".side-more-from-yt-list .more");

class showMore {
  constructor() {
    this.isShow = false;
  }

  show(moreList, moreButton) {
    if (!this.isShow) {
      this.setShow(moreList, moreButton, "block", "fa-caret-up", "Show Less");
      moreList.style.animation = "fadeIn .5s ease-in-out";
    } else {
      this.setShow(moreList, moreButton, "none", "fa-caret-up", "Show More");
    }
    this.isShow = !this.isShow;
  }

  setShow(moreList, moreButton, display, toggleClass, textShow) {
    moreList.style.display = display;
    moreButton.children[0].classList.toggle(toggleClass);
    moreButton.children[1].textContent = textShow;
  }
}

let youtubeList = new showMore();
let subscriptions = new showMore();
let FromYtList = new showMore();

showMoreYtPages.addEventListener("click", () =>
  youtubeList.show(moreYtPages, showMoreYtPages)
);
showMoreSubscriptions.addEventListener("click", () =>
  subscriptions.show(moreSubscriptionsList, showMoreSubscriptions)
);
showMoreFromYtList.addEventListener("click", () =>
  FromYtList.show(moreFromYtList, showMoreFromYtList)
);

/**** Sidebar >> Subscriptions Ui ****/
let subscriptionsParentDom = document.querySelector(".subscriptions");

async function getSubscription() {
  const response = await fetch("subscriptions.json");
  const data = await response.json();

  // Subscriptions Ui
  subscriptionsUi(data);
}

function subscriptionsUi(subscriptions) {
  let allSubscriptions = subscriptions.map((sub) => {
    return `
                <li class="trn-3 hover-light-3">
                    <a href="${sub.link}" target="_blank">
                        <div class="subscriptions-img circle-img img-4">
                            <img src="${sub.image}" alt="subscriptions image">
                        </div>
                        ${sub.name}
                    </a>
                </li>
            `;
  });

  allSubscriptions.forEach((sub, index) => {
    if (index < 4) {
      subscriptionsParentDom.innerHTML += sub;
    } else {
      moreSubscriptionsList.innerHTML += sub;
    }
  });
}

getSubscription();

/**** Sidebar Toggle ****/
let homepage = document.querySelector(".homepage");
let sidebarBtn = document.querySelector(".sidebar-btn");
let sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", sidebarToggle);

function sidebarToggle(e) {
  e.preventDefault();

  if (window.innerWidth <= 1460) {
    if (sidebar.style.display == "block") {
      sidebar.style.transform = "translate(-100%)";
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 300);
      document.body.style.overflow = "auto";
    } else {
      sidebar.style.transform = "translate(0)";
      setTimeout(() => {
        sidebar.style.display = "block";
      }, 300);
      document.body.style.overflow = "hidden";
    }
  } else {
    if (sidebar.style.display == "none") {
      sidebar.style.transform = "translate(0)";
      homepage.style.width = "83%";
      setTimeout(() => {
        sidebar.style.display = "block";
      }, 300);
    } else {
      sidebar.style.transform = "translate(-100%)";
      homepage.style.width = "100%";
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 300);
    }
  }
}

/**** Nav >> User ****/
let navUserBtn = document.querySelector(".nav-icon.user");
let userSettingsDom = document.querySelector(".user-settings");
let navUserIcon = document.querySelector(".nav-icon.user i");
let isUserOpen = false;

navUserBtn.addEventListener("click", userSettings);

function userSettings(e) {
  e.preventDefault();
  if (!isUserOpen) {
    userSettingsDom.style.display = "block";
    userSettingsDom.style.animation = "fadeIn .5s ease-in-out";
    navUserIcon.classList.toggle("fa-caret-up");
  } else {
    userSettingsDom.style.display = "none";
    navUserIcon.classList.toggle("fa-caret-up");
  }
  isUserOpen = !isUserOpen;
}

/**** Nav >> User >> Dark Mode Settings ****/
let darkModeToggle = document.getElementById("dark-mode-toggle");
let youtubeLogo = document.querySelector(".youtube-logo img");
let darkToggleIcon = document.querySelector(".dark-toggle-icon");
darkModeToggle.addEventListener("change", darkmode);

function darkmode(e) {
  if (e.target.checked) {
    darkToggleIcon.classList.toggle("fa-toggle-on");
    setMode(
      "#181818",
      "#202020",
      "#fff",
      "#d3d3d3",
      "#4C292D",
      "images/logos/youtube-logo-dark.png",
      "#fff",
      "#202020"
    );
  } else {
    darkToggleIcon.classList.toggle("fa-toggle-on");
    setMode(
      "#EBEBEB",
      "#fff",
      "#181818",
      "#676767",
      "#ffced5",
      "images/logos/youtube-logo-light.png",
      "#202020",
      "#fff"
    );
  }
}

function setMode(
  bgLight,
  bgWhite,
  dark,
  darkGray,
  redLight,
  imgSrc,
  LightdarkActive,
  whiteActive
) {
  document.documentElement.style.setProperty("--bg-light", bgLight);
  document.documentElement.style.setProperty("--bg-white", bgWhite);
  document.documentElement.style.setProperty("--dark", dark);
  document.documentElement.style.setProperty("--dark-gray", darkGray);
  document.documentElement.style.setProperty("--red-light", redLight);
  document.documentElement.style.setProperty(
    "--light-dark-active",
    LightdarkActive
  );
  document.documentElement.style.setProperty("--white-active", whiteActive);
  youtubeLogo.src = imgSrc;
}

/**** Nav >> Notifications Ui ****/
let notificationsDom = document.querySelector(
  ".notification-settings .content"
);

async function getNotifications() {
  const response = await fetch("notification.json");
  const data = await response.json();

  // Subscriptions Ui
  notificationUi(data);
}

function notificationUi(notifications) {
  let allNotification = notifications.map((noti) => {
    return `
                  <li class="hover-light-3 trn-4">
                      <a href="#" class="notification">
                      <div class="notification-subscription img-10 circle-img">
                          <img src="${noti.image}" alt="" />
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
                      <div class="notification-video img-30">
                          <img
                          src="${noti.video_image}"
                          class="img-w100"
                          alt=""
                          />
                      </div>
                      </a>
                  </li>
            `;
  });

  notificationsDom.innerHTML = allNotification.join("");
}

/**** Nav >> Notifications Settings ****/
let navNotificationBtn = document.querySelector(".notification-btn");
let notificationSettingsDom = document.querySelector(".notification-settings");
let isNotificationOpen = false;

navNotificationBtn.addEventListener("click", notificationSettings);

function notificationSettings(e) {
  e.preventDefault();
  if (!isNotificationOpen) {
    notificationSettingsDom.style.display = "block";
    notificationSettingsDom.style.animation = "fadeIn .5s ease-in-out";
    getNotifications();
  } else {
    notificationSettingsDom.style.display = "none";
  }
  isNotificationOpen = !isNotificationOpen;
}

/**** Nav >> For Hide And Show Search Input ****/
let searchInput = document.querySelector(".search");
let nav_user_Icon = document.querySelector(".nav-user-icon");
let navNotiIcon = document.querySelector(".nav-noti-icon");
let navVideoIcon = document.querySelector(".nav-video-icon");
let searchIcon = document.querySelector(".nav-search-icon");
// Exists sidebarBtn

console.log(sidebarBtn);

searchIcon.addEventListener("click", toggleSearch);

function toggleSearch(e) {
  e.preventDefault();
  searchInput.classList.toggle("m-700-show-search");
  searchInput.style.animation = "fadeIn .5s ease-in-out";
  nav_user_Icon.classList.toggle("m-700-hide");
  navNotiIcon.classList.toggle("m-700-hide");
  navVideoIcon.classList.toggle("m-700-hide");
  sidebarBtn.classList.toggle("m-700-hide");
}

/****  Category Sweper ****/
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let categorySwepeDom = document.querySelector(".category-swepe");
let categoryContent = document.querySelector(".category-content");
let moveing = 0;

nextBtn.addEventListener("click", nextCategory);
prevBtn.addEventListener("click", prevCategory);

function nextCategory() {
  let categoryContentWidth = 0;
  for (let i = 0; i < categoryContent.children.length; i++) {
    categoryContentWidth += categoryContent.children[i].clientWidth;
  }

  if (moveing > -categoryContentWidth + (categorySwepeDom.clientWidth - 180)) {
    moveing += -100;
    categoryContent.style.transform = `translateX(${moveing}px)`;
  }
}

function prevCategory() {
  if (!moveing == 0) {
    moveing += 100;
    categoryContent.style.transform = `translateX(${moveing}px)`;
  }
}

/****  Videos Draw Ui****/
let videosContentDom = document.querySelector(".videos-content");

async function getVideos() {
  const response = await fetch("videos.json");
  const data = await response.json();

  // videosUi Ui
  videosUi(data);
}

function videosUi(videos) {
  let allVideos = videos.map((video) => {
    return `
                <a href="${video.video_link}"
                   target="_blank"
                   class="video-item border-radius2"
                   style="order: 
                   ${Math.floor(Math.random() * videos.length)}">
                <div class="video-thumbnail-container">
                  <div class="video-thumbnail">
                    <img
                      class="img-w100 border-radius2"
                      src="${video.video_thumbnail}"
                      alt="elzero-v-1"
                    />
                  </div>
                  <div class="channel-image border-radius2 img-6">
                    <img
                      class="img-w100 border-radius2"
                      src="${video.channel_image}"
                      alt="elzero"
                    />
                  </div>
                  <span class="video-time border-radius1">${
                    video.video_time
                  }</span>
                </div>
                <div class="video-name">${video.video_name}</div>
                <div class="channel-name">${video.channel_name}</div>
                <div class="video-info">
                  <span class="video-views">${video.video_views} Views . </span>
                  <span class="video-published-date">${
                    video.video_published_date
                  }</span>
                </div>
              </a>
            `;
  });

  videosContentDom.innerHTML = allVideos.join("");
}

getVideos();
