/* =========================================================
   script.js — Frontend helper
   Talks to InfinityFree backend at mybooking.free.nf
   ========================================================= */

const API_BASE = "https://mybooking.free.nf";

/* =========================================================
   OLD FILES — live in htdocs/ (root)
   Used by your Android app + the original PHP pages
   ========================================================= */

/* ----- Admin login ----- */
async function adminLogin(username, password) {
    const r = await fetch(`${API_BASE}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return await r.json();
}

/* ----- User login ----- */
async function userLogin(mobile_number, password) {
    const fd = new FormData();
    fd.append("mobile_number", mobile_number);
    fd.append("password", password);

    const r = await fetch(`${API_BASE}/user_login.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Signup ----- */
async function signup(data) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(data)) fd.append(k, v);

    const r = await fetch(`${API_BASE}/signup.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Send OTP ----- */
async function sendOtp(mobile_number) {
    const fd = new FormData();
    fd.append("mobile_number", mobile_number);

    const r = await fetch(`${API_BASE}/send_otp.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Verify OTP ----- */
async function verifyOtp(user_id, mobile_number, otp_code) {
    const fd = new FormData();
    fd.append("user_id", user_id);
    fd.append("mobile_number", mobile_number);
    fd.append("otp_code", otp_code);

    const r = await fetch(`${API_BASE}/verify_otp.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Reset password ----- */
async function resetPassword(mobile_number, otp, new_password, confirm_password) {
    const fd = new FormData();
    fd.append("mobile_number", mobile_number);
    fd.append("otp", otp);
    fd.append("new_password", new_password);
    fd.append("confirm_password", confirm_password);

    const r = await fetch(`${API_BASE}/reset_password.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Add booking ----- */
async function addBooking(data) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(data)) fd.append(k, v);

    const r = await fetch(`${API_BASE}/add_booking.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Booking options (slots) ----- */
async function getBookingOptions(mobile_number = '') {
    const r = await fetch(`${API_BASE}/get_booking_options.php?mobile_number=${encodeURIComponent(mobile_number)}`);
    return await r.json();
}

/* ----- User profile (Android uses this) ----- */
async function getUserProfile(user_id = '', mobile_number = '') {
    const url = `${API_BASE}/userprofile.php?user_id=${user_id}&mobile_number=${encodeURIComponent(mobile_number)}`;
    const r = await fetch(url);
    return await r.json();
}

/* ----- Check login (helper) ----- */
async function checkLogin() {
    const r = await fetch(`${API_BASE}/checklogin.php`);
    return await r.json();
}

/* =========================================================
   NEW API FILES — live in htdocs/api/
   Used by the new GitHub Pages frontend
   ========================================================= */

/* ----- Admin login (new API) ----- */
async function apiLogin(username, password) {
    const r = await fetch(`${API_BASE}/api/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return await r.json();
}

/* ----- Generic get (slots / bookings / users / payments) ----- */
async function apiGetData(type = 'all') {
    const r = await fetch(`${API_BASE}/api/get_data.php?type=${type}`);
    return await r.json();
}

/* ----- Generic add ----- */
async function apiAddRecord(table, fields) {
    const fd = new FormData();
    fd.append("table", table);
    for (const [k, v] of Object.entries(fields)) fd.append(k, v);

    const r = await fetch(`${API_BASE}/api/add.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Generic update ----- */
async function apiUpdateRecord(table, id, fields) {
    const fd = new FormData();
    fd.append("table", table);
    fd.append("id", id);
    for (const [k, v] of Object.entries(fields)) fd.append(k, v);

    const r = await fetch(`${API_BASE}/api/update.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}

/* ----- Generic delete ----- */
async function apiDeleteRecord(table, id) {
    const fd = new FormData();
    fd.append("table", table);
    fd.append("id", id);

    const r = await fetch(`${API_BASE}/api/delete.php`, {
        method: "POST",
        body: fd
    });
    return await r.json();
}
