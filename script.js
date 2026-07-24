// Back To Top Button

let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =======================================
// Google Ads GCLID Tracking for ClickBank
// =======================================

document.addEventListener("DOMContentLoaded", function () {

    // Read URL parameters from the landing page
    const params = new URLSearchParams(window.location.search);

    // Get the Google Click ID
    const gclid = params.get("gclid");

    // If there's no gclid, there's nothing to pass
    if (!gclid) return;

    // Find all links that point to the ClickBank offer
    document.querySelectorAll("a").forEach(link => {

        if (link.href.includes("balmorex.pro/welcome")) {

            const url = new URL(link.href);

            // Pass Google Ads tracking information
            url.searchParams.set("gclid", gclid);
            url.searchParams.set("traffic_source", "google");
            url.searchParams.set("traffic_type", "paid");

            // Update the link
            link.href = url.toString();
        }

    });

});