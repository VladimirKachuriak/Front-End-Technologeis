const fileInput = document.createElement('input');
fileInput.type = 'file';

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileContent = event.target.result;

    localStorage.setItem('uploadedFile', fileContent);
    console.log('File uploaded to local storage.');
  };

  reader.readAsText(file);
});

fileInput.click();