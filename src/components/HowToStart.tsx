export default function HowToStart() {
  const steps = [
    {
      step: '01',
      title: 'Выберите тариф',
      description: 'Подберите оптимальный тарифный план для вашего бизнеса'
    },
    {
      step: '02',
      title: 'Оставьте заявку',
      description: 'Заполните форму или позвоните нам для оформления подписки'
    },
    {
      step: '03',
      title: 'Получите доступ',
      description: 'Мы настроим ваш аккаунт и отправим данные для входа'
    },
    {
      step: '04',
      title: 'Начните работать',
      description: 'Войдите в систему через браузер и приступайте к работе'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Как начать работу
          </h2>
          <p className="text-xl text-gray-600">
            Всего несколько простых шагов для начала работы с 1С в облаке
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-display font-bold text-xl">{step.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-200 to-indigo-200"></div>
                )}
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}