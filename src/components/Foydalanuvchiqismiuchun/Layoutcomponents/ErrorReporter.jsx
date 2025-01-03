import React, { useEffect } from "react";

const ErrorReporter = () => {
  const reportError = (selectedText, pageUrl) => {
    if (!selectedText) {
      alert("Iltimos, xatolikni tanlang va qayta urinib ko‘ring.");
      return;
    }

    // Xatolikni serverga yuborish
    fetch("https://your-server.com/report-error", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        errorText: selectedText, // Tanlangan matn
        pageUrl: pageUrl, // Sahifa URL
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Xatolik haqida xabar yuborildi! Rahmat.");
        } else {
          alert("Xatolik haqida xabar yuborishda muammo yuz berdi.");
        }
      })
      .catch((error) => {
        console.error("Xatolik yuborishda xato:", error);
        alert("Xatolikni yuborishda tarmoq xatosi yuz berdi.");
      });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Faqat Ctrl + Enter kombinatsiyasini ushlash
      if (event.ctrlKey && event.key === "Enter") {
        const selectedText = window.getSelection().toString(); // Tanlangan matn
        const pageUrl = window.location.href; // Joriy sahifa URL

        // Tanlangan matnni xabar qilish
        reportError(selectedText, pageUrl);
      }
    };

    // Klaviatura hodisasini tinglash
    window.addEventListener("keydown", handleKeyDown);

    // Tozalash (cleanup)
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Faqat bir marta ishga tushadi

  return null; // Bu komponent UI elementga ega emas
};

export default ErrorReporter;
