// import class Data for fetch api(json file)
import Data from "./Data.js";

/****  Videos Draw Ui****/
let videosContentDom = document.querySelector(".videos-content");

class DrawVideos {
  constructor() {
    this.getVideos = new Data("videos.json", this.videosUi);
    this.getVideos.getData();
  }

  videosUi(videos) {
    let allVideos = videos.map((video) => {
      let videosPosts = `
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
        <span class="video-time border-radius1">${video.video_time}</span>
      </div>
      <div class="video-name">${video.video_name} </div>
      <div class="channel-name">${video.channel_name} ${
        video.verification_mark
          ? `<i class="fas fa-check-circle verification-icon" style="color: #6691ff"></i>`
          : ""
      } </div>
      <div class="video-info">
        <span class="video-views">${video.video_views} Views . </span>
        <span class="video-published-date">${video.video_published_date}</span>
      </div>
    </a>
  `;

      return videosPosts;
    });

    videosContentDom.innerHTML = allVideos.join("");
  }
}

// create new object from DrawVideos for execute after import auto
new DrawVideos();

export default DrawVideos;
