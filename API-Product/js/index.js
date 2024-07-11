import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import slider from "../components/slider.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("slider").innerHTML = slider();
document.getElementById("footer").innerHTML = footer();