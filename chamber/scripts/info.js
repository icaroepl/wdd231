const infoPlace = document.querySelector("#info");

// http://localhost:5500/chamber/thankyou.html?first=Icaro&last=Lima&organizational-title=sadas&email=icaroemanuelpl%40gmail.com&phone=%2B5527999222562&organization-name=asda&description=asdas&selection=bronze&timestamp=

function displayInfo() {
    const params = new URLSearchParams(window.location.search);
    var name = params.get('first');
    var last = params.get('last');
    var email = params.get('email');
    var phone = params.get('phone');
    var organization = params.get('organization-name');
    var level = params.get('selection');
    var timestamp = params.get('timestamp');
    infoPlace.innerHTML = "Full Name: " + name + " " + last + "<br><br>" + "Email: " + email + "<br><br>" + "Phone: " + phone + "<br><br>" + "Organization Name: " + organization + "<br><br>" + "Membership level: " + level + "<br><br>" + timestamp;
}

if (infoPlace != null) {
    displayInfo();
}
