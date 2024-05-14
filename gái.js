function uploadImage() {
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = e => { 
    var file = e.target.files[0]; 

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      var content = readerEvent.target.result; 
      var image = document.createElement('img');
      image.src = content;
      document.body.appendChild(image);
    }
  }
  

  input.click();
}
function previewImage(event, rowId) {
  var reader = new FileReader();
  reader.onload = function() {
    var preview = document.getElementById('preview_' + rowId);
    var image = document.createElement('img');
    image.className = 'preview';
    image.src = reader.result;
    preview.innerHTML = '';
    preview.appendChild(image);

    // Gửi hình ảnh đã tải lên lên máy chủ
    var formData = new FormData();
    formData.append('image', event.target.files[0]);
    fetch('upload.php', {
      method: 'POST',
      body: formData
    });
  };
  reader.readAsDataURL(event.target.files[0]);
}