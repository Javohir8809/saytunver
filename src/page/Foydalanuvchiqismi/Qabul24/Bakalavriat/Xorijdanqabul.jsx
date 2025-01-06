import { useState } from 'react';

const Xorijdanqabul = () => {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    birthDate: '',
    email: '',
    address: '',
    interest: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Telegram botga ma'lumot yuborish
    const botToken = '7190586500:AAHc4bwio7CP67HPuQMsTuWxuHfm4-8Uzgs';
    const chatId = 'YOUR_TELEGRAM_CHAT_ID';
    const message = `
    Familiya: ${formData.surname}
    Ism: ${formData.name}
    Otasining ismi: ${formData.patronymic}
    Tug'ilgan sana: ${formData.birthDate}
    Pochta manzili: ${formData.email}
    Yashash manzili: ${formData.address}
    Qiziqish yo'nalishi: ${formData.interest}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      alert('Ma\'lumot yuborildi!');
      setFormData({
        surname: '',
        name: '',
        patronymic: '',
        birthDate: '',
        email: '',
        address: '',
        interest: '',
        phone: '',
      });
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      alert('Xatolik yuz berdi, qayta urinib ko\'ring.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-[100px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Ma'lumotlaringizni yuboring</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Familiya</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ism</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Otasining ismi</label>
          <input
            type="text"
            name="patronymic"
            value={formData.patronymic}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tug'ilgan sana</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Pochta manzili</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Telefon raqam</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Yashash manzili</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Qiziqayotgan yo'nalishi</label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Xorijdanqabul;
