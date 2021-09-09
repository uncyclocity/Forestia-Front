export default function getImagesUrlArr(files) {
  const imagesUrlArr = [];
  for (var i = 0; i < files.length; i++) {
    const imageUrl = window.URL.createObjectURL(files[i]);
    imagesUrlArr.push(imageUrl);
  }
  return imagesUrlArr;
}
