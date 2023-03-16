window.addEventListener('DOMContentLoaded', ()=> {

    const $ = (id) => document.getElementById(id);

    $('empForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const empId = $('id').value;
        const empName = $('name').value;
        const ext = $('ext').value;
        const email = $('email').value;
        const department = $('department').value;
        console.log(`ID: ${empId} \nName: ${empName} \nExtension: ${ext} \nEmail: ${email} \nDepartment: ${department}`)
    });
});