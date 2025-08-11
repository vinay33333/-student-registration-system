// ======================== Student Registration System ========================
// Author: Sampath Vinay Ram Vuppala
// Description: Handles adding, validating, editing, deleting, and searching student records.
// Data is stored persistently in browser's localStorage and works across all pages.
// ==============================================================================

// ===== Registration Page Elements =====
const studentForm = document.getElementById("studentForm");
const studentNameInput = document.getElementById("studentName");
const studentIdInput = document.getElementById("studentId");
const emailIdInput = document.getElementById("emailId");
const contactInput = document.getElementById("contactNumber");
const addressInput = document.getElementById("address");

const nameError = document.getElementById("nameError");
const idError = document.getElementById("idError");
const emailError = document.getElementById("emailError");
const contactError = document.getElementById("contactError");
const addressError = document.getElementById("addressError");

// ===== Records Page Elements =====
const studentsTable = document.getElementById("studentsTable");
const studentsTableBody = document.getElementById("studentsTableBody");
const emptyState = document.getElementById("emptyState");
const totalStudents = document.getElementById("totalStudents");
const searchInput = document.getElementById("searchInput");
const tableContainer = document.getElementById("tableContainer");

// ===== Edit Modal Elements =====
const editModal = document.getElementById("editModal");
const editForm = document.getElementById("editForm");
const editStudentName = document.getElementById("editStudentName");
const editStudentId = document.getElementById("editStudentId");
const editEmailId = document.getElementById("editEmailId");
const editContactNumber = document.getElementById("editContactNumber");
const editAddress = document.getElementById("editAddress");

const editNameError = document.getElementById("editNameError");
const editIdError = document.getElementById("editIdError");
const editEmailError = document.getElementById("editEmailError");
const editContactError = document.getElementById("editContactError");
const editAddressError = document.getElementById("editAddressError");

// ===== Notification =====
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");

// ===== Students Array (LocalStorage) =====
let students = JSON.parse(localStorage.getItem("students")) || [];

// ===== Event Listeners =====
if (studentForm) studentForm.addEventListener("submit", addStudent);
if (editForm) editForm.addEventListener("submit", updateStudent);
if (searchInput) searchInput.addEventListener("keyup", searchStudents);
document.addEventListener("DOMContentLoaded", renderStudents);
window.onclick = function (e) { if (e.target === editModal) closeEditModal(); };

// ===== Add Student =====
function addStudent(e) {
    e.preventDefault();

    if (!validateForm(studentNameInput, studentIdInput, emailIdInput, contactInput, addressInput,
        nameError, idError, emailError, contactError, addressError)) return;

    const student = {
        name: studentNameInput.value.trim(),
        id: studentIdInput.value.trim(),
        email: emailIdInput.value.trim(),
        contact: contactInput.value.trim(),
        address: addressInput.value.trim()
    };

    students.push(student);
    saveToLocalStorage();
    showNotification("Student added successfully!", "success");
    resetForm();
}

// ===== Render Students Table =====
function renderStudents(dataSet) {
    if (!studentsTableBody) return; // No table on some pages (like index)

    const toRender = dataSet || students;
    studentsTableBody.innerHTML = "";

    if (toRender.length === 0) {
        studentsTable.style.display = "none";
        emptyState.style.display = "block";
        totalStudents.textContent = "0";
        return;
    }

    studentsTable.style.display = "table";
    emptyState.style.display = "none";

    toRender.forEach((student, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>${student.address || "—"}</td>
            <td class="action-buttons">
                <button class="btn-edit" onclick="openEditModal(${idx})"><i class="fas fa-edit"></i></button>
                <button class="btn-delete" onclick="deleteStudent(${idx})"><i class="fas fa-trash"></i></button>
            </td>`;
        studentsTableBody.appendChild(tr);
    });

    totalStudents.textContent = toRender.length;
    handleDynamicScrollbar();
}

// ===== Delete Student =====
function deleteStudent(idx) {
    if (!confirm("Are you sure you want to delete this student?")) return;
    students.splice(idx, 1);
    saveToLocalStorage();
    renderStudents();
    showNotification("Student deleted.", "success");
}

// ===== Open Edit Modal =====
function openEditModal(idx) {
    const student = students[idx];
    document.getElementById("editIndex").value = idx;

    editStudentName.value = student.name;
    editStudentId.value = student.id;
    editEmailId.value = student.email;
    editContactNumber.value = student.contact;
    editAddress.value = student.address || "";

    editModal.style.display = "block";
}

// ===== Close Edit Modal =====
function closeEditModal() { editModal.style.display = "none"; }

// ===== Update Student =====
function updateStudent(e) {
    e.preventDefault();
    const idx = document.getElementById("editIndex").value;

    if (!validateForm(editStudentName, editStudentId, editEmailId, editContactNumber, editAddress,
        editNameError, editIdError, editEmailError, editContactError, editAddressError)) return;

    students[idx] = {
        name: editStudentName.value.trim(),
        id: editStudentId.value.trim(),
        email: editEmailId.value.trim(),
        contact: editContactNumber.value.trim(),
        address: editAddress.value.trim()
    };

    saveToLocalStorage();
    closeEditModal();
    renderStudents();
    showNotification("Student updated.", "success");
}

// ===== Search Students =====
function searchStudents() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { renderStudents(); return; }

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.id.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query) ||
        (s.address && s.address.toLowerCase().includes(query))
    );

    renderStudents(filtered);
}

// ===== Validation =====
function validateForm(name, id, email, contact, address,
    nameErr, idErr, emailErr, contactErr, addressErr) {
    let ok = true;

    if (!/^[a-zA-Z\s]+$/.test(name.value.trim())) { nameErr.textContent = "Only letters and spaces"; ok = false; }
    else nameErr.textContent = "";

    if (!/^\d+$/.test(id.value.trim())) { idErr.textContent = "Numbers only"; ok = false; }
    else idErr.textContent = "";

    if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) { emailErr.textContent = "Invalid email"; ok = false; }
    else emailErr.textContent = "";

    if (!/^\d{10,}$/.test(contact.value.trim())) { contactErr.textContent = "At least 10 digits"; ok = false; }
    else contactErr.textContent = "";

    if (address && address.value.trim().length < 5) { addressErr.textContent = "Please enter a valid address"; ok = false; }
    else addressErr.textContent = "";

    return ok;
}

// ===== Reset Form =====
function resetForm() {
    studentForm.reset();
    if (nameError) nameError.textContent = "";
    if (idError) idError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (contactError) contactError.textContent = "";
    if (addressError) addressError.textContent = "";
}

// ===== Save to LocalStorage =====
function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

// ===== Dynamic Scrollbar =====
function handleDynamicScrollbar() {
    if (!tableContainer) return;
    if (studentsTableBody.scrollHeight > 350) {
        tableContainer.style.overflowY = "scroll";
        tableContainer.style.maxHeight = "370px";
    } else {
        tableContainer.style.overflowY = "auto";
        tableContainer.style.maxHeight = "";
    }
}

// ===== Notifications =====
function showNotification(msg, type) {
    if (!notification) return;
    notificationMessage.textContent = msg;
    notification.className = "notification";
    if (type === "error") notification.classList.add("error");
    notification.style.display = "block";
    setTimeout(() => { notification.style.display = "none"; }, 2500);
}

function closeNotification() {
    if (notification) notification.style.display = "none";
}
