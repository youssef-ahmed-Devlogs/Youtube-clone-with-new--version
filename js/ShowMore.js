class ShowMore {
  constructor() {
    this.isShow = true;
  }

  show(moreList, show_more_btn) {
    if (this.isShow) {
      this.setShow(
        moreList,
        show_more_btn,
        "block",
        "fa-caret-up",
        "Show Less"
      );
      moreList.style.animation = "fadeIn .5s ease-in-out";
    } else {
      this.setShow(moreList, show_more_btn, "none", "fa-caret-up", "Show More");
    }
    this.isShow = !this.isShow;
  }

  setShow(moreList, show_more_btn, display, toggleClass, textShow) {
    moreList.style.display = display;
    show_more_btn.children[0].classList.toggle(toggleClass);
    show_more_btn.children[1].textContent = textShow;
  }
}

export default ShowMore;
