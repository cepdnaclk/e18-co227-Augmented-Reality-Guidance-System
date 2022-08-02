floorIds = [
  "ground_floor",
  "first_floor",
  "second_floor",
  "third_floor",
  "fourth_floor",
];

roomIds = ["g_08"];

$(function () {
  // Generate <a-marker> elements for all floors
  floorIds.forEach((id) => {
    let marker = `
      <a-marker ${id} type="pattern" 
        preset="custom" url="assets/img/patterns/${id}.patt" 
        raycaster="objects: .clickable" emitevents="true" 
        cursor="fuse: false; rayOrigin: mouse;">

        <a-plane rotation="-90 0 0"></a-plane>
        <a-entity
          rotation="-90 0 0"
          position="0 0.1 0"
          scale="0.5 0.5 0.5"
          htmlembed
        >
          <div style="width: 400px; height: 400px" id="${id}"></div>
        </a-entity>

        <a-image
            src="assets/img/floor_plan/${id}.png"
            scale="1 1 1"
            class="clickable"
            id="map_${id}"
            rotation="-90 0 0"
            position="0 0.2 0"
            visible="false"
            gesture-handler
          >
      </a-marker>
    `;
    $("#scene").append(marker);
  });

  // Generate <a-marker> elements for all rooms
  roomIds.forEach((id) => {
    let marker = `
      <a-marker ${id} type="pattern" 
        preset="custom" url="assets/img/patterns/${id}.patt" 
        raycaster="objects: .clickable" emitevents="true" 
        cursor="fuse: false; rayOrigin: mouse;">

        <a-plane rotation="-90 0 0"></a-plane>
        <a-entity
          rotation="-90 0 0"
          position="0 0.1 0"
          scale="0.5 0.5 0.5"
          htmlembed
        >
          <div style="width: 400px; height: 400px" id="${id}"></div>
        </a-entity>
    
      </a-marker>
    `;
    $("#scene").append(marker);
  });

  // Register floor AR objects and trackers
  floorIds.forEach((id) => {
    AFRAME.registerComponent(id, {
      init: function () {
        generateFloorOverlay(id);
        this.el.addEventListener("markerFound", () => {
          $("#btn-view-map")
            .click(function () {
              let mapId = "#map_" + id;
              if ($(this).text() === "Hide Map") {
                $(mapId).attr("visible", false);
                $(this).text("View Map");
              } else {
                $(mapId).attr("visible", true);
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
  });

  // Register room AR objects and trackers
  roomIds.forEach((id) => {
    AFRAME.registerComponent(id, {
      init: function () {
        generateRoomOverlay(id);
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
  });
});

// Get JSON data from the given URL
async function getJsonData(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// Generate floor AR overlay
async function generateFloorOverlay(id) {
  let url = "assets/data/" + id + "/index.json";
  let floorDetails = await getJsonData(url);

  let roomsList = "";
  floorDetails.rooms.forEach((roomName) => {
    roomsList += "<li>" + roomName + "</li>";
  });

  let floorOverlay = `
      <h3 class="text-center mb-2">${floorDetails.name}</h3>
      <p class="mb-0">You can find the following locations from this floor:</p>
      <div class="offset-2">
        <ul>${roomsList}</ul>
        <br />
      </div>
  `;

  $("#" + id).append(floorOverlay);
}

// Generate room AR overlay
async function generateRoomOverlay(id) {
  let url = retrieveRoomJsonUrl(id);
  let roomDetails = await getJsonData(url);

  let roomOverlay = `
      <h3 class="text-center mb-2">${roomDetails.name}</h3>
      `;

  if (roomDetails.features.length > 0) {
    let featuresList = "";
    roomDetails.features.forEach((feature) => {
      featuresList += "<li>" + feature + "</li>";
    });
    roomOverlay += `
    <p class="mb-0">Available Features:</p>
      <div class="offset-2">
        <ul>
          ${featuresList}
        </ul>
      </div>
      <br />
      `;
  }

  roomOverlay += `<p>Person In Charge: ${
    roomDetails.person_in_charge == "" ? "N/A" : roomDetails.person_in_charge
  }</p>`;

  if (roomDetails.additional_notes != "") {
    roomOverlay += `<p>Note: ${roomDetails.additional_notes}</p>`;
  }

  if (roomDetails.tags.length > 0) {
    roomDetails.tags.forEach((tag) => {
      roomOverlay += `<span class="Label mr-1 Label--accent">${tag.toUpperCase()}</span>`;
    });
    roomOverlay += "<br />";
  }

  roomOverlay += "<br />";
  roomOverlay += `
    <div class="row">
      <div class="col-2 text-center">
        <img src="assets/img/people-icon.png" alt="people-icon" />
        <h4 class="mt--2">${
          roomDetails.capacity == "" ? "N/A" : roomDetails.capacity
        }</h4>
      </div>
    </div>
  `;

  $("#" + id).append(roomOverlay);
}

// Retrieve room JSON URL when the room ID is given
function retrieveRoomJsonUrl(id) {
  if (id.charAt(0) === "g") {
    return "assets/data/ground_floor/" + id + ".json";
  } else if (id.charAt(0) === "1") {
    return "assets/data/first_floor/" + id + ".json";
  } else if (id.charAt(0) === "2") {
    return "assets/data/second_floor/" + id + ".json";
  } else if (id.charAt(0) === "3") {
    return "assets/data/third_floor/" + id + ".json";
  } else if (id.charAt(0) === "4") {
    return "assets/data/fourth_floor/" + id + ".json";
  } else {
    return "";
  }
}
