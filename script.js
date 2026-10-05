// document ready function without JQuery
function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}

ready(function () {
    loadMenu();
});
    // Load the About section content directly without fetching an external file
    // I have problems to load this content from an external file, 
    // so it's hardcoded here. as I don't find the right filepath in github pages.
function loadMenu() {
    var data = `
            <h1>Menu</h1>
            <ul>
                <li><a href="#" onclick="loadAboutMe()">About Me</a></li>
                <li><a href="#" onclick="loadSkills()">Skills</a></li>
                <li><a href="#" onclick="loadEducation()">Education</a></li>
                <li><a href="#" onclick="loadExperience()">Experience</a></li>
                <li><a href="#" onclick="loadContact()">Contact</a></li>
            </ul>
        `;
    document.querySelector("#menu").innerHTML = data;
    document.querySelector("#returnToMenu").style.visibility = 'hidden';
    document.querySelector(".right").style.borderColor = 'red';
    document.querySelector(".right").style.backgroundColor = 'lightcoral';

}

function loadAboutMe() {
    var data = `
    <h1>About Me</h1>
    <p>I am a web developer with a passion for creating interactive and user-friendly websites. I have experience in HTML, CSS, and JavaScript, and I enjoy learning new technologies to enhance my skills.</p>
    <input type="button" value="Menu" onclick="loadMenu();">
    `;
    document.querySelector("#menu").innerHTML = data;
    document.querySelector(".right").style.borderColor = 'yellow';
    document.querySelector(".right").style.backgroundColor = 'lightyellow';
}

function loadSkills() {
    var data = `
    <h1>Skills</h1>
    <p>My skills include HTML, CSS, JavaScript, and responsive web design. I am proficient in creating interactive and user-friendly websites and continuously strive to improve my skills by learning new technologies.</p>
    <input type="button" value="Menu" onclick="loadMenu();">
    `;

    document.querySelector("#menu").innerHTML = data;
    document.querySelector(".right").style.borderColor = 'green';
    document.querySelector(".right").style.backgroundColor = 'lightgreen';
}

function loadEducation() {
    var data = `
    <h1>Education</h1>
    <p>I have a strong educational background in web development and computer science. I have completed courses in HTML, CSS, JavaScript, and other web technologies, which have equipped me with the skills needed to build modern and responsive websites.</p>
    <input type="button" value="Menu"onclick="loadMenu();">
    `;

    document.querySelector("#menu").innerHTML = data;
    document.querySelector(".right").style.borderColor = 'blue';
    document.querySelector(".right").style.backgroundColor = 'lightblue';
}

function loadExperience() {
    var data = `
    <h1>Experience</h1>
    <p>I have worked on various web development projects, gaining experience in HTML, CSS, JavaScript, and responsive web design. I have collaborated with teams to create interactive and user-friendly websites, and I continuously seek opportunities to expand my knowledge and skills in web development.</p>
    <input type="button" value="Menu" onclick="loadMenu();">
    `;
    document.querySelector("#menu").innerHTML = data;
    document.querySelector(".right").style.borderColor = 'violet';
    document.querySelector(".right").style.backgroundColor = 'lavender';

}

function loadContact() {
    var data = `
    <h1>Contact</h1>
    <p>You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
    <input type="button" value="Menu" onclick="loadMenu();">
    `;

    document.querySelector("#menu").innerHTML = data;
    document.querySelector(".right").style.borderColor = 'tomato';
    document.querySelector(".right").style.backgroundColor = 'lighttomato';

}

// function loadMenu() {
//     fetch("./Menu.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector("#returnToMenu").style.visibility = 'hidden';
//             document.querySelector(".right").style.borderColor = 'red';
//             document.querySelector(".right").style.backgroundColor = 'lightcoral';
//         });
// }

// function loadAboutMe() {
//     fetch("./AboutMe.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector(".right").style.borderColor = 'yellow';
//             document.querySelector(".right").style.backgroundColor = 'lightyellow';
//         });
// }

// function loadSkills() {
//     fetch("./Skills.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector(".right").style.borderColor = 'green';
//             document.querySelector(".right").style.backgroundColor = 'lightgreen';
//         });
// }

// function loadEducation() {
//     fetch("./Education.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector(".right").style.borderColor = 'blue';
//             document.querySelector(".right").style.backgroundColor = 'lightblue';
//         });
// }

// function loadExperience() {
//     fetch("./Experience.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector(".right").style.borderColor = 'violet';
//             document.querySelector(".right").style.backgroundColor = 'lavender';
//         });
// }

// function loadContact() {
//     fetch("./Contact.html")
//         .then(response => {
//             return response.text()
//         })
//         .then(data => {
//             document.querySelector("#menu").innerHTML = data;
//             document.querySelector(".right").style.borderColor = 'tomato';
//             document.querySelector(".right").style.backgroundColor = 'lighttomato';
//         });
// }
