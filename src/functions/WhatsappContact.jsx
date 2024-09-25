const WhatsappContact = () => {
    const phoneNumber = "62895622144623"; // Ganti dengan nomor WhatsApp kamu
    const message = "Hi Shaka, I see your portfolio website";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
};

export default WhatsappContact