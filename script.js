document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const API_URL = "https://my-portfolio-backend-s8iy.onrender.com";

const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if(!res.ok) {
    throw new Error("Request failed");
  }


  const text = await res.text();
  alert(text);

  // Clear form
  document.getElementById("contactForm").reset();
});
