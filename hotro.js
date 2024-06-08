document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi yêu cầu mặc định
    
    // Kiểm tra dữ liệu đầu vào trước khi gửi yêu cầu
    if (validateForm()) {
    this.submit(); // Gửi yêu cầu nếu dữ liệu hợp lệ
    }
    });
    
    function validateForm() {
    // Kiểm tra dữ liệu đầu vào ở đây
    const fullName = document.getElementById("full_name").value.trim();
    const phoneNumber = document.getElementById("phone_number").value.trim();
    const email = document.getElementById("email").value.trim();
    const carModel = document.getElementById("car_model").value.trim();
    const service = document.getElementById("service").value.trim();
    const location = document.getElementById("location").value.trim();
    const time = document.getElementById("time").value.trim();
    
    if (fullName === "" || phoneNumber === "" || email === "" || carModel === "" || service === "" || location === "" || time === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return false;
    }
    
    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ!");
    return false;
    }
    
    // Kiểm tra định dạng số điện thoại
    const phonePattern = /^\d{10,}$/;
    if (!phonePattern.test(phoneNumber)) {
    alert("Vui lòng nhập số điện thoại hợp lệ!");
    return false;
    }
    
    // Kiểm tra định dạng thời gian
    const timePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if (!timePattern.test(time)) {
    alert("Vui lòng chọn thời gian hợp lệ!");
    return false;
    }
    
    return true; // Trả về true nếu dữ liệu hợp lệ
    }
    });
    