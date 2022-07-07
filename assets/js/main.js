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
