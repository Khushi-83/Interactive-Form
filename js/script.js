form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  document.body.style.backgroundColor = 'lightpink';

  setTimeout(() => {
    alert("Congratulations! You got registered!");

    // Check if an image already exists and remove it to avoid duplicates
    const existingImg = document.getElementById('congrats-gif');
    if (existingImg) {
      existingImg.remove();
    }

    // Create and display the GIF
    const img = document.createElement('img');
    img.id = 'congrats-gif'; // Assign an ID for easy reference
    img.src = 'img/congrats.gif';
    img.alt = 'Congratulations Animation';
    img.style.display = 'block';
    img.style.margin = '20px auto';
    img.style.width = '300px';
    document.body.appendChild(img);
  }, 100);
});
