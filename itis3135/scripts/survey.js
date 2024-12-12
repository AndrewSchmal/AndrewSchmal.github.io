// Display the result after submission
function displayResult(data) {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h2>Your Introduction Page</h2>
        <h3>${data.name}'s Introduction</h3>
        <img src="${data.image}" alt="${data['image-caption']}" style="max-width: 500px;">
        <p><strong>Mascot:</strong> ${data.mascot}</p>
        <p><strong>Personal Background:</strong> ${data['personal-background']}</p>
        <p><strong>Professional Background:</strong> ${data['professional-background']}</p>
        <p><strong>Academic Background:</strong> ${data['academic-background']}</p>
        <p><strong>Background in Web Development:</strong> ${data['web-background']}</p>
        <p><strong>Primary Computer Platform:</strong> ${data['computer-platform']}</p>
        <p><strong>Courses Currently Taking:</strong> ${data.courses.join(', ')}</p>
        <p><strong>Funny Thing:</strong> ${data['funny-thing']}</p>
        <p><strong>Anything Else:</strong> ${data['additional-info']}</p>
        <button onclick="location.reload()">Reset</button>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('byo-intro-form');
    const coursesContainer = document.getElementById('courses-container');
    const addCourseButton = document.getElementById('add-course');
    const previewImageBtn = document.getElementById('preview-image-btn');
    const previewImageContainer = document.getElementById('preview-image-container');

    // Add new course input field
    addCourseButton.addEventListener('click', () => {
        const newCourseInput = document.createElement('div');
        newCourseInput.className = 'course-entry';
        newCourseInput.innerHTML = `
            <input type="text" name="courses[]" placeholder="Course Name">
            <button type="button" class="remove-course">Remove</button>
        `;
        coursesContainer.appendChild(newCourseInput);

        // Remove course field
        newCourseInput.querySelector('.remove-course').addEventListener('click', () => {
            newCourseInput.remove();
        });
    });

    // Preview image
    previewImageBtn.addEventListener('click', () => {
        const imageInput = document.getElementById('image');
        const file = imageInput.files[0];

        if (file && ['image/jpeg', 'image/png'].includes(file.type)) {
            const imageUrl = URL.createObjectURL(file);
            previewImageContainer.innerHTML = `<img src="${imageUrl}" alt="Preview" style="max-width: 500px; border: 2px solid #333; border-radius: 8px;">`;
        } else {
            alert('Please upload a valid image file (JPG or PNG).');
        }
    });

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                alert('Please fill out all required fields.');
                field.focus();
                return;
            }
        }

        const image = document.getElementById('image').files[0];
        if (image && !['image/jpeg', 'image/png'].includes(image.type)) {
            alert('Please upload a valid image file (JPG or PNG).');
            return;
        }

        // Gather form data
        const formData = new FormData(form);
        const result = {};
        formData.forEach((value, key) => {
            if (key === 'courses[]') {
                if (!result['courses']) result['courses'] = [];
                result['courses'].push(value);
            } else {
                result[key] = value;
            }
        });

        // If image exists, add it to result
        if (image) {
            result.image = URL.createObjectURL(image);
        }

        // Display submitted data
        displayResult(result);
    });

    // Reset form handler
    form.addEventListener('reset', () => {
        const courseEntries = coursesContainer.querySelectorAll('.course-entry');
        courseEntries.forEach((entry) => entry.remove());
        previewImageContainer.innerHTML = ''; // Clear image preview
    });
});
