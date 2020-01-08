function oneSecondCallBacker(callback) {
  setTimeout(callback, 1000);
}


// What's the callback here?
document.addEventListener('click', () => console.log("click"))

/* React Example - What's the callback here?
 * <div>
 *   <button onClick={this.clickHandler}>
 *     Click Me
 *   </button>
 * </div>
