const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Biz haqimizda
      </h1>

      <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
        <div>
          <p className="mb-4">
            Platformamiz sizga eng so‘nggi texnologiyalar, sifatli mahsulotlar
            va qulay xizmatlar orqali onlayn xarid qilish imkonini beradi.
          </p>
          <p>
            Foydalanuvchilar uchun qulaylik — bizning ustuvor vazifamiz. Har bir
            mijoz uchun samarali, tez va ishonchli xizmat ko‘rsatishga harakat
            qilamiz.
          </p>
        </div>
        <div>
          <p className="mb-4">
            Bizning jamoa frontend, backend va dizayn yo‘nalishlarida tajribali
            mutaxassislardan iborat. Sayt ReactJS va TailwindCSS yordamida
            ishlab chiqilgan.
          </p>
          <p>
            Katalogdagi barcha mahsulotlar doimiy yangilanib boradi va sizga mos
            keladigan mahsulotni topish juda oson!
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          🎯 Bizning missiyamiz
        </h2>
        <p className="text-gray-700">
          Har bir foydalanuvchiga o‘ziga mos mahsulotni tez va ishonchli tarzda
          topishga yordam berish — bizning eng katta maqsadimiz.
        </p>
      </div>
    </div>
  );
};

export default About;
