// import class Data for fetch api(json file)
import Data from "./Data.js";

/**** Sidebar >> Subscriptions Ui ****/
let subscriptionsParentDom = document.querySelector(".subscriptions");
let moreSubscriptionsList = document.querySelector(
  ".side-subscriptions-list .more"
);

class DrawSubscriptions {
  constructor() {
    this.getSubscription = new Data("subscriptions.json", this.subscriptionsUi);
    this.getSubscription.getData();
  }

  subscriptionsUi(subscriptions) {
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
}

// create new object from DrawSubscriptions for execute after import auto
new DrawSubscriptions();

export default DrawSubscriptions;
