document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("projectModal");
    const modalDetails = document.getElementById("modalDetails");
    const closeModalBtn = document.querySelector(".close");
  
    const projectDetails = {
      project1: {
        title: "GuideCO",
        description: "Description of GuideCO.",
        image: "src/assets/images/GuideCO.jpg",
        link: "#"
      },
      project2: {
        title: "ExploARQ23",
        description: "Description of ExploARQ23.",
        image: "src/assets/images/ExploArq23.png",
        link: "#"
      },
      project3: {
        title: "Project 3",
        description: "Description of Project 3.",
        image: "src/assets/images/Project3.jpg",
        link: "#"
      }
    };
  
    // Agregar evento a cada miniatura
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        const projectId = thumbnail.id;
        const project = projectDetails[projectId];
  
        if (project) {
          modalDetails.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 5px;">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" style="text-decoration: none; color: blue;">View Project</a>
          `;
          modal.style.display = "flex";
        } else {
          console.error("Project not found:", projectId);
        }
      });
    });
  
    // Cerrar modal
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  