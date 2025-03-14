function showMenu() {
  let header = document.getElementById("headerblock");
  let sectionwrapper = document.getElementById("sections-wrapper");
  let logo = document.getElementById("mobile-logo")

  // let hamburger=document.getElementById("cross")
  document.querySelectorAll(".link").forEach((el, i) => {
    i > 0 &&
      ("" === el.style.display || "none" === el.style.display
        ? ((el.style.display = "block"),
          (document.querySelector(".navigation").style.display =
            "block"),

          (header.style.backgroundColor = "white"),
          (logo.style.color = "black"),
          (hamburger.style.backgroundColor = "black"),
          (sectionwrapper.style.display = "none"))
        : ((el.style.display = ""),
          (document.querySelector(".navigation").style.display = ""),
          (header.style.backgroundColor = "#2A007A"),
          (logo.style.color = "white"),
          (hamburger.style.backgroundColor = "#2A007A"),
          (sectionwrapper.style.display = "block")));
  });
}

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 0.90)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

let acc = document.getElementsByClassName("accordion");
let i;

// Open the first accordion
let firstAccordion = acc[0];
let firstPanel = firstAccordion.nextElementSibling;
firstAccordion.classList.add("active");
firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

// Add onclick listener to every accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    // For toggling purposes detect if the clicked section is already "active"
    var isActive = this.classList.contains("active");





    // Close all accordions
    let allAccordions = document.getElementsByClassName("accordion");
    for (j = 0; j < allAccordions.length; j++) {
      // Remove active class from section header
      allAccordions[j].classList.remove("active");
      // document.querySelector('.drops').style.display = 'grid';
      // document.querySelector('.drop').style.display = 'none';

      // Remove the max-height class from the panel to close it
      let panel = allAccordions[j].nextElementSibling;
      let maxHeightValue = getStyle(panel, "maxHeight");

      if (maxHeightValue !== "0px") {
        panel.style.maxHeight = null;
      }
      // if(acc=="active"){
      //   document.querySelector('.drops').style.display = 'none'
      //  }else{

      //   document.querySelector('.drop').style.display = 'block'
      //  }
    }

    // Toggle the clicked section using a ternary operator
    isActive ? this.classList.remove("active") : this.classList.add("active");
    // if(isActive=="remove"){
    //   document.querySelector('.drop').style.display = 'none';
    //  }else{

    //   document.querySelector('.drops').style.display = 'block';
    //  }
    // Toggle the panel element
    let panel = this.nextElementSibling;
    let maxHeightValue = getStyle(panel, "maxHeight");

    if (maxHeightValue !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

// Cross-browser way to get the computed height of a certain element. Credit to @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
function getStyle(el, styleProp) {
  let value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        let oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}





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



function allModule() {
  document.querySelector('.ai-section').style.display = 'grid';
  document.querySelector('.all').style.display = 'grid';
  document.querySelector('.big-data').style.display = 'grid';
  document.querySelector('.eof').style.display = 'grid';
  document.querySelector('.network').style.display = 'grid';
  document.querySelector('.cloud-native').style.display = 'grid';
  document.querySelector('.security').style.display = 'grid';

}
function aiModule() {
  document.querySelector('.ai-section').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}

function dataModule() {
  document.querySelector('.big-data').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function cultureModule() {
  document.querySelector('.all').style.display = 'grid';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.cloud-native').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function cloudModule() {
  document.querySelector('.cloud-native').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.security').style.display = 'none';

}
function securityModule() {
  document.querySelector('.security').style.display = 'grid';
  document.querySelector('.all').style.display = 'none';
  document.querySelector('.ai-section').style.display = 'none';
  document.querySelector('.eof').style.display = 'none';
  document.querySelector('.network').style.display = 'none';
  document.querySelector('.big-data').style.display = 'none';
  document.querySelector('.cloud-native ').style.display = 'none';

}