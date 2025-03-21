let image = document.querySelectorAll(".slides"),
  nexts = document.querySelector(".next"),
  prevs = document.querySelector(".prev");

let currents = 0;

function changeImage() {
  image.forEach((img) => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  image[currents].classList.add("show");
  image[currents].style.display = "block";
}

// Calling first time
changeImage();

nexts.addEventListener("click", function () {
  currents++;

  if (currents > image.length - 1) {
    currents = 0;
  } else if (currents < 0) {
    currents = image.length - 1;
  }

  changeImage();
});
prevs.addEventListener("click", function () {
  currents--;

  if (currents > image.length - 1) {
    current = 0;
  } else if (currents< 0) {
    currents = image.length - 1;
  }

  changeImage();
});

function openInviteModal() {
  document.querySelector('.invite-modal-wrapper').style.display = 'grid';
  document.querySelector("#myForm").reset();
  let tagname = ["url"]
  tagname.map((id) => document.querySelector(`#${id}`).nextElementSibling.classList.remove("has-error"))
  tagname.map((id) => document.querySelector(`#${id}`).classList.remove("has-error"))
}
function closeInviteModal() {
  document.querySelector('.invite-modal-wrapper').style.display = 'none';
  document.querySelector("#myForm").reset();
  let tagname = ["url"]
  tagname.map((id) => document.querySelector(`#${id}`).nextElementSibling.classList.remove("has-error"))
  tagname.map((id) => document.querySelector(`#${id}`).classList.remove("has-error"))
}



function allModule(){
  document.querySelector('.ai-section').style.display = 'grid';
  document.querySelector('.all').style.display = 'grid';
  document.querySelector('.big-data').style.display = 'grid';
  document.querySelector('.eof').style.display = 'grid';
  document.querySelector('.network').style.display = 'grid';
  document.querySelector('.cloud-native').style.display = 'grid';
  document.querySelector('.security').style.display = 'grid';

}
function aiModule(){
  document.querySelector('.ai-section').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}

function dataModule(){
  document.querySelector('.big-data').style.display = 'grid'  ;
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function cultureModule(){
  document.querySelector('.all').style.display = 'grid'  ;
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function cloudModule(){
  document.querySelector('.cloud-native').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function securityModule(){
  document.querySelector('.security').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.cloud-native ').style.display = 'none';

}

function setActiveLink(setActive) {
    let links = document.querySelectorAll("#blogTableOfContent ul li a");
    Array.prototype.map.call(links, function (e) {
        e.className = "";
        if (e.id == setActive)
            e.className = "active";
    })
}

// SmoothScroll
(function () // Code in a function to create an isolate scope
{
    let speed = 500;
    let moving_frequency = 15; // Affects performance !
    let links = document.getElementsByTagName('a');
    let href;
    for (let i = 0; i < links.length; i++) {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
            links[i].onclick = function (e) {
                let activEle = document.querySelector('a.active');
                activEle.classList.remove("active");
                e.target.classList.add("active");

                let element;
                let href = this.attributes.href.nodeValue.toString();
                if (element = document.getElementById(href.substr(1))) {
                    let hop_count = speed / moving_frequency;
                    let getScrollTopDocumentAtBegin = getScrollTopDocument();
                    let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    for (let i = 1; i <= hop_count; i++) {
                        (function () {
                            let hop_top_position = gap * i;
                            setTimeout(function () { window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
                        })();
                    }
                }

                return false;
            };
        }
    }

    let getScrollTopElement = function (e) {
        let topValue = -150;

        while (e.offsetParent != undefined && e.offsetParent != null) {
            topValue += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        return topValue;
    };

    let getScrollTopDocument = function () {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();

// Hold popup

// let top = 0,
let verticalScroll = document.querySelector(".verticalScroll");
if (verticalScroll) {
    let offSetTop = verticalScroll.offsetTop;
    // For change active on scroll
    let headerWithId = [];
    for (let i = 0; i <= anchorNums.length; i++) {
        let headerOffSets = document.querySelectorAll("h2#xenonstack" + anchorNums[i]);
        if (headerOffSets.length != 0) {
            headerWithId.push(headerOffSets[0].offsetTop);
        }
    }
    headerWithId.push(999999);

    // Change active class according to location header
    function locationheader(top, headerWithId) {
        for (let i = 0; i <= anchorNums.length; i++) {
            if (top < headerWithId[i + 1]) {
                let activEle = document.querySelector('a.active');
                activEle.classList.remove("active");
                let toBeActive = document.getElementById('#xenonstack' + anchorNums[i]);
                toBeActive.classList.add("active");
                break;
            }
        }
    }

    window.addEventListener("scroll", function (event) {
        let top = this.scrollY;
        locationheader(top, headerWithId);
    }, false);

}
let links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function (elem, index) {
    //Get the hyperlink target and if it refers to an id go inside condition
    let elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        //Replace the regular action with a scrolling to target on click
        elem.addEventListener("click", function (ev) {
            ev.preventDefault();
            //Scroll to the target element using replace() and regex to find the href's target id
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});
// Table of contents End===========================================================


// ======================= blog reading progress ==================================
const progressWrapper = document.getElementById("blog-post__progress-wrapper"),
    progressBar = document.getElementById("blog-post__progress-bar"),
    container = document.getElementById("blog-post__content");

function setProgress() {
    let start = container.getBoundingClientRect().top,
        end = container.getBoundingClientRect().bottom,
        height = container.getBoundingClientRect().height;
    if (start > 0) {
        let width = 0;
        progressBar.style.width = width;
    } else {
        let width = Math.abs(start) / height * 100 + "%";
        progressBar.style.width = width;
    }
}

window.addEventListener('scroll', setProgress);
// blog reading progress End======================================================
// =======================Slider  JS================================================
let slides = document.getElementsByClassName("slider-outer");
let totalslides = slides.length;
containerWidth = 100;
let clicked = 0;
Array.prototype.forEach.call(slides, function (el, i) {//set the initial position of each slide
  el.style.left = (i * containerWidth) + "%";
  if (i === 0) {
    el.style.marginLeft = (i * containerWidth) + "%";
  }
});
window.moveSlides = function (direction) {
  run = true;
  tracker = containerWidth; //100 in this example. We make a separate variable so we can decrement it
  if (((direction == "next" && (clicked = clicked < totalslides - 1 ? clicked + 1 : 0) && (parseInt(slides[0].style.left) <= (0 - (containerWidth * (slides.length - 1))))))   //compare against 2nd-to-last slide's index, otherwise it'll go 1 slide too far
    || (direction == "prev" && (clicked = clicked !== 0 ? clicked - 1 : 0) && (parseInt(slides[0].style.left) >= 0))) { run = false; }
  if (run) {
    let slideInterval = setInterval(function () {
      moveRate = 4; //set the speed here (use numbers that the container's width can be divided by without a remainder)
      Array.prototype.forEach.call(slides, function (el, i) {

        if (tracker <= 0) {
          clearInterval(slideInterval);
        } else {
          el.style.left = (direction == "next") ? (parseInt(el.style.left) - moveRate) + "%" : (parseInt(el.style.left) + moveRate) + "%";
          if (clicked === 0) {
            for (let i = 0; i <= slides.length - 1; i++) {
              let calculate = 0 + i * 100 + '%';
              slides[i].style.left = calculate;
            }
          }
        }
      });
      tracker -= moveRate;
    }, 1);
  }
}
// Slider JS End ===============================================================


// ======================= Category Scrolling JS==================================
const $categoryList = document.querySelector('#blog-category__lists');
const $shadowStart = document.querySelector('.category-scrollable--start');
const $shadowEnd = document.querySelector('.category-scrollable--end');
if ($categoryList) {
  function handleShadowVisibility() {
    const maxScrollStartReached = $categoryList.scrollLeft <= 0;
    const maxScrollEndReached = $categoryList.scrollLeft >= $categoryList.scrollWidth - $categoryList.offsetWidth;

    toggleShadow($shadowStart, maxScrollStartReached);
    toggleShadow($shadowEnd, maxScrollEndReached);
  }

  function toggleShadow($el, maxScrollReached) {
    const shadowIsVisible = $el.classList.contains('is-visible');
    const showShadow = !maxScrollReached && !shadowIsVisible;
    const hideShadow = maxScrollReached && shadowIsVisible;

    if (showShadow) {
      window.requestAnimationFrame(() => $el.classList.add('is-visible'));
    } else if (hideShadow) {
      window.requestAnimationFrame(() => $el.classList.remove('is-visible'));
    }
  }
  $categoryList.addEventListener('scroll', (e) => handleShadowVisibility(e));

  function scrollCategory($event) {
    if ($event == 'left') {
      $categoryList.scrollLeft -= 90;
    }
    if ($event == 'right') {
      $categoryList.scrollLeft += 90;
    }
  }
  window.onresize = handleShadowVisibility;
  window.onload = handleShadowVisibility;
}
// category scrolling js End =================================================

// ======================= Load more Button===================================
let allBlogList = document.querySelectorAll('.blog-post-item');
let loadMoreBlogBtn = document.getElementById('loadMoreBlogBtn');

let blogCountCounter = 6;

if ((allBlogList !== null) && (loadMoreBlogBtn !== null)) {

  loadBlogFunction(blogCountCounter);

  loadMoreBlogBtn.addEventListener('click', function () {
    blogCountCounter = blogCountCounter + 6;
    loadBlogFunction(blogCountCounter);
  })
}

function loadBlogFunction(blogCount) {

  if (blogCount > allBlogList.length) {
    blogCount = allBlogList.length;
    loadMoreBlogBtn.classList.add('hide');
  }
  if (allBlogList.length < blogCountCounter + 1) {
    loadMoreBlogBtn.classList.add('hide');
  }

  for (let i = 0; i < allBlogList.length; i++) {
    if (i < blogCount) {
      allBlogList[i].classList.remove('blogpost-hidden');
      allBlogList[i].style.opacity = 1;
    }
  }
}

var selector = '.blog-category__lists .event-heading-drop';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


console.clear();

const links = document.querySelectorAll(".event-heading-drop");

document.addEventListener("click", e => {
  e.preventDefault();

  if (e.target.matches(".event-heading-drop")) {
    const el = e.target;

    setActive(el);
  }
});

const setActive = el => {
  [...el.parentElement.children].forEach((sib) =>
  sib.classList.remove(".event-heading-drop"));

  el.classList.add(".event-heading-drop");
};