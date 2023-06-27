// Bartender data
const bartenders = [
  {
    image:'Juliana Silva.png',
    id: 1,
    name: "Juliana Silva",
    location: "Porto Alegre",
    specialty: "Mixologia Molecular",
    availability: "Flexível",
    description: "Possui técnicas e ingredientes inovadores para criar coquetéis.",
    contact: "51 99521-3215",
  },

  {
    id: 2,
    name: "Gabriela Soares",
    location: "Porto Alegre",
    specialty: "Coquetéis Clássicos",
    availability: "Finais de Semana",
    description: "Amplo conhecimento e habilidade em preparar bebidas tradicionais.",
    contact: "51 99741-3518",

  },
  {
    id: 3,
    name: "Caio Ribeiro",
    location: "Canoas",
    specialty: "Coquetelaria Autoral",
    availability: "Flexível",
    description: "Cria coquetéis exclusivos e personalizados.",
    contact: "51 98555-4215",

  },


  {
    id: 4,
    name: "Eduardo Alves",
    location: "Novo Hamburgo",
    specialty: "Coquetéis Tropicais",
    availability: "Finais de Semana",
    description: "Especialista em coquetéis tropicais ",
    contact: "51 99321-8524",

  },

];


// Location data
const locations = ["Canoas", "Porto Alegre", "São Leopoldo", "Novo Hamburgo", "Esteio", "Nova Santa Rita"];

// Specialization data
const specializations = ["Coquetéis Clássicos", "Coquetéis Tropicais", "Mixologia Molecular", "Coquetelaria Autoral", "Coquetelaria Clássica"];

// Function to display bartender listings
function displayBartenders(filteredBartenders = bartenders) {
  const bartenderList = document.getElementById("bartenderList");

  // Clear previous listings
  bartenderList.innerHTML = "";

  filteredBartenders.forEach((bartender) => {
    const bartenderCard = document.createElement("div");
    bartenderCard.className = "bartender-card";
    bartenderCard.innerHTML = `
        <h2 class="bartender-name">${bartender.name}</h2>
        <div class="bartender-details">
        <img src="bartender_${bartender.id}.jpg" alt="Bartender ${bartender.name}">

          <p><strong>Localização:</strong> ${bartender.location}</p>
          <p><strong>Especialidade:</strong> ${bartender.specialty}</p>
          ${bartender.availability ? `<p><strong>Disponibilidade:</strong> ${bartender.availability}</p>` : ''}
          ${bartender.description ? `<p><strong>Descrição:</strong> ${bartender.description}</p>` : ''} 
          ${bartender.contact ? `<p><strong>Contato:</strong> ${bartender.contact}</p>` : ''}
          </div><br>
      `;

     


      
    bartenderList.appendChild(bartenderCard);
  });
}

document.getElementById("searchButton").addEventListener("click", function () {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const filteredBartenders = bartenders.filter((bartender) =>
    bartender.name.toLowerCase().includes(searchText)
  );
  displayBartenders(filteredBartenders);
});




// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const searchInput = document.getElementById("searchInput").value;
  const locationSelect = document.getElementById("locationSelect");
  const specializationSelect = document.getElementById("specializationSelect");

  // Perform search based on input and selected location/specialization
  const filteredBartenders = bartenders.filter((bartender) =>
    bartender.name.toLowerCase().includes(searchInput.toLowerCase()) &&
    (locationSelect.value === "all" || bartender.location === locationSelect.value) &&
    (specializationSelect.value === "all" || bartender.specialty === specializationSelect.value)
  );

  // Display the filtered bartenders
  displayBartenders(filteredBartenders);
}

// Attach event listener to the search form
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", handleFormSubmit);

// Generate location and specialization options
generateLocationOptions();
generateSpecializationOptions();



// Display all bartenders initially
displayBartenders();


