export const coloredSlider = (newColors, chroma) => {
  const inputs = document.querySelectorAll(".slider input");

  inputs.forEach((slider) => {
    if (slider.classList.contains("hue")) {
      const hueValue = chroma(newColors).hsl()[0];
      slider.value = Math.floor(hueValue);
    }
    if (slider.classList.contains("saturation")) {
      const brightValue = chroma(newColors).hsl()[1];
      slider.value = Math.floor(brightValue * 100) / 100;
    }
    if (slider.classList.contains("brightness")) {
      const satValue = chroma(newColors).hsl()[2];
      slider.value = Math.floor(satValue * 100) / 100;
    }
  });
};
