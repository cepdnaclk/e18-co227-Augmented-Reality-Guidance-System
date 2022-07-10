AFRAME.registerComponent("floor-0", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      $("#btn-view-map")
        .click(function () {
          if ($(this).text() === "Hide Map") {
            $("#map-ground-floor").attr("visible", false);
            $(this).text("View Map");
          } else {
            $("#map-ground-floor").attr("visible", true);
            $(this).text("Hide Map");
          }
        })
        .show();
      $("#btn-see-more")
        .click(function () {
          window.location.href = "http://www.ce.pdn.ac.lk/";
        })
        .show();
    });
    this.el.addEventListener("markerLost", () => {
      $("#btn-view-map").hide();
      $("#btn-see-more").hide();
    });
  },
});

AFRAME.registerComponent("room-g01", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      $("#btn-see-more")
        .click(function () {
          window.location.href =
            "http://www.ce.pdn.ac.lk/facilities/networking-lab/";
        })
        .show();
    });
    this.el.addEventListener("markerLost", () => {
      $("#btn-see-more").hide();
    });
  },
});

// read the floor class
$(document).ready(function () {
  $("div.floor").each(function (i, d) {
    readFloordata(d.id);
  });
});

async function getJson(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function readFloordata(url) {
  let data = await getJson(url);
  let rooms = "";

  // read the rooms/labs
  for (var i = 0; i < data.rooms.length; i++) {
    rooms += "<li>" + data.rooms[i] + "</li>";
  }

  // embeded into html
  let html = `<div style="width: 400px; height: 400px">
  <h3 class="text-center mb-2">${data.name}</h3>
  <p class="mb-0">
    You can find the following locations from this floor:
  </p>
  <div class="offset-2">
  <ul>
  ${rooms}
  <br />
  </ul>
  </div>
  </div>`;

  let container = document.querySelector(".floor");
  container.innerHTML = html;
}
