const API_URL = "https://YOUR-ACTUAL-DOMAIN.com/api";

// 1. Add booking
fetch(`${API_URL}/add_booking.php`, {
    method: "POST",
    body: formData
});

// 2. Admin
fetch(`${API_URL}/admin.php`);

// 3. Check login
fetch(`${API_URL}/checklogin.php`);

// 4. Connection
// connection.php should normally NOT be called with fetch.
// It is included inside your other PHP files:
// require_once "connection.php";

// 5. Get booking options
fetch(`${API_URL}/get_booking_options.php`);

// 6. llogin
fetch(`${API_URL}/llogin.php`, {
    method: "POST",
    body: formData
});

// 7. Login
fetch(`${API_URL}/login.php`, {
    method: "POST",
    body: formData
});

// 8. Reset password
fetch(`${API_URL}/reset_password.php`, {
    method: "POST",
    body: formData
});

// 9. Send OTP
fetch(`${API_URL}/send_otp.php`, {
    method: "POST",
    body: formData
});

// 10. Signup
fetch(`${API_URL}/signup.php`, {
    method: "POST",
    body: formData
});

// 11. User dashboard
fetch(`${API_URL}/user_dashboard.php`);

// 12. User history
fetch(`${API_URL}/user_history.php`);

// 13. User login
fetch(`${API_URL}/user_login.php`, {
    method: "POST",
    body: formData
});

// 14. User profile
fetch(`${API_URL}/userprofile.php`);

// 15. Verify OTP
fetch(`${API_URL}/verify_otp.php`, {
    method: "POST",
    body: formData
});