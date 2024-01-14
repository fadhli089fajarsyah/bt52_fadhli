function  abc(event) {
    // mencegah agar tidak browser terrefresh otomatis
    event.preventDefault();
    // mengambil data dari html
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('your_message').value;
    // pengkondian validasi
    if  (name == ""){
        return alert("nama harus di isi")
    } else if(email  == ""){
        return alert("email harus di isi")
    } else if(phoneNumber  == ""){
        return alert("phone Number harus di isi")
    } else if(subject  == ""){
        return alert("subject harus di isi")
    }else if(message  == ""){
        return alert("message harus di isi")
    }
    // menampung data
    const alertMessage = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Subject: ${subject}
        Your Message: ${message}
    `;

    alert(alertMessage);

    // Mengalihkan ke link email setelah alert dikonfirmasi
    const mailtoLink = `mailto:fadhlifajarsyah089@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n \n' +  "dan di bawah ini adalah nomor dan email saya" + '\n' + phoneNumber +'\n'+email)}`;
    // agar aplikasi ketika di klik maka langsung ngelink
    window.location.href = mailtoLink;
}