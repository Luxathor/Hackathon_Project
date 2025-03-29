document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll("button");

  // Open and Close Modal for Personal Info Edit
  document
    .querySelector(".info-card h3 button")
    .addEventListener("click", openModal);
  function openModal() {
    document.getElementById("edit-modal").style.display = "flex";
  }
  function closeModal() {
    document.getElementById("edit-modal").style.display = "none";
  }
  document.querySelector(".close").addEventListener("click", closeModal);

  // Edit buttons for Education and Work Experience
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.innerText === "Edit") {
        let parentDiv = this.closest(".info-card");
        let textFields = parentDiv.querySelectorAll("p");

        textFields.forEach((p) => {
          let input = document.createElement("input");
          input.type = "text";
          input.value = p.innerText;
          p.replaceWith(input);
        });

        this.innerText = "Save";
      } else if (this.innerText === "Save") {
        let parentDiv = this.closest(".info-card");
        let inputFields = parentDiv.querySelectorAll("input");

        inputFields.forEach((input) => {
          let p = document.createElement("p");
          p.innerText = input.value;
          input.replaceWith(p);
        });

        this.innerText = "Edit";
      }
    });
  });

  // Profile Picture Upload Feature with Camera Icon
  const profilePic = document.querySelector(".profile-pic");
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";

  // Add Camera Icon
  const cameraIcon = document.createElement("div");
  cameraIcon.innerHTML = "📷";
  cameraIcon.style.position = "absolute";
  cameraIcon.style.bottom = "5px";
  cameraIcon.style.right = "5px";
  cameraIcon.style.background = "rgba(0,0,0,0.6)";
  cameraIcon.style.color = "white";
  cameraIcon.style.padding = "5px";
  cameraIcon.style.borderRadius = "50%";
  cameraIcon.style.cursor = "pointer";
  cameraIcon.style.fontSize = "16px";

  profilePic.style.position = "relative";
  profilePic.appendChild(cameraIcon);

  profilePic.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.style.backgroundImage = `url('${e.target.result}')`;
        profilePic.style.backgroundSize = "cover";
        profilePic.style.backgroundPosition = "center";
      };
      reader.readAsDataURL(file);
    }
  });

  document.body.appendChild(fileInput);
});
