import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function CompanyInfo() {
  return (
    <section id="company-info" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Реквизиты компании
          </h2>
          <p className="text-xl text-gray-600">
            Официальная информация о нашей организации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-display font-bold text-xl text-gray-900 flex items-center">
                <Icon name="Building" className="text-orange-500 mr-3" size={24} />
                Юридическая информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Полное наименование</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ИНН</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">КПП</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ОГРН</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display font-bold text-xl text-gray-900 flex items-center">
                <Icon name="CreditCard" className="text-orange-500 mr-3" size={24} />
                Банковские реквизиты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Расчетный счет</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Банк</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">БИК</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Корр. счет</p>
                <p className="text-gray-900 font-medium">Данные будут добавлены</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="font-display font-bold text-xl text-gray-900 flex items-center">
                <Icon name="MapPin" className="text-orange-500 mr-3" size={24} />
                Адрес и контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Юридический адрес</p>
                <p className="text-gray-900 font-medium">
                  614007, Пермский край, город Пермь, ул. Революции, д. 14, кв. 57
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="text-gray-900 font-medium">+7 (342) 270‒00‒01</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">ivanickiy@centerai.tech</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
