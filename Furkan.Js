const videoElement = document.getElementById("video");
const button = document.getElementById("button-49");

// Prompt tp select media stream, pass to video element, they play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("Opss, Hata Yaptın.!. Tekrar Kontrol Et.!", error);
  }
}
button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture İn Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
// On load
selectMediaStream();
