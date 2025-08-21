const tableBody = document.querySelector("#suppliersTable tbody");

async function fetchSuppliers() {
  try {
    const response = await fetch("https://northwind.vercel.app/api/suppliers");
    const data = await response.json();
    renderTable(data);
  } catch (error) {
    console.error("Xəta baş verdi:", error);
  }
}

function renderTable(suppliers) {
  suppliers.forEach(supplier => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${supplier.id}</td>
      <td>${supplier.companyName}</td>
      <td>${supplier.contactName}</td>
      <td>${supplier.contactTitle}</td>
      <td><button class="deleteBtn">Delete</button></td>
    `;

  
    tr.querySelector(".deleteBtn").addEventListener("click", () => {
      tr.remove(); 
    });

    tableBody.appendChild(tr);
  });
}

fetchSuppliers();
