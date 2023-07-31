document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const enrollBtn = document.getElementById('enroll-btn');
    const clearBtn = document.getElementById('clear-btn');
    const studentInfo = document.getElementById('student-info');
  
    enrollBtn.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const website = document.getElementById('website').value;
      const image = document.getElementById('image').value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const skill = document.getElementById('skill').value;
  
      if (name && email && website && image && gender && skill) {
        const studentData = `
          <h2>Student Information:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>Image URL:</strong> ${image}</p>
          <p><strong>Gender:</strong> ${gender.value}</p>
          <p><strong>Skill:</strong> ${skill}</p>
        `;
        studentInfo.innerHTML = studentData;
      } else {
        alert('Please fill in all the fields.');
      }
    });
  
    clearBtn.addEventListener('click', function () {
      form.reset();
      studentInfo.innerHTML = '';
    });
  });
  