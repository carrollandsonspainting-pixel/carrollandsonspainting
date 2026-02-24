// Check auth state and redirect
auth.onAuthStateChanged(user => {
    const path = window.location.pathname;
    if (user) {
        // Check if admin (based on email)
        if (user.email === "carrollandsonspainting@gmail.com") {
            if (path.includes("admin.html")) return;
            window.location.href = "admin.html";
        } else {
            if (path.includes("dashboard.html")) return;
            window.location.href = "dashboard.html";
        }
    } else {
        // Not logged in – allow only public pages
        if (!path.includes("login.html") && !path.includes("signup.html") && !path.includes("index.html")) {
            window.location.href = "login.html";
        }
    }
});

// Logout function
function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}