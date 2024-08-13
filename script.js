document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const content = document.getElementById('content');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHome();
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadAbout();
    });

    // Load home page by default
    loadHome();

    function loadHome() {
        content.innerHTML = `
            <h1>Welcome to My Website</h1>
            <p>Hello! My name is Adnan Mahmood Alqasmi. I am 19 years old, and I am studying at the Modern College of Business and Science (MCBS).</p>
        `;
    }

    function loadAbout() {
        content.innerHTML = `
            <h1>About Me</h1>
            <div class="profile">
                <img src="profile.jpg" alt="Profile Picture" class="profile-picture">
                <h2>Adnan Mahmood Alqasmi</h2>
                <p>Email: adnan.alqasmi@example.com</p>
                <p>Bio: Currently studying CPT at Modern college of business
and science- semester 3
(Current Level: Freshman) in computer science.
I aim to be a CPT / cyber security master.</p>
             <p> Nov - Dec . 2023 (Trainee)
Alwaqf Al Khairy Foundation - Ghala
Participated in a youth program focused on skill
development.
Upcoming project: Tool for generating secure passwords.
(GITHUB)
Frequently participating in various youth center
programs.
Gained practical insights into the foundations ICT
operations.
Enhanced technical skills and deepened understanding of
the role of ICT in supporting the foundations mission and
impact. <p>

            </div>
        `;
    }
});
