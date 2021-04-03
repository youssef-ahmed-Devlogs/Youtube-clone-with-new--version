//import class DrawNotifications for get notifications
import DrawSubscriptions from "./DrawSubscriptions.js"; // Automatic execute after import in the class file

//import class DrawNotifications for get notifications
import DrawNotifications from "./DrawNotifications.js";

// import class DrawVideos for get Videos
import DrawVideos from "./DrawVideos.js"; // Automatic execute after import in the class file

// import class ShowMore for ShowMore
import ShowMore from "./ShowMore.js";

/**** Sidebar >> Show More ****/
// show more Youtube Pages List
let show_more_btn_YtPages = document.querySelector(
  ".side-yt-pages-list .show-more"
);
let moreYtPages = document.querySelector(".side-yt-pages-list .more");
// show more Subscriptions
let show_more_btn_subscriptions = document.querySelector(
  ".side-subscriptions-list .show-more"
);
let moreSubscriptionsList = document.querySelector(
  ".side-subscriptions-list .more"
);
// show more More From Youtube List
let show_more_btn_moreFromYtList = document.querySelector(
  ".side-more-from-yt-list .show-more"
);
let moreFromYtList = document.querySelector(".side-more-from-yt-list .more");

let youtubeList = new ShowMore();
let subscriptions = new ShowMore();
let FromYtList = new ShowMore();

show_more_btn_YtPages.addEventListener("click", () =>
  youtubeList.show(moreYtPages, show_more_btn_YtPages)
);
show_more_btn_subscriptions.addEventListener("click", () =>
  subscriptions.show(moreSubscriptionsList, show_more_btn_subscriptions)
);
show_more_btn_moreFromYtList.addEventListener("click", () =>
  FromYtList.show(moreFromYtList, show_more_btn_moreFromYtList)
);

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
    new DrawNotifications();
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

searchIcon.addEventListener("click", toggleSearch);

function toggleSearch(e) {
  e.preventDefault();
  searchInput.classList.toggle("m-700-show-search");
  searchInput.style.animation = "fadeIn .5s ease-in-out";

  let toggleSearchClasses = [
    nav_user_Icon,
    navNotiIcon,
    navVideoIcon,
    sidebarBtn,
  ];
  toggleSearchClasses.forEach((item) => {
    item.classList.toggle("m-700-hide");
  });
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
